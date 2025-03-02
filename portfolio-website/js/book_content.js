import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";
import {Button, AdvancedDynamicTexture, Image} from "@babylonjs/gui";

// class interactableBook {
//     constructor(title, pageCount, layoutType) {
//         this.title = title;
//         this.pageCount = pageCount;
//         this.layoutType = layoutType;
//         this.pages = Array.from({length: pageCount}, () => ({text: "", image: null}));
//         this.currentPage = 1;
//     }
//
//
//     async getPageContent(title, pageNumber) {
//         if (pageNumber > this.pageCount || pageNumber < 1) return "Page not found";
//
//         try {
//             const response = await fetch(`../book_contents/${this.title}/page_${pageNumber}.txt`);
//             if (!response.ok) throw new Error("Failed to load text file");
//             let text = await response.text();
//
//             let titleMatch = text.match(/^#Title:\s*(.*)/m);
//             let pageTitle = titleMatch ? titleMatch[1].trim() : "";
//             let pageText = text.replace(/^#Title:.*\n/, "").trim();
//
//             return {title: pageTitle, text: this.formatText(text, 23)};
//
//         } catch (error) {
//             console.error("Error loading text:", error);
//             return "Error loading text";
//         }
//     }
//
//
//     formatText(text) {
//         let words = text.split(" ");
//         let formattedText = "";
//         let line = "";
//
//         words.forEach(word => {
//             if ((line + word).length > 23) {
//                 formattedText += line.trim() + "\n";
//                 line = "";
//             }
//             line += word + " ";
//         });
//         formattedText += line.trim();
//         return formattedText
//             .replace(/&l/g, "[B]")
//             .replace(/&o/g, "[I]")
//             .replace(/&n/g, "[U]")
//             .replace(/&k/g, "[M]")
//             .replace(/&m/g, "[S]")
//             .replace(/&r/g, "[R]")
//             .replace(/&[0-9a-f]/g, (match) => `<span style="color:${getColourCode(match)}">`);
//     }
// }
//
// const pageLayouts = {
//     TITLE_IMAGE_TEXT: 1,
//     TEXT_ONLY: 2,
//     TITLE_TEXT: 3,
//     IMAGE_TEXT: 4,
//     TEXT_IMAGE: 5,
//     TITLE_IMAGE: 6,
//     IMAGE_IMAGE: 7
// }
//
// function getColourCode(code) {
//     const colours = {
//         "&0": "#000000", "&1": "#0000AA", "&2": "#00AA00", "&3": "#00AAAA",
//         "&4": "#AA0000", "&5": "#AA00AA", "&6": "#FFAA00", "&7": "#AAAAAA",
//         "&8": "#555555", "&9": "#5555FF", "&a": "#55FF55", "&b": "#55FFFF",
//         "&c": "#FF5555", "&d": "#FF55FF", "&e": "#FFFF55", "&f": "#FFFFFF"
//     };
//     return colours[code] || "#000000";
// }
//
//
// function createPageLayout(bookGUI, layoutType, pageTitle, pageText, pageImagePath, pageLayouts) {
//     let container = new GUI.Rectangle();
//     container.width = "75%";
//     container.height = "75%";
//     container.thickness = 0;
//     container.isPointerBlocker = true;
//
//
//
//     if ([pageLayouts.TITLE_IMAGE_TEXT, pageLayouts.TITLE_TEXT, pageLayouts.TITLE_IMAGE].includes(layoutType)) {
//         let title = new GUI.TextBlock();
//         title.text = pageTitle || "Title";
//         title.fontSize = 48;
//         title.fontFamily = "Minecraft";
//         title.color = "black";
//         title.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
//         title.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
//         title.top = "-40%";
//         container.addControl(title);
//     }
//
//     if ([pageLayouts.TITLE_IMAGE_TEXT, pageLayouts.IMAGE_TEXT, pageLayouts.TEXT_IMAGE, pageLayouts.TITLE_IMAGE, pageLayouts.IMAGE_IMAGE].includes(layoutType)) {
//         let image = new GUI.Image("pageImage", pageImagePath);
//         image.width = "25%";
//         image.height = "25%";
//         image.stretch = GUI.Image.STRETCH_UNIFORM;
//         image.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
//         image.top = layoutType === pageLayouts.TEXT_IMAGE ? "25%" : "-25%";
//         container.addControl(image);
//     }
//
//     if ([pageLayouts.TITLE_IMAGE_TEXT, pageLayouts.TEXT_ONLY, pageLayouts.TITLE_TEXT, pageLayouts.IMAGE_TEXT, pageLayouts.TEXT_IMAGE].includes(layoutType)) {
//         let text = new GUI.TextBlock();
//         text.text = book.formatText(pageText);
//         text.fontSize = 32;
//         text.fontFamily = "Minecraft";
//         text.color = "black";
//         text.textWrapping = true;
//         text.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
//         text.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
//         text.top = layoutType === pageLayouts.TEXT_IMAGE ? "-25%" : "25%";
//         container.addControl(text);
//     }
//
//     bookGUI.addControl(container);
//     return container;
//
// }
//
// let bookGUI = null;
// let bookOpen = false;
// let book = null;
// let leftPageText, rightPageText;
//
// export async function openBook(scene, title, pageCount, layoutType) {
//     if (bookOpen) {
//         return;
//     }
//     bookOpen = true;
//     book = new interactableBook(title, pageCount, layoutType);
//     console.log("Book instantiated: ", book);
//     await isBookOpen(scene);
// }
//
// export function closeBook() {
//     if (bookGUI) {
//         bookGUI.dispose();
//         bookGUI = null;
//     }
//     bookOpen = false;
//     book = null;
//     console.log("Closed book");
// }
//
//
// let fontStyle = document.createElement("style");
// fontStyle.innerHTML = `
//         @font-face {
//             font-family: 'Minecraft';
//             src: url('../fonts/minecraft_font.ttf') format('truetype');
//         }`;
// document.head.appendChild(fontStyle);
//
// function createButton(name, imagePath, alignment, offsetX, action) {
//     let button = new GUI.Image(name, imagePath);
//     button.width = "3%";
//     button.height = "3%";
//     button.stretch = GUI.Image.STRETCH_UNIFORM;
//     button.horizontalAlignment = alignment;
//     button.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
//     button.left = offsetX;
//     button.top = "-21%";
//     button.onPointerDownObservable.add(action);
//     return button;
// }
//
// function createTextBlock(textBlock, offsetX) {
//     textBlock.width = "60%";
//     textBlock.height = "50%";
//     textBlock.color = "black";
//     textBlock.fontSize = "3.6%";
//     textBlock.fontFamily = "Minecraft";
//     textBlock.textWrapping = true;
//     textBlock.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
//     textBlock.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
//     textBlock.top = "-18.25%";
//     textBlock.left = offsetX;
//     bookGUI.addControl(textBlock);
// }
//
// async function updatePageContent() {
//
//     if (!book) {
//         console.error("Book is not instantiated.");
//         return;
//     }
//
//     let leftPageData = await book.getPageContent(book.title, book.currentPage);
//     let rightPageData = await book.getPageContent(book.title, book.currentPage + 1);
//
//     if (leftPageText && rightPageText) {
//         leftPageText.text = leftPageData.text;
//         rightPageText.text = rightPageData.text;
//
//         if (leftPageData.title) {
//             leftPageText.text = `[B]${leftPageData.title}[/B]\n\n` + leftPageData.text;
//         }
//         if (rightPageData.title) {
//             rightPageText.text = `[B]${rightPageData.title}[/B]\n\n` + rightPageData.text;
//         }
//
//     } else {
//         console.error("Text not initialised");
//     }
//
//
// }
//
// function goToPreviousPage() {
//     if(book.currentPage > 1) {
//         book.currentPage -= 2;
//         updatePageContent();
//     }
// }
//
// function goToNextPage() {
//     if (book.currentPage < book.pageCount - 1) {
//         book.currentPage += 2;
//         updatePageContent();
//     }
// }
//
//
// export async function isBookOpen(scene) {
//     if (!bookOpen) {
//         return;
//     }
//
//     bookGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("BookGUI");
//
//     let bookBackground = new GUI.Image("bookBackPage", "../images-objects/book/double_page.jpg");
//     bookBackground.width =  "75%";
//     bookBackground.height = "75%";
//     bookBackground.stretch = GUI.Image.STRETCH_UNIFORM;
//     bookBackground.isPointerBlocker = true;
//     bookBackground.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
//     bookBackground.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
//     bookGUI.addControl(bookBackground);
//
//     let prevButton = createButton("prevButton", "../images-objects/book/left_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, "5%", goToPreviousPage);
//     let nextButton = createButton("nextButton", "../images-objects/book/right_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT, "-5%", goToNextPage);
//     bookGUI.addControl(prevButton);
//     bookGUI.addControl(nextButton);
//
//     leftPageText = new GUI.TextBlock();
//     rightPageText = new GUI.TextBlock();
//     createTextBlock(leftPageText, "-20%");
//     createTextBlock(rightPageText, "20%");
//
//     let leftPageImage =  `../book_contents/${book.title}/page_${book.currentPage}_image.jpg`;
//     let rightPageImage =  `../book_contents/${book.title}/page_${book.currentPage+1}_image.jpg`;
//
//     createPageLayout(bookGUI, book.layoutType, book.title, leftPageText, leftPageImage, pageLayouts);
//     createPageLayout(bookGUI, book.layoutType, book.title, rightPageText, rightPageImage, pageLayouts);
//
//     console.log("Book UI initialised");
//
//     if (!book) {
//         console.error("Book object is NULL inside isBookOpen()");
//         return;
//     }
//
//     await updatePageContent();
//     closeBook();
// }

