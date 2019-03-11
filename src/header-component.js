import { auth } from './firebase.js';

export function makeHeaderTemplate() {
    const dom = `
    <header>
        <a href="index.html"><h1>The Books We Like</h1></a>
        
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

export function makeUserTemplate(user) {
    const dom = `
    <div id="user-profile">
        <img src="${user.photoURL}">
        <p>${user.displayName}</p>
        <button>Logout</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader() {
    const user = {
        displayName: 'Tom from Myspace',
        photoURL: 'assets/placeholder-avatar.jpg'
    };
    const dom = makeHeaderTemplate(user);
    headerContainer.appendChild(dom);

    // auth.onAuthStateChanged(user => {
    //     if(user)
    // })

}