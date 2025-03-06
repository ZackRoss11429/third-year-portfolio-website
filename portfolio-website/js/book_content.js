import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import {Button, AdvancedDynamicTexture, Image} from "@babylonjs/gui";


// Below is a class for interactable book models
class InteractableBook {
    constructor(title, pageCount) {
        this.title = title;
        this.pageCount = pageCount;
        this.pages = [];
        this.currentPage = 1;
    }
    // Attributes of each book object

    async preloadPages() {
        for (let i=1; i<=this.pageCount; i++) {
            let pageData = await this.loadPageData(i);
            this.pages.push(pageData);
        }
        console.log("All pages loaded: ", this.pages);
    }
    // When book object is instantiated, all book page content files are loading into an array to be displayed


    // Function that awaits the loading of a particular page's content to then be displayed
    async loadPageData(pageNumber) {
        try {
            const response = await fetch(`../book_contents/${this.title}/page_${pageNumber}.txt`);
            if (!response.ok) throw new Error(`Failed to load page ${pageNumber}`);
            let text = await response.text();
            // fetches the specific book page using the title and page number to find its file location

            let titleMatch = text.match(/\[title\](.*?)\[\/title\]/s);
            let textMatch = text.match(/\[text\](.*?)\[\/text\]/s);
            let imageMatch = text.match(/\[image\]\[\/image\]/s);
            let orderMatch = text.match(/\[order\](.*?)\[\/order\]/s);
            // checks the page file for text and image data

            console.log(`Attempting to load page:  ${pageNumber}, Response:`, text);
            return {
                title: titleMatch ? titleMatch[1].trim() : "",
                text: textMatch ? textMatch[1].trim() : "",
                image: imageMatch ? `../book_contents/${this.title}/page_${pageNumber}_image.jpg` : null,
                order: orderMatch ? orderMatch[1].trim() : "123"
                // displays the data found in the page. If certain data is not there, It is not displayed
            };

        } catch (error) {
            console.error(`Error loading page $[pageNumber}: `, error);
            return {title: "", text: "", image: null, order: "000"};
            // If page data is unable to be loaded, the page is displayed as blank
        }
    }

    // This formats the text to appear correctly on the page.
    // The text is divided into 24 character page lines, as well as able to identify special formatting characters
    // such as bold, italics or colour
    formatText(text) {

        let words = text.split(" ");
        let formattedText = "";
        let line = "";

        words.forEach(word => {
            if ((line + word).length > 24) {
                formattedText += line.trim() + "\n";
                line = "";
            }
            line += word + " ";
        });

        formattedText += line.trim();

        return formattedText
            .replace(/&l/g, "[B]")
            .replace(/&o/g, "[I]")
            .replace(/&n/g, "[U]")
            .replace(/&m/g, "[S]")
            .replace(/&r/g, "[R]")
            .replace(/&[0-9a-f]/g, match => `<span style="color:${getColourCode(match)}">`);
    }

}

// This function grabs the correct colour hex whenever a colour formatting phrase is written in the page file
function getColourCode(code) {
    const colours = {
        "&0": "#000000", "&1": "#0000AA", "&2": "#00AA00", "&3": "#00AAAA",
        "&4": "#AA0000", "&5": "#AA00AA", "&6": "#FFAA00", "&7": "#AAAAAA",
        "&8": "#555555", "&9": "#5555FF", "&a": "#55FF55", "&b": "#55FFFF",
        "&c": "#FF5555", "&d": "#FF55FF", "&e": "#FFFF55", "&f": "#FFFFFF"
    };
    return colours[code] || "#000000";
}

let bookOpen = false;
let book = null;
let bookGUI = null;
let container = null;

// This creates a StackPanel container for all page data to be displayed in. It is then aligned and scaled properly to
// make it look like the book from Minecraft that it is replicating
function createPageLayout(bookGUI, layoutOrder, pageData) {
    container = new GUI.StackPanel();
    container.width = "584px";
    container.height = "720px";
    container.paddingTop = "55px";
    container.paddingLeft = "30px";
    container.paddingRight = "30px";
    container.thickness = 1;
    container.isVertical = true;
    container.spacing = 30;
    container.isPointerBlocker = true;
    container.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    container.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;

    // This orders the title, text and image data onto the page based on the order phrase written in the page file.
    // For example, 123 means displaying Title, then text then image. 321 means displaying image, text then title.
    let elements = {
        "1": () => createTitle(pageData.title),
        "2": () => createText(pageData.text),
        "3": () => createImage(pageData.image)
    };

    layoutOrder.split("").forEach(element => {
        if (elements[element] && typeof elements[element] === "function") {
            elements[element]();
        } else {
            console.warn(`No valid function found for element: ${element}`);
        }
    });

    bookGUI.addControl(container);
    return container;
}

// This adds the custom Minecraft font to replicate the book from Minecraft
let fontStyle = document.createElement("style");
fontStyle.innerHTML = `
        @font-face {
            font-family: 'Minecraft';
            src: url('../fonts/minecraft_font.ttf') format('truetype');
        }`;
