const getTheTitles = function(books) {

    /*
    # SOLUTION 1 ---- using for each and push
    let bookTitles = []
    books.forEach(element => {
        bookTitles.push(element['title'])
    });
    return bookTitles 
    */

    // SOLUTION 2 --- using map
    return books.map((book)=>{return book.title})
};

// Do not edit below this line
module.exports = getTheTitles;
