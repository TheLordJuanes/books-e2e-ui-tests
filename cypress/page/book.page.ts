class BookPage {
    private readonly bookNameInput : string;
    private readonly bookAuthorInput : string;
    private readonly saveButton : string;

    constructor() {
        this.bookNameInput = '#name';
        this.bookAuthorInput = '#author';
        this.saveButton = '.ant-modal-footer > .ant-btn-primary';
    }

    public enterBookInformation(bookName: string, bookAuthor: string) {
        cy.get(this.bookNameInput).click().wait(1000).type(bookName);
        cy.get(this.bookAuthorInput).click().wait(1000).type(bookAuthor);
    }

    public updateBookInformation(attributes: string[], newValues: string[]) {
        const selectors = {
            Name: this.bookNameInput,
            Author: this.bookAuthorInput,
        };

        attributes.forEach((attribute, index) => {
            cy.get(selectors[attribute]).click().clear().type(newValues[index]);
        });
    }

    public getSaveButton() {
        return cy.get(this.saveButton);
    }
}

export { BookPage }