document.head.appendChild(fontStyle);

// This function is for instantiating a TextBlock element to be display the Title data
function createTitle(titleText) {
    let title = new GUI.TextBlock();
    title.text = titleText || "Title";
    title.left = "50px";
    title.fontSize = 36;
    title.fontFamily = "Minecraft";
    title.color = "black";
    title.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    title.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
    container.addControl(title);
}

// This function is for instantiating a TextBlock element to be display the Text data
function createText(textContent) {
    let text = new GUI.TextBlock();
    text.text = book.formatText(textContent);
    text.fontSize = 36;
    text.fontFamily = "Minecraft";
    text.color = "black";
    text.textWrapping = true;
    text.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    text.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    container.addControl(text);
}

// This function is for instantiating an image element to be display the image data
function createImage(imagePath) {
    let image = new GUI.Image("pageImage", imagePath);
    image.width = "75%";
    image.height = "75%";
    image.stretch = GUI.Image.STRETCH_UNIFORM;
    image.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    container.addControl(image);
}

// This function is for instantiating a TextBlock element to be display the current page number
function createPageNumberDisplay() {
    let pageNumber = new GUI.TextBlock();
    pageNumber.text = `Page ${book.currentPage} of ${book.pageCount}`;
    pageNumber.fontSize = 36;
    pageNumber.fontFamily = "Minecraft";
    pageNumber.color = "black";
    pageNumber.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    pageNumber.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
    container.addControl(pageNumber);

}

// This function is for instantiating image buttons for the user to switch between pages
function createButton(name, imagePath, alignment, offsetX, action, hoverImagePath) {
    let button = new GUI.Image(name, imagePath);
    button.width = "73.6px";
    button.height = "41.6px";
    button.stretch = GUI.Image.STRETCH_UNIFORM;
    button.horizontalAlignment = alignment;
    button.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    button.left = offsetX;
    button.onPointerDownObservable.add(action);
    button.onPointerEnterObservable.add(() => { button.source = hoverImagePath; console.log("enter");});
    button.onPointerOutObservable.add(() => { button.source = imagePath; console.log("out")});
    container.addControl(button);
}

// Any time an action is done by the user, this function awaits the page data and displays it on the page. This is
// in case of events like page switching, book opening and closing
async function updatePageContent() {
    if (!book) {
        console.log(book);
        console.error("Book data is missing");
        return
    }

    let pageData = book.pages[book.currentPage - 1] || { title: "", text: "", image: null, order: "000" };

    createPageLayout(bookGUI, pageData.order, pageData);

    console.log(`Displaying pages ${book.currentPage} & ${book.currentPage + 1}`);
}


// Checks what buttons need to be displayed based on the current page.
async function goToPreviousPage() {
    if (book.currentPage > 1) {
        book.currentPage -= 1;
        clearGUI();
        await updateGUI();
    }
}
async function goToNextPage() {
    if (book.currentPage < book.pageCount - 1) {
        book.currentPage += 1;
        clearGUI();
        await updateGUI();
    }
}


// This instantiates the book object and calls the book data to be loaded and displayed
export async function openBook(scene, title, pageCount) {
    if (bookOpen) return;

    bookOpen = true;
    book = new InteractableBook(title, pageCount);

    console.log("Book pages preloaded");
    await book.preloadPages();
    await isBookOpen(scene);
}


// This function deletes the book object and removes it from display
export function closeBook() {
    clearGUI();
    bookOpen = false;
    book = null;
    console.log("Closed book");
}

function clearGUI() {
    if (bookGUI) {
        bookGUI.dispose();
        bookGUI = null;
    }
}


// This instantiates the GUI for the book to be displayed
async function updateGUI() {

    bookGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("BookGUI");

    let bookBackground = new GUI.Image("bookBackPage", "../images-objects/book/single_page.jpg");
    bookBackground.width = "584px";
    bookBackground.height = "720px";
    bookBackground.stretch = GUI.Image.STRETCH_UNIFORM;
    bookGUI.addControl(bookBackground);

    await updatePageContent();

    createPageNumberDisplay();

    if(book.currentPage > 1) {
        createButton(
            "prevButton",
            "../images-objects/book/page_backward.png",
            GUI.Control.HORIZONTAL_ALIGNMENT_LEFT,
            "7%",
            goToPreviousPage,
            "../images-objects/book/page_backward_highlighted.png");
    }

    if(book.currentPage < book.pageCount) {
        createButton(
            "nextButton",
            "../images-objects/book/page_forward.png",
            GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT,
            "-7%",
            goToNextPage,
            "../images-objects/book/page_forward_highlighted.png");
    }

    console.log("Showing container: ", container);

}


// This checks for whether the user wants to open and read the book so calls for the GUI to be created, loaded and displays
export async function isBookOpen(scene) {
    console.log("Opening book: ", bookOpen);
    console.log("Current book: ", book);
    if (!bookOpen) return;

    if (bookOpen && (bookGUI !== null)) { //if the book is open and the GUI is already created so we don't create another GUI
        return
    }

    await updateGUI();

}