import { BookPage, DashboardPage } from "../page";

const bookPage = new BookPage();
const dashboardPage = new DashboardPage();

describe("Verifying Getting Process of Books to the Dashboard", () => {
    beforeEach(() => {
        // Arrange
        cy.visit("localhost:4200");
        cy.wait(1000);
    });

    describe("At most 10 books per page", () => {
        it("should get at most 10 books per page to the Dashboard", () => {
            //Actions
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMinimumBooksPerPageButton().click();
            cy.wait(1000);

            // Assertions
            dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                expect(rows).to.have.length.at.most(10);
            });
        });

        it("should get at most 10 books per page to the Dashboard when going to next page", () => {
            //Actions
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMinimumBooksPerPageButton().click();
            cy.wait(1000);
            dashboardPage.getNextPageButton().click();

            // Assertions
            dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                expect(rows).to.have.length.at.most(10);
            });
        });

        it("should get at most 10 books per page to the Dashboard when going to previous page", () => {
            //Actions
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMinimumBooksPerPageButton().click();
            cy.wait(1000);
            dashboardPage.getNextPageButton().click();
            dashboardPage.getPreviousPageButton().click();

            // Assertions
            dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                expect(rows).to.have.length.at.most(10);
            });
        });
    });

    describe("More than 10 book per page", () => {
        let randomBookList = [];

        before(() => {
            // Arrange
            cy.visit("localhost:4200");
            cy.wait(1000);
            for (let i = 0; i <= 30; i++) {
                const book = bookPage.generateRandomBookInfo();
                randomBookList.push(book);
                dashboardPage.openAddBookForm();
                bookPage.enterBookInformation(book['name'], book['author']);
                bookPage.getSaveButton().click();
                cy.wait(1000);
            }
        });

        describe("At most 20 books per page", () => {
            it("should get at most 20 books per page to the Dashboard", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getTwentyBooksPerPageButton().click();
                cy.wait(1000);

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(20);
                });
            });

            it("should get at most 20 books per page to the Dashboard when going to next page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getTwentyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(20);
                });
            });

            it("should get at most 20 books per page to the Dashboard when going to previous page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getTwentyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();
                dashboardPage.getPreviousPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(20);
                });
            });
        });

        describe("At most 30 books per page", () => {
            it("should get at most 30 books per page to the Dashboard", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getThirtyBooksPerPageButton().click();
                cy.wait(1000);

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(30);
                });
            });

            it("should get at most 30 books per page to the Dashboard when going to next page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getThirtyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(30);
                });
            });

            it("should get at most 30 books per page to the Dashboard when going to previous page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getThirtyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();
                dashboardPage.getPreviousPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(30);
                });
            });
        });

        describe("At most 40 books per page", () => {
            it("should get at most 40 books per page to the Dashboard", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getFortyBooksPerPageButton().click();
                cy.wait(1000);

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(40);
                });
            });

            it("should get at most 40 books per page to the Dashboard when going to next page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getFortyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(40);
                });
            });

            it("should get at most 40 books per page to the Dashboard when going to previous page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getFortyBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();
                dashboardPage.getPreviousPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(40);
                });
            });
        });

        describe("At most 50 books per page", () => {
            it("should get at most 50 books per page to the Dashboard", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getMaximumBooksPerPageButton().click();
                cy.wait(1000);

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(50);
                });
            });

            it("should get at most 50 books per page to the Dashboard when going to next page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getMaximumBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(50);
                });
            });

            it("should get at most 50 books per page to the Dashboard when going to previous page", () => {
                //Actions
                dashboardPage.getBooksPerPageButton().click();
                dashboardPage.getMaximumBooksPerPageButton().click();
                cy.wait(1000);
                dashboardPage.getNextPageButton().click();
                dashboardPage.getPreviousPageButton().click();

                // Assertions
                dashboardPage.getBooksTableBody().find('tbody > tr').should(rows => {
                    expect(rows).to.have.length.at.most(50);
                });
            });
        });

        after(() => {
            dashboardPage.getBooksPerPageButton().click();
            dashboardPage.getMaximumBooksPerPageButton().click();
            cy.wait(1000);
            dashboardPage.deleteRandomBooks(randomBookList);
            randomBookList = [];
        });
    });
});