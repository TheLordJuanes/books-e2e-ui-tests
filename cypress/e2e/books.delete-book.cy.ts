import {BookPage, DashboardPage} from "../page";

const bookPage = new BookPage();
const dashboardPage = new DashboardPage();

describe("Verifying Deleting Process of a Book in the Dashboard", () => {
    describe("Deleting one or some books from the dashboard", () => {
        beforeEach(() => {
            // Arrange
            cy.visit("localhost:4200");
            cy.wait(1000);
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMaximumBooksPerPageButton().click();
        });

        it("should delete one book from the dashboard", () => {
            //Actions
            dashboardPage.checkBookButton("The Art of Computer Programming");
            dashboardPage.getDeleteButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody().should('not.contain', "The Art of Computer Programming");
        });

        it("should delete more than one book from the dashboard", () => {
            //Actions
            dashboardPage.checkBookButton("Programming Pearls");
            dashboardPage.checkBookButton("Working Effectively with Legacy Code");
            dashboardPage.getDeleteButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody().should('not.contain', 'Programming Pearls');
            dashboardPage.getBooksTableBody().should('not.contain', 'Working Effectively with Legacy Code');
        });

        after(() => {
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("The Art of Computer Programming", "Donald Knuth");
            bookPage.getSaveButton().click();
            cy.wait(1000);
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("Programming Pearls", "Jon Bentley");
            bookPage.getSaveButton().click();
            cy.wait(1000);
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("Working Effectively with Legacy Code", "Michael Feathers");
            bookPage.getSaveButton().click();
            cy.wait(1000);
        });
    });

    describe("Deleting a large number of books", () => {
        before(() => {
            //Arrange
            cy.visit("localhost:4200");
            cy.wait(1000);
        });

        it("should delete all the books from a page in the dashboard", () => {
            //Actions
            dashboardPage.deleteAllBooks();

            // Assertions
            dashboardPage.getSecondPageButton().should('not.exist');
            dashboardPage.getFirstPageButton().should('exist').and('be.visible');
        });
    });

    describe("Deleting all the books from the dashboard", () => {
        before(() => {
            //Arrange
            cy.visit("localhost:4200");
            cy.wait(1000);
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMaximumBooksPerPageButton().click();
        });

        it("should delete all books from the dashboard", () => {
            //Actions
            dashboardPage.deleteAllBooks();

            // Assertions
            dashboardPage.getBooksTableBody().should('include.text', 'No Data');
        });
    });
});