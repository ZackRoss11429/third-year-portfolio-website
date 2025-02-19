

export function openBook(scene) {

}

class interactableBook{
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
        return this.pages[pageNumber];
    }

}