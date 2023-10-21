const { ethers } = require("hardhat");

async function main() {
    const Library = await ethers.getContractFactory("Library");
    const library = await Library.attach("0x116BC03f0D6b75a83fc7F9D3514cfc41F2ea3B46"); // Gantilah dengan alamat kontrak yang telah Anda deploy

    // Function execution examples
    // Tambah buku
    const addBookTx = await library.addBook("Book Title", "Author Name", 1234567890);
    await addBookTx.wait();

    // Update buku
    const updateBookTx = await library.updateBook(1234567890, "New Book Title", "New Author Name");
    await updateBookTx.wait();

    // Hapus buku
    const deleteBookTx = await library.deleteBook(1234567890);
    await deleteBookTx.wait();

    // Get data buku berdasarkan ISBN
    const bookData = await library.getBook(1234567890);
    console.log("Book Data:", bookData);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
