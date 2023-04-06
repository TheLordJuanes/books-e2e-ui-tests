class BookPage {
    private readonly bookNameInput : string;
    private readonly bookAuthorInput : string;
    private readonly saveButton : string;

    constructor() {
        this.bookNameInput = '#name';
        this.bookAuthorInput = '#author';
        this.saveButton = '.ant-modal-footer > .ant-btn-primary';
    }

    public saveBook(bookName: string, bookAuthor: string) {
        cy.get(this.bookNameInput).click().type(bookName);
        cy.get(this.bookAuthorInput).click().type(bookAuthor);
        cy.get(this.saveButton).click();
    }

    public updateBook(attributes: string[], newValue: string) {
        const selectors = {
            Name: this.bookNameInput,
            Author: this.bookAuthorInput,
        };

        attributes.forEach(attribute => {
            cy.get(selectors[attribute]).clear().click().type(newValue);
        });

        cy.get(this.saveButton).click();
    }
}

export { BookPage }