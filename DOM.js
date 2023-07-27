// console.dir(document)
// console.log(document.URL)
// console.log(document.domain)
// console.log(document.title)
// document.title = 'Alok Shakya'
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10]) // this is not correct way to selecting the element we can select the element by querySelector
// console.log(document.forms)
// console.log(document.links)
// important Note:--> in htmlCollections we cannot apply the properties of an for so to apply the properties of an array first we have to covert into it to an array




// ----------->>>>>>>**************************-------------------------------------*************************************8
// getElementById,getElementsByClassName,getElementsByTagName,querySelector,querySelectorAll


// 1.getElementById
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// ********
// headerTitle.innerText = 'This is inner text'
// headerTitle.textContent = 'This is text Content'
// *********
// However, keep in mind that innerText is not part of the DOM standard, so it's generally safer to use textContent for consistency across different browsers.
// console.log(headerTitle.textContent) //(no-consistency) in the console it will show the 123 even we have display none but on web Page it is hidden
// console.log(headerTitle.innerText) // consistency(it is not part of DOM standard)--(it pays attention to the styling)
// headerTitle.innerHTML = '<h2>Hello Moto</h2>' //differnce between above two and inner Html is that is there is any tag present inside it then it will return theouptut with that tag also
// but above two shows only plain text not any tag present in it
// var mainHeader = document.getElementById('main-header');
// mainHeader.style.border = '2px solid black'






// 2.getElementsByClassName
// var item = document.getElementById('item'); // this will work but when we use class then it does not work
// beacuse for class we have to use use loop to target the multiple element
// item.style.color = 'red'
// var item = document.getElementsByClassName('list-group-item');
// item.style.color = 'red'


// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "this is from className with index "
// items[1].style.backgroundColor = 'yellow'

// // -this will give an error becuase we are trying to  apply the background color to all the class og list-group-items
// // to achieve that we have to use loop and if we want to apply only to one then either select with their
// // index or use getElementById and id must be present in the tag element
// // items.style.backgroundColor = 'black'

// // to apply the property to all class at once by loop
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'aqua'
//     items[i].style.fontWeight = '800'
// }


// 3.getElementByTagName
// var li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "this is from className with index "
// li[1].style.backgroundColor = 'yellow'



// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'aqua'
//     li[i].style.fontWeight = '800'
// }


// 4.QuerySelector
// var header = document.querySelector('#main-header');
// header.style.border = '2px solid black'

// var input = document.querySelector('input');
// input.value = 'hello moto'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'aqua'

// // dont know this is not working because we have added li extra li so when we remove it will work
// // var LastItem = document.querySelector('.list-group-item:last-child');
// // console.log(LastItem)
// // LastItem.style.color = 'red';
// var LastItem = document.querySelector('.list-group-item:nth-child(2)');
// // console.log(LastItem);
// LastItem.style.color = 'red';


// 5.QuerySelectorAll

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Moto'


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = 'blue';
}