class InteractableBook {
    constructor(title, pageCount) {
        this.title = title;
        this.pageCount = pageCount;
        this.pages = [];
        this.currentPage = 1;
    }

    async preloadPages() {
        for (let i=1; i<=this.pageCount; i++) {
            let pageData = await this.loadPageData(i);
            this.pages.push(pageData);
        }
        console.log("All pages loaded: ", this.pages);
    }

    async loadPageData(pageNumber) {
        try {
            const response = await fetch(`../book_contents/${this.title}/page_${pageNumber}.txt`);
            if (!response.ok) throw new Error(`Failed to load page ${pageNumber}`);
            let text = await response.text();

            let titleMatch = text.match(/\[title\](.*?)\[\/title\]/s);
            let textMatch = text.match(/\[text\](.*?)\[\/text\]/s);
            let imageMatch = text.match(/\[image\]\[\/image\]/s);
            let orderMatch = text.match(/\[order\](.*?)\[\/order\]/s);

            console.log(`Attempting to load page:  ${pageNumber}, Response:`, text);
            return {
                title: titleMatch ? titleMatch[1].trim() : "",
                text: textMatch ? textMatch[1].trim() : "",
                image: imageMatch ? `../book_contents/${this.title}/page_${pageNumber}_image.jpg` : null,
                order: orderMatch ? orderMatch[1].trim() : "123"
            };

        } catch (error) {
            console.error(`Error loading page $[pageNumber}: `, error);
            return {title: "", text: "", image: null, order: "000"};
        }
    }


