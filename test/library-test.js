const { expect } = require("Library");

describe("Library Smart Contract", function () {
    let Library;

    before(async function () {
        const LibraryFactory = await ethers.getContractFactory("Library");
        Library = await LibraryFactory.deploy();
        await Library.deployed();
    });

    it("Should add a book", async function () {
        const tx = await Library.addBook("Book Title", "Author Name", 1234567890);
        await tx.wait();
        const bookData = await Library.getBook(1234567890);
        expect(bookData[0]).to.equal("Book Title");
        expect(bookData[1]).to.equal("Author Name");
        expect(bookData[2]).to.equal(1234567890);
    });

    it("Should update a book", async function () {
        await Library.updateBook(1234567890, "New Title", "New Author");
        const bookData = await Library.getBook(1234567890);
        expect(bookData[0]).to.equal("New Title");
        expect(bookData[1]).to.equal("New Author");
    });

    it("Should delete a book", async function () {
        await Library.deleteBook(1234567890);
        const bookData = await Library.getBook(1234567890);
        expect(bookData[0]).to.equal(""); // Empty string for title
        expect(bookData[1]).to.equal(""); // Empty string for author
        expect(bookData[2]).to.equal(0); // Zero for ISBN
    });
});
