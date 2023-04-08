class DashboardPage {
    private addBookButton : string;
    private readonly deleteBookButton : string;
    private readonly updateBookButton : string;
    private selectAllBooksButton : string;
    private readonly booksTableBody : string;
    private readonly booksPerPageButton : string;
    private readonly maximumBooksPerPageButton : string;
    private readonly nextPageButton : string;

    constructor() {
        this.addBookButton = '.ant-btn-primary > .ng-star-inserted';
        this.deleteBookButton = '[nztype="default"]';
        this.updateBookButton = ':nth-child(1) > :nth-child(4) > .ant-btn';
        this.selectAllBooksButton = '.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input';
        this.booksTableBody = '.ant-spin-container';
        this.booksPerPageButton = '.ant-select-selector';
        this.maximumBooksPerPageButton = '[ng-reflect-label="50 / page"] > .ant-select-item-option-content';
        this.nextPageButton = '.ant-pagination-next > .ant-pagination-item-link';
    }

    public openAddBookForm() {
        cy.get(this.addBookButton).click();
    }

    public openUpdateBookForm() {
        cy.get(this.updateBookButton).click();
    }

    public deleteAllBooks() {
        cy.get(this.selectAllBooksButton).click();
        cy.get(this.deleteBookButton).click();
    }

    public getFirstRowCellByAttribute(attribute: string) {
        const columnIndex = {
            Name: 2,
            Author: 3
        };

        return cy.get(this.updateBookButton).parent().parent().find(`td:nth-child(${columnIndex[attribute]})`);
    }

    public getBooksTableBody() {
        return cy.get(this.booksTableBody);
    }

    public getDeleteButton() {
        return cy.get(this.deleteBookButton);
    }

    public getBooksPerPageButton() {
        return cy.get(this.booksPerPageButton);
    }

    public getMaximumBooksPerPageButton() {
        return cy.get(this.maximumBooksPerPageButton);
    }

    public getNextPageButton() {
        return cy.get(this.nextPageButton);
    }
}

export { DashboardPage }