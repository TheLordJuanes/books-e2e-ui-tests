import { BookPage, DashboardPage } from "../page";

const bookPage = new BookPage();
const dashboardPage = new DashboardPage();

describe("Verifying Adding Process of a Book to the Dashboard", () => {
    beforeEach(() => {
        // Arrange
        cy.visit("localhost:4200");
        cy.wait(1000);
        dashboardPage.getBooksPerPageButton().click();
        dashboardPage.getMaximumBooksPerPageButton().click();
        dashboardPage.openAddBookForm();
    });

    describe("Happy path", () => {
        it("should add a book with one author to the Dashboard", () => {
            //Actions
            bookPage.enterBookInformation("Moby-Dick", "Herman Melville");
            bookPage.getSaveButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody()
                .should("include.text", "Moby-Dick")
                .and("include.text", "Herman Melville");
        });

        it("should add a book with more than one author delimited by ', ' to the Dashboard", () => {
            //Actions
            bookPage.enterBookInformation("Hamlet", "Herman Melville, William Shakespeare");
            bookPage.getSaveButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody()
                .should("include.text", "Hamlet")
                .and("include.text", "Herman Melville, William Shakespeare");
        });

        after(() => {
            dashboardPage.deleteRandomBooks([
                    {name: "Moby-Dick", author: "Herman Melville"},
                    {name: "Hamlet", author: "Herman Melville, William Shakespeare"},
                ]
            );
        });
    });

    describe("Unhappy paths", () => {
        it("shouldn't allow to add a book to the Dashboard with an 'empty' name represented with a space, and a provided author", () => {
            //Actions
            bookPage.enterBookInformation(" ", "Herman Melville");

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to add a book to the Dashboard with an 'empty' author represented with a space, and a provided name", () => {
            //Actions
            bookPage.enterBookInformation("Moby-Dick", " ");

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to add a book to the Dashboard with both 'empty' name and author represented with a space", () => {
            //Actions
            bookPage.enterBookInformation(" ", " ");

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to add a book with more than one author not delimited by ', ' to the Dashboard", () => {
            //Actions
            bookPage.enterBookInformation("Hamlet", "Herman Melville; William Shakespeare");

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to add an existing book to the Dashboard", () => {
            //Actions
            bookPage.enterBookInformation("Programming Pearls", "Jon Bentley");
            cy.wait(1000);

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });
    });
});