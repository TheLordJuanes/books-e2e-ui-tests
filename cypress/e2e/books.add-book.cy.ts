import { BookPage } from "../page";
import { DashboardPage } from "../page";

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
        it("should add a book to the dashboard", () => {
            //Actions
            bookPage.enterBookInformation("Moby-Dick", "Herman Melville");
            bookPage.getSaveButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody()
                .should("include.text", "Moby-Dick")
                .and("include.text", "Herman Melville");
        });

        after(() => {
            dashboardPage.getBooksTableBody()
                .contains('td', 'Moby-Dick')
                .parent()
                .find('[type="checkbox"]')
                .check();

            dashboardPage.getDeleteButton().click();

            dashboardPage.getBooksTableBody()
                .should('not.include.text', 'Moby-Dick')
                .and('not.include.text', 'Herman Melville');
        });
    });

    describe("Unhappy paths", () => {
        describe("Adding a book with missing information", () => {
            it("shouldn't add a book to the dashboard with an 'empty' name represented with a space, and a provided author", () => {
                //Actions
                bookPage.enterBookInformation(" ", "Herman Melville");
                bookPage.getSaveButton().click();

                // Assertions
                dashboardPage.getBooksTableBody()
                    .should("not.include.text", " ")
                    .and("not.include.text", "Herman Melville");
            });

            it("shouldn't add a book to the dashboard with an 'empty' author represented with a space, and a provided name", () => {
                //Actions
                bookPage.enterBookInformation("Moby-Dick", " ");
                bookPage.getSaveButton().click();

                // Assertions
                dashboardPage.getBooksTableBody()
                    .should("not.include.text", "Moby-Dick")
                    .and("not.include.text", " ");
            });

            it("shouldn't allow to add a book with both 'empty' name and author represented with a space", () => {
                //Actions
                bookPage.enterBookInformation(" ", " ");

                // Assertions
                bookPage.getSaveButton().should('be.disabled');
            });
        });

        describe("Adding an existing book", () => {
            it("shouldn't allow to add an existing book to the dashboard", () => {
                //Actions
                bookPage.enterBookInformation("Moby-Dick", "Herman Melville");
                bookPage.getSaveButton().click();
                cy.wait(1000);
                dashboardPage.openAddBookForm();
                bookPage.enterBookInformation("Moby-Dick", "Herman Melville");

                // Assertions
                bookPage.getSaveButton().should('be.disabled');
            });
        });
    });
});