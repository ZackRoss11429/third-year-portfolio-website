import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import {Button, AdvancedDynamicTexture, Image} from "@babylonjs/gui";

class interactableBook {
    constructor(title, pageCount) {
        this.title = title;
        this.pageCount = pageCount;
        this.pages = Array.from({length: pageCount}, () => ({text: "", image: null}));
        this.currentPage = 1;
    }


    async getPageContent(title, pageNumber) {
        try {
            if (pageNumber > this.pageCount || pageNumber < 1) return "Page not found";

            const response = await fetch(`../book_contents/${this.title}/page_${pageNumber}.txt`);
            if (!response.ok) throw new Error("Failed to load text file");
            let text = await response.text();

            return this.formatText(text, 23);

        } catch (error) {
            console.error("Error loading text:", error);
            return "Error loading text";
        }
    }

    formatText(text, maxChars) {
        let words = text.split(" ");
        let formattedText = "";
        let line = "";

        words.forEach(word => {
            if ((line + word).length > maxChars) {
                formattedText += line.trim() + "\n";
                line = "";
            }
            line += word + " ";
        });
        formattedText += line.trim();
        return formattedText;
    }


}




let bookGUI = null;
let bookOpen = false;
let book = null;

export function openBook(scene, title, pageCount) {

    if (bookOpen) {
        return;
    }
    bookOpen = true;
    book = new interactableBook(title, pageCount);
    isBookOpen(book, scene);
}

export function closeBook() {
    if (bookGUI) {
        bookGUI.dispose();
        bookGUI = null;
    }
    bookOpen = false;
    book = null;
    console.log("Closed book");
}

export async function isBookOpen(scene) {
    console.log("checking book status");

    if (!bookOpen) {
        return;
    }

    let bookGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("BookGUI");

    let bookBackground = new GUI.Image("bookBackPage", "../images-objects/book/double_page.jpg");
    bookBackground.width =  "75%";
    bookBackground.height = "75%";
    bookBackground.stretch = GUI.Image.STRETCH_UNIFORM;
    bookGUI.addControl(bookBackground);

    let bookContainer = new GUI.Rectangle();
    bookContainer.width = bookBackground.width;
    bookContainer.height = bookBackground.height;
    bookContainer.thickness = 0;
    bookContainer.isPointerBlocker = true;
    bookGUI.addControl(bookContainer);
    bookContainer.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    bookContainer.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;

    function createButton(name, imagePath, alignment, offsetX) {
        let button = new GUI.Image(name, imagePath);
        button.width = "6%";
        button.height = "6%";
        button.stretch = GUI.Image.STRETCH_UNIFORM;
        button.horizontalAlignment = alignment;
        button.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        button.left = offsetX;
        button.top = "-21%";
        return button;
    }

    let prevButton = createButton("prevButton", "../images-objects/book/left_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, "5%");
    let nextButton = createButton("nextButton", "../images-objects/book/right_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT, "-5%");

    bookContainer.addControl(prevButton);
    bookContainer.addControl(nextButton);

    let fontStyle = document.createElement("style");
    fontStyle.innerHTML = `
        @font-face {
            font-family: 'Minecraft';
            src: url('../fonts/minecraft_font.ttf') format('truetype');
        }`;
    document.head.appendChild(fontStyle);

    function createTextBlock(name, offsetX) {
        let textBlock = new GUI.TextBlock(name);
        textBlock.width = "60%";
        textBlock.height = "50%";
        textBlock.color = "black";
        textBlock.fontSize = "3.6%";
        textBlock.fontFamily = "Minecraft";
        textBlock.textWrapping = true;
        textBlock.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        textBlock.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        textBlock.top = "-18.25%";
        textBlock.left = offsetX; // Dynamic position
        return textBlock;
    }

    let leftPageText = createTextBlock("leftPageText", "-17.5%");
    let rightPageText = createTextBlock("rightPageText", "17.5%");

    bookGUI.addControl(leftPageText);
    bookGUI.addControl(rightPageText);


    async function updatePageContent() {
        leftPageText.text = await book.getPageContent(book.title, book.currentPage);
        rightPageText.text = await book.getPageContent(book.title, book.currentPage + 1);
    }
    
    await updatePageContent();



    closeBook();
}
