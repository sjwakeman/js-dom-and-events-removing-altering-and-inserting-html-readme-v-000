//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div');

//We can set properties on it:
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

//appendChild()
document.body.appendChild(element);

//We can continue to update element, since we have a reference to it:
element.style.textAlign = 'center';

//We can append elements to that element:
let ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
element.appendChild(ul);

//Hm, that looks a bit ugly. Let's fix it
ul.style.textAlign = 'left';

//removeChild()
//Second element is gone.
ul.removeChild(ul.querySelector('li:nth-child(2)'));

//element.remove()
//We can just call remove() on the element itself:
//And it's gone!
ul.remove();

