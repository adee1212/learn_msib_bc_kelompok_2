// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Library {
    struct Book {
        string title;
        string author;
        uint256 ISBN;
    }

    mapping(uint256 => Book) public books;
    uint256 public bookCount;

    event BookAdded(uint256 indexed ISBN, string title, string author);
    event BookUpdated(uint256 indexed ISBN, string title, string author);
    event BookDeleted(uint256 indexed ISBN);

    function addBook(string memory _title, string memory _author, uint256 _ISBN) public {
        require(books[_ISBN].ISBN == 0, "Book with this ISBN already exists");
        
        Book memory newBook = Book({
            title: _title,
            author: _author,
            ISBN: _ISBN
        });

        books[_ISBN] = newBook;
        bookCount++;

        emit BookAdded(_ISBN, _title, _author);
    }

    function updateBook(uint256 _ISBN, string memory _title, string memory _author) public {
        require(books[_ISBN].ISBN != 0, "Book with this ISBN does not exist");

        books[_ISBN].title = _title;
        books[_ISBN].author = _author;

        emit BookUpdated(_ISBN, _title, _author);
    }

    function deleteBook(uint256 _ISBN) public {
        require(books[_ISBN].ISBN != 0, "Book with this ISBN does not exist");

        delete books[_ISBN];
        bookCount--;

        emit BookDeleted(_ISBN);
    }

    function getBook(uint256 _ISBN) public view returns (string memory, string memory, uint256) {
        require(books[_ISBN].ISBN != 0, "Book with this ISBN does not exist");

        return (books[_ISBN].title, books[_ISBN].author, books[_ISBN].ISBN);
    }
}
