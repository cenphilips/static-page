const header = document.getElementById('main-header')

const nav = document.createElement('nav');
nav.classList.add('navbar');

const ul = document.createElement('ul');

const navItems = [
    { text: 'Home', href: 'task_01.html'},
    { text: 'About', href: 'about.html'},
    { text: 'Products', href: 'products.html'},
    { text: 'Contact', href: 'contact.html'},
];

navItems.forEach( item => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = item.text;
    a.href = item.href;

    li.appendChild(a);
    ul.appendChild(li)
});

nav.appendChild(ul);
header.appendChild(nav);

let table = document.createElement('table')
table.setAttribute("id", "studentTable")
document.body.appendChild(table)






