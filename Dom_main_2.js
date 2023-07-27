// Traversing the dom
var ListItem = document.querySelector('#items');
// console.log(ListItem)
// 1.ParentNode
// console.log(ListItem.parentNode)
// console.log(ListItem.parentNode.parentNode);
// ListItem.parentNode.style.background = 'red'


// parentElement and parentNode can be interChangeable
// 2.parentElement
// console.log(ListItem.parentElement)
// ListItem.parentElement.style.background = 'red'


// childNodes gives the text at some index due to line beack or some white-spaces but this is not with the children
// 3.childNodes(text-issue)
// console.log(ListItem.childNodes)


// 4.children--> [[Prototype]]-->HTMLCollection
// console.log(ListItem.children);
// console.log(ListItem.children[1]);
// ListItem.children[1].style.background = 'aqua'



// instead of FirstChild use FirstElementChild because FirstChild gives text if there is some line break or white spaces
// 5.FirstChild(text-issue)
// console.log(ListItem.firstChild); // it gives the text issue


// 6.fisrtElementChild
// console.log(ListItem.firstElementChild);
// ListItem.firstElementChild.textContent = 'Hello 1'


// 7.lastChild(text-issue)
// console.log(ListItem.lastChild);


// 8.lastElementChild
// console.log(ListItem.lastElementChild);
// ListItem.lastElementChild.textContent = "Hello 4"


// 9.nextSibling(text-issue)
// console.log(ListItem.nextSibling)

// 10.nextElementSibling
// console.log(ListItem.nextElementSibling) // it gives null because it does not have any we add for it only


// 11.previousSibling(text-issue)
// console.log(ListItem.previousSibling);


// 12. previousElementSibling
// console.log(ListItem.previousElementSibling);
// ListItem.previousElementSibling.style.color = 'green'


// ----> important notes for inserting the ELement into dom
//steps-->createElement->createTextNode->appendChild-->selectWheretoInsert->NOWINSERT
var newDiv = document.createElement('div');

// adding the className
newDiv.className = "Hello"

// adding the id
newDiv.id = "Hello1"
    // console.log(newDiv);

// adding the attributes('attributes','attributes-value')
newDiv.setAttribute('title', 'Hello Div')

// create text Node
var newDivText = document.createTextNode('its content')


// adding the text to div
newDiv.appendChild(newDivText) // newDivText will be the child of newDiv

// inside header there is container --> header-parent and .container is children
var containerName = document.querySelector('header .container');
// selecting where to insert inside header 
var h1 = document.querySelector('header h1');

containerName.insertBefore(newDiv, h1);


// inserting the li before item 1

var newLi = document.createElement('li');
newLi.className = 'list-group-item';
var newLiText = document.createTextNode("its new Li");
newLi.appendChild(newLiText);

var newContainerForLi = document.querySelector('#items');
var oldItemLi1 = document.querySelector('.list-group-item')
    // console.log(newContainerForLi)
    // 1. argument should be the new element and 2 argument should be the reference
newContainerForLi.insertBefore(newLi, oldItemLi1)
console.log(newLi)