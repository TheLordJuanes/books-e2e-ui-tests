import { BookPage, DashboardPage } from "../page";

const bookPage = new BookPage();
const dashboardPage = new DashboardPage();

describe("Verifying Deleting Process of a Book in the Dashboard", () => {
    describe("Deleting all books from a page", () => {
        before(() => {
            //Arrange
            cy.visit("https://books-ui-juans.azurewebsites.net");
            cy.wait(1000);
        });

        it("should delete all books from a page in the Dashboard", () => {
            //Actions
            dashboardPage.deleteAllBooks();

            // Assertions
            dashboardPage.getSecondPageButton().should('not.exist');
            dashboardPage.getFirstPageButton().should('exist').and('be.visible');
        });
    });

    describe("Deleting one, some and all books from the Dashboard", () => {
        before(() => {
            // Arrange
            cy.visit("https://books-ui-juans.azurewebsites.net");
            cy.wait(1000);
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("AAA", "Ana");
            bookPage.getSaveButton().click();
            cy.wait(1000);
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("BBB", "Bob");
            bookPage.getSaveButton().click();
            cy.wait(1000);
            dashboardPage.openAddBookForm();
            bookPage.enterBookInformation("CCC", "Camilo");
            bookPage.getSaveButton().click();
            cy.wait(1000);
        });

        beforeEach(() => {
            // Arrange
            cy.visit("https://books-ui-juans.azurewebsites.net");
            cy.wait(1000);
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMaximumBooksPerPageButton().click();
        });

        it("should delete one book from the Dashboard", () => {
            //Actions
            dashboardPage.checkBookButton("AAA");
            dashboardPage.getDeleteButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody().should('not.contain', "AAA");
        });

        it("should delete more than one book from the Dashboard", () => {
            //Actions
            dashboardPage.checkBookButton("BBB");
            dashboardPage.checkBookButton("CCC");
            dashboardPage.getDeleteButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody().should('not.contain', 'BBB');
            dashboardPage.getBooksTableBody().should('not.contain', 'CCC');
        });

        it("should delete all books from the Dashboard", () => {
            //Actions
            dashboardPage.deleteAllBooks();

            // Assertions
            dashboardPage.getBooksTableBody().should('include.text', 'No Data');
        });
    });

    after(() => {
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("The Art of Computer Programming", "Donald Knuth");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("The Clean Coder: A Code of Conduct for Professional Programmers", "Jon Bentley");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Working Effectively with Legacy Code", "Robert C. \"Uncle Bob\" Martin");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("The Mythical Man-Month: Essays on Software Engineering", "Frederick P. Brooks");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Programming Pearls", "Jon Bentley");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. \"Uncle Bob\" Martin");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("CODE: The Hidden Language of Computer Hardware and Software", "Charles Petzold");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Soft Skills: The Software Developer's Life Manual", "John Sonmez");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Patterns of Enterprise Application Architecture", "Martin Fowler");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Design Patterns: Elements of Reusable Object-Oriented Software", "Erich Gamma, Richard Helm, and Ralph Johnson");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("The Pragmatic Programmer: From Journeyman to Master", "Andrew Hunt and Dave Thomas");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Cracking the Coding Interview: 189 Programming Questions and Solutions", "Gayle Laakmann McDowell");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Refactoring: Improving the Design of Existing Code", "Martin Fowler");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Code Complete: A Practical Handbook of Software Construction", "Steve McConnell");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Head First Design Patterns: A Brain-Friendly Guide", "Eric Freeman, Elizabeth Robson, Kathy Sierra, and Bert Bales");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Introduction to Algorithms", "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Don't Make Me Think: A Common Sense Approach to Web Usability", "Steve Krug");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Peopleware: Productive Projects and Teams", "Tom DeMarco and Timothy Lister");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Agile Software Development: Principles, Patterns, and Practices", "Robert C. \"Uncle Bob\" Martin");
        bookPage.getSaveButton().click();
        cy.wait(1000);
        dashboardPage.openAddBookForm();
        bookPage.enterBookInformation("Clean Architecture: A Craftsman's Guide to Software Structure and Design", "Robert C. \"Uncle Bob\" Martin");
        bookPage.getSaveButton().click();
    });
});