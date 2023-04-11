import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

class BookPage {
    private readonly bookNameInput : string;
    private readonly bookAuthorInput : string;
    private readonly saveButton : string;

    constructor() {
        this.bookNameInput = '#name';
        this.bookAuthorInput = '#author';
        this.saveButton = '.ant-modal-footer > .ant-btn-primary';
    }

    public getSaveButton() {
        return cy.get(this.saveButton);
    }

    public enterBookInformation(bookName: string, bookAuthor: string) {
        cy.get(this.bookNameInput).click().wait(1000).type(bookName);
        cy.get(this.bookAuthorInput).click().type(bookAuthor);
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

    public generateRandomBookInfo() {
        const customConfig: Config = {
            dictionaries: [names, names],
            length: 2,
            separator: ' ',
        };
        const bookName: string = uniqueNamesGenerator(customConfig);
        const bookAuthor: string = uniqueNamesGenerator(customConfig);
        return { name: bookName, author: bookAuthor };
    }
}

export { BookPage }