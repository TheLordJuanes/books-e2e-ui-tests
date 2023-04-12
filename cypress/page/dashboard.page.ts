class DashboardPage {
    private addBookButton : string;
    private updateBookButton : string;
    private selectAllBooksButton : string;
    private readonly deleteBookButton : string;
    private readonly booksTableBody : string;
    private readonly booksPerPageButton : string;
    private readonly minimumBooksPerPageButton : string;
    private readonly twentyBooksPerPageButton : string;
    private readonly thirtyBooksPerPageButton : string;
    private readonly fortyBooksPerPageButton : string;
    private readonly maximumBooksPerPageButton : string;
    private readonly previousPageButton : string;
    private readonly nextPageButton : string;
    private readonly firstPageButton : string;
    private readonly secondPageButton : string;

    constructor() {
        this.addBookButton = '.ant-btn-primary > .ng-star-inserted';
        this.deleteBookButton = '[nztype="default"]';
        this.updateBookButton = ':nth-child(1) > :nth-child(4) > .ant-btn';
        this.selectAllBooksButton = '.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input';
        this.booksTableBody = '.ant-spin-container';
        this.booksPerPageButton = '.ant-select-selector';
        this.minimumBooksPerPageButton = '[title="10 / page"] > .ant-select-item-option-content';
        this.twentyBooksPerPageButton = '[title="20 / page"] > .ant-select-item-option-content';
        this.thirtyBooksPerPageButton = '[title="30 / page"] > .ant-select-item-option-content';
        this.fortyBooksPerPageButton = '[title="40 / page"] > .ant-select-item-option-content';
        this.maximumBooksPerPageButton = '[title="50 / page"] > .ant-select-item-option-content';
        this.previousPageButton = '.ant-pagination-prev > .ant-pagination-item-link';
        this.nextPageButton = '.ant-pagination-next > .ant-pagination-item-link';
        this.firstPageButton = '[title="1"] > .ng-star-inserted';
        this.secondPageButton = '[title="2"] > .ng-star-inserted';
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

    public getBooksTableBody() {
        return cy.get(this.booksTableBody);
    }

    public getDeleteButton() {
        return cy.get(this.deleteBookButton);
    }

    public getBooksPerPageButton() {
        return cy.get(this.booksPerPageButton);
    }

    public getMinimumBooksPerPageButton() {
        return cy.get(this.minimumBooksPerPageButton);
    }

    public getTwentyBooksPerPageButton() {
        return cy.get(this.twentyBooksPerPageButton);
    }

    public getThirtyBooksPerPageButton() {
        return cy.get(this.thirtyBooksPerPageButton);
    }

    public getFortyBooksPerPageButton() {
        return cy.get(this.fortyBooksPerPageButton);
    }

    public getMaximumBooksPerPageButton() {
        return cy.get(this.maximumBooksPerPageButton);
    }

    public getFirstPageButton() {
        return cy.get(this.firstPageButton);
    }

    public getSecondPageButton() {
        return cy.get(this.secondPageButton);
    }

    public getPreviousPageButton() {
        return cy.get(this.previousPageButton);
    }

    public getNextPageButton() {
        return cy.get(this.nextPageButton);
    }

    public getFirstRowCellByAttribute(attribute: string) {
        const columnIndex = {
            Name: 2,
            Author: 3
        };

        return cy.get(this.updateBookButton).parent().parent().find(`td:nth-child(${columnIndex[attribute]})`);
    }

    public checkBookButton(bookName: string) {
        this.getBooksTableBody().contains('td', bookName).parent().find('[type="checkbox"]').check();
    }

    public deleteRandomBooks(randomBookList: any[]) {
        for (let i = 0; i < randomBookList.length; i++) {
            this.checkBookButton(randomBookList[i]['name']);
            this.getDeleteButton().click();
            cy.wait(1000);
        }
    }
}

export { DashboardPage }