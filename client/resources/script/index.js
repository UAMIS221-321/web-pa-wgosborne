function handleOnLoad()
{
    populateList();
}

function handleOnChange()
{
    const selectedId = document.getElementByID("selectListBox").value
    bookList.forEach((book)=>
    {
        if(book.id == selectedId)
        {
            myBook = book;
        }
    });

    populateForm();

}

function handleEditClick()
{
    makeEditable();
    hideButton();
    var buttonHtml = "<button class =\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>" // dont know if this is right end
    buttonHtml += "<button class =\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementByID("saveButton").innerHTML = buttonHtml;
    document.getElementByID("saveButton").style.display = "inline-block";
}

function handleNewClick()
{
    makeEditable();
    hideButton();
    blankFields();
    "<button class =\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class =\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementByID("saveButton").innerHTML = buttonHtml;
    document.getElementByID("saveButton").style.display = "inline-block";
}

function handleRentClick()
{
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleDeleteClick()
{
    deleteBook();
}

function handleCancelSave()
{
    populateForm();
    makeReadOnly();
    showButtons();
}

function handleEditSave(id)
{
    putBook(id);
    makeReadOnly();
    showButtons();
}

function handleNewSave()
{
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}






function populateForm()
{
    document.getElementByID("bookTitle").value = myBook.title;
    document.getElementByID("bookAuthor").value = myBook.author;
    document.getElementByID("bookGenre").value = myBook.genre;
    document.getElementByID("bookAvlb").value = myBook.numAvlb;
    document.getElementByID("bookIsbn").value = myBook.isbn;
    document.getElementByID("bookLength").value = myBook.length;
    document.getElementByID("bookCover").value = myBook.title;
    document.getElementByID("bookTitle").value = myBook.title;
    var html = "<ing class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    document.getElementByID("picBox").innerHTML = html;
}

function hideButton()
{
    document.getElementByID("newButton").style.display = "none";
    document.getElementByID("editButton").style.display = "none";
    document.getElementByID("deleteButton").style.display = "none";
    document.getElementByID("rentButton").style.display = "none";
    document.getElementByID("returnButton").style.display = "none";
}

function showButtons()
{
    document.getElementByID("newButton").style.display = "inline-block";
    document.getElementByID("editButton").style.display = "inline-block";
    document.getElementByID("deleteButton").style.display = "inline-block";
    document.getElementByID("rentButton").style.display = "inline-block";
    document.getElementByID("returnButton").style.display = "inline-block";
    document.getElementByID("saveButton").style.display = "inline-block";
}

function makeEditable()
{
    document.getElementByID("bookTitle").readOnly = false;
    document.getElementByID("bookAuthor").readOnly = false;
    document.getElementByID("bookGenre").readOnly = false;
    document.getElementByID("bookAvlb").readOnly = false;
    document.getElementByID("bookIsbn").readOnly = false;
    document.getElementByID("bookLength").readOnly = false;
    document.getElementByID("bookCover").readOnly = false;
}

function blankFields()
{
    document.getElementByID("bookTitle").value = "";
    document.getElementByID("bookAuthor").value = "";
    document.getElementByID("bookGenre").value = "";
    document.getElementByID("bookAvlb").value = "";
    document.getElementByID("bookIsbn").value = "";
    document.getElementByID("bookLength").value = "";
    document.getElementByID("bookCover").value = "";
}

function makeReadOnly()
{
    document.getElementByID("bookTitle").readOnly = true;
    document.getElementByID("bookAuthor").readOnly = true;
    document.getElementByID("bookGenre").readOnly = true;
    document.getElementByID("bookAvlb").readOnly = true;
    document.getElementByID("bookIsbn").readOnly = true;
    document.getElementByID("bookLength").readOnly = true;
    document.getElementByID("bookCover").readOnly = true;
}