    formatText(text) {
        return text
            .replace(/&l/g, "[B]")
            .replace(/&o/g, "[I]")
            .replace(/&n/g, "[U]")
            .replace(/&m/g, "[S]")
            .replace(/&r/g, "[R]")
            .replace(/&[0-9a-f]/g, match => `<span style="color:${getColourCode(match)}">`);
    }

}

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

function createPageLayout(bookGUI, layoutOrder, pageData) {
    let container = new GUI.StackPanel();
    container.width = "75%";
    container.height = "75%";
    container.thickness = 0;
    container.isPointerBlocker = true;
    container.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    container.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;

    let elements = {
        "1": () => createTitle(pageData.title, container),
        "2": () => createText(pageData.text, container),
        "3": () => createImage(pageData.image, container)
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

let fontStyle = document.createElement("style");
fontStyle.innerHTML = `
        @font-face {
            font-family: 'Minecraft';
            src: url('../fonts/minecraft_font.ttf') format('truetype');
        }`;
document.head.appendChild(fontStyle);

function createTitle(titleText, container) {
    let title = new GUI.TextBlock();
    title.text = titleText || "Title";
    title.fontSize = 32;
    title.fontFamily = "Minecraft";
    title.color = "black";
    title.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    title.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
    title.top = "-40%";
    container.addControl(title);
}

function createText(textContent, container) {
    let text = new GUI.TextBlock();
    text.text = textContent;
    text.fontSize = 32;
    text.fontFamily = "Minecraft";
    text.color = "black";
    text.textWrapping = true;
    text.textHorizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
    text.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    container.addControl(text);
}

function createImage(imagePath, container) {
    let image = new GUI.Image("pageImage", imagePath);
    image.width = "25%";
    image.height = "25%";
    image.stretch = GUI.Image.STRETCH_UNIFORM;
    image.textVerticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    container.addControl(image);
}

function createButton(name, imagePath, alignment, offsetX, action) {
    let button = new GUI.Image(name, imagePath);
    button.width = "3%";
    button.height = "3%";
    button.stretch = GUI.Image.STRETCH_UNIFORM;
    button.horizontalAlignment = alignment;
    button.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    button.left = offsetX;
    button.top = "-21%";
    button.onPointerDownObservable.add(action);
    return button;
}

async function updatePageContent() {
    if (!book) {
        console.log(book);
        console.error("Book data is missing");
        return
    }

    let leftPageData = book.pages[book.currentPage - 1] || { title: "", text: "", image: null, order: "000" };
    let rightPageData = book.pages[book.currentPage] || { title: "", text: "", image: null, order: "000" };

    createPageLayout(bookGUI, leftPageData.order, leftPageData);
    createPageLayout(bookGUI, rightPageData.order, rightPageData);

    console.log(`Displaying pages ${book.currentPage} & ${book.currentPage + 1}`);
    }

function goToPreviousPage() {
    if (book.currentPage > 1) {
        book.currentPage -= 2;
        updatePageContent();
    }
}

function goToNextPage() {
    if (book.currentPage < book.pageCount - 1) {
        book.currentPage += 2;
        updatePageContent();
    }
}

export async function openBook(scene, title, pageCount) {
    if (bookOpen) return;

    bookOpen = true;
    book = new InteractableBook(title, pageCount);

    console.log("Book pages preloaded");
    await book.preloadPages();
    await isBookOpen(scene);
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
    console.log("Opening book: ", bookOpen);
    console.log("Current book: ", book);
    if (!bookOpen) { //if the book is closed
        if (bookGUI) { // there is still a GUI we want to get rid of it
            bookGUI.dispose();
            bookGUI = null;
        }
        return
    }

    if (bookOpen && bookGUI) { //if the book is open and the GUI is already created
        return
    }

    bookGUI = GUI.AdvancedDynamicTexture.CreateFullscreenUI("BookGUI");

    let bookBackground = new GUI.Image("bookBackPage", "../images-objects/book/double_page.jpg");
    bookBackground.width = "75%";
    bookBackground.height = "75%";
    bookBackground.stretch = GUI.Image.STRETCH_UNIFORM;
    bookGUI.addControl(bookBackground);

    let prevButton = createButton("prevButton", "../images-objects/book/left_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_LEFT, "5%", goToPreviousPage);
    let nextButton = createButton("nextButton", "../images-objects/book/right_button.jpg", GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT, "-5%", goToNextPage);
    bookGUI.addControl(prevButton);
    bookGUI.addControl(nextButton);

    await updatePageContent();

}