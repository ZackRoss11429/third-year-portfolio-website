import * as BABYLON from "@babylonjs/core";
import * as GUI from "@babylonjs/gui";

class interactableBook {
    constructor(title, pageCount) {
        this.title = title;
        this.pageCount = pageCount;
        this.pages = [];

        for (let i = 0; i < pageCount; i++) {
            this.pages.push({text: "", image: null});
        }

    }

    setText(pageNumber, text) {
        this.pages[pageNumber].text = text;
    }

    setImage(pageNumber, imagePath) {
        this.pages[pageNumber].image = imagePath;
    }

    getPageContent(pageNumber) {
        // const pages = new BABYLON.Layer('', '');

        return this.pages[pageNumber];
    }


}

function bookContents() {

}




let bookGUI = null;
let bookOpen = false;
let currentBook = null;

export function openBook(scene, title, pageCount) {

    if (bookOpen) {
        return;
    }
    bookOpen = true;
    currentBook = {title, pageCount, currentPage: 1};

    isBookOpen(scene);

    // const book = new interactableBook(title, pageCount);
}

export function closeBook() {
    if (bookGUI) {
        bookGUI.dispose();
        bookGUI = null;
    }
    bookOpen = false;
    currentBook = null;
    console.log("Closed book");
}

export function isBookOpen(scene) {
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

    let prevButton = new GUI.Image("prevButton", "../images-objects/book/left_button.jpg");
    prevButton.width =  "4%";
    prevButton.height = "4%";
    prevButton.stretch = GUI.Image.STRETCH_UNIFORM;

    prevButton.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    prevButton.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    prevButton.left = "24%";
    prevButton.top = "-18%";

    bookGUI.addControl(prevButton);

    let nextButton = new GUI.Image("nextButton", "../images-objects/book/right_button.jpg");
    nextButton.width =  "4%";
    nextButton.height = "4%";
    nextButton.stretch = GUI.Image.STRETCH_UNIFORM;

    nextButton.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    nextButton.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    nextButton.left = "-24%";
    nextButton.top = "-18%";

    bookGUI.addControl(nextButton);



    closeBook();
}
