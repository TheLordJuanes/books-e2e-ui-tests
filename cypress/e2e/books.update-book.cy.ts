import { BookPage, DashboardPage } from "../page";

const bookPage = new BookPage();
const dashboardPage = new DashboardPage();

describe("Verifying Updating Process of a Book in the Dashboard", () => {
    let previousBookName;
    let previousBookAuthor;

    before(() => {
        cy.visit("localhost:4200");
        cy.wait(1000);
        dashboardPage.getFirstRowCellByAttribute("Name").invoke("text").then((name) => {
            previousBookName = name;
        });
        dashboardPage.getFirstRowCellByAttribute("Author").invoke("text").then((author) => {
            previousBookAuthor = author;
        });
    });

    beforeEach(() => {
        // Arrange
        cy.visit("localhost:4200");
        cy.wait(1000);
        dashboardPage.openUpdateBookForm();
    });

    describe("Happy path", () => {
        it("should update all the information of a book in the Dashboard", () => {
            //Actions
            bookPage.updateBookInformation(["Name", "Author"], ["Moby-Dick", "Herman Melville"]);
            bookPage.getSaveButton().click();

            cy.wait(1000);

            // Assertions
            dashboardPage.getFirstRowCellByAttribute("Name")
                .should("not.have.text", previousBookName)
                .and("have.text", "Moby-Dick");

            dashboardPage.getFirstRowCellByAttribute("Author")
                .should("not.have.text", previousBookAuthor)
                .and("have.text", "Herman Melville");
        });

        it("should update only the name of a book in the Dashboard", () => {
            //Actions
            bookPage.updateBookInformation(["Name"], ["Moby-Dick"]);
            bookPage.getSaveButton().click();

            cy.wait(1000);

            // Assertions
            dashboardPage.getFirstRowCellByAttribute("Name")
                .should("not.have.text", previousBookName)
                .and("have.text", "Moby-Dick");

            dashboardPage.getFirstRowCellByAttribute("Author").should("have.text", previousBookAuthor);
        });

        it("should update only the author of a book in the Dashboard", () => {
            //Actions
            bookPage.updateBookInformation(["Author"], ["Herman Melville"]);
            bookPage.getSaveButton().click();

            cy.wait(1000);

            // Assertions
            dashboardPage.getFirstRowCellByAttribute("Author")
                .should("not.have.text", previousBookAuthor)
                .and("have.text", "Herman Melville");

            dashboardPage.getFirstRowCellByAttribute("Name").should("have.text", previousBookName);
        });

        afterEach(() => {
            dashboardPage.openUpdateBookForm();
            bookPage.updateBookInformation(["Name", "Author"], [previousBookName, previousBookAuthor]);
            bookPage.getSaveButton().click();
            cy.wait(1000);
        });
    });

    describe("Unhappy paths", () => {
        it("shouldn't allow to update a book in the Dashboard with an 'empty' name represented with a space", () => {
            //Actions
            bookPage.updateBookInformation(["Name"], [" "]);

            cy.wait(1000);

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to update book in the Dashboard with an 'empty' author represented with a space", () => {
            //Actions
            bookPage.updateBookInformation(["Author"], [" "]);

            cy.wait(1000);

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to update a book in the Dashboard with both 'empty' name and author represented with a space", () => {
            //Actions
            bookPage.updateBookInformation(["Name", "Author"], [" ", " "]);

            cy.wait(1000);

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });

        it("shouldn't allow to update a book in the Dashboard with the same name and author of an other existing book", () => {
            //Actions
            bookPage.updateBookInformation(["Name", "Author"], ["Programming Pearls", "Jon Bentley"]);

            cy.wait(1000);

            // Assertions
            bookPage.getSaveButton().should('be.disabled');
        });
    });
});