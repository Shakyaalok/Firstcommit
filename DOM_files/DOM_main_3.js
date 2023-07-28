var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')



// form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//filter Event
filter.addEventListener('keyup', filterItems)



// Add Item
function addItem(e) {
    e.preventDefault();

    // console.log(1)

    // get Input value
    var newItem = document.getElementById('item').value;

    //create newLi element
    var li = document.createElement('li');
    //add classname
    li.className = 'list-group-item';
    // console.log(li)

    // add textNode with input value
    li.appendChild(document.createTextNode(newItem));


    // ********************
    // create delete button
    var deleteBtn = document.createElement('button');
    // add className to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append the text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn)

    //**************

    // append li to list
    itemList.appendChild(li);

}





//Remove item
function removeItem(e) {
    // console.log(1);

    // we use below line we want only if someone click on X then our function will fire
    if (e.target.classList.contains('delete')) {
        // console.log(1);

        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;

            itemList.removeChild(li);
        }
    }
}


// filter Items
function filterItems(e) {
    //convert text to lowerCase
    var text = e.target.value.toLowerCase();
    // console.log(text);

    //get list
    var items = itemList.getElementsByTagName('li');

    //items gives an html collections so we have to convert it into an array

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName)

        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}