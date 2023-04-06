class DashboardPage {
    private addBookButton : string;
    private readonly deleteBookButton : string;
    private readonly updateBookButton : string;
    private selectBookButton : string;
    private selectAllBooksButton : string;
    private readonly booksTableBody : string;
    private previousPageButton : string;
    private nextPageButton : string;
    private readonly booksPerPageButton : string;
    private readonly maximumBooksPerPageButton : string;

    constructor() {
        this.addBookButton = '.ant-btn-primary > .ng-star-inserted';
        this.deleteBookButton = '[nztype="default"]';
        this.updateBookButton = ':nth-child(1) > :nth-child(4) > .ant-btn';
        this.selectBookButton = ':nth-child(9) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input';
        this.selectAllBooksButton = '.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input';
        this.booksTableBody = '.ant-spin-container';
        this.previousPageButton = '.ant-pagination-prev > .ant-pagination-item-link';
        this.nextPageButton = '.ant-pagination-next > .ant-pagination-item-link';
        this.booksPerPageButton = '.ant-select-selector';
        this.maximumBooksPerPageButton = '[ng-reflect-label="50 / page"] > .ant-select-item-option-content';
    }

    public openAddBookForm() {
        cy.get(this.addBookButton).click();
    }

    public deleteAllBooks() {
        cy.get(this.selectAllBooksButton).click();
        cy.get(this.deleteBookButton).click();
    }

    public getUpdateButton() {
        return cy.get(this.updateBookButton);
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
}

export { DashboardPage }