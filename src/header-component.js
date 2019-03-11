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
    const userPhoto = user.photoURL || 'assets/placeholder-avatar.jpg';
    const dom = `
    <div id="user-profile">
        <img src="${userPhoto}">
        <p>${user.displayName}</p>
        <button>Logout</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    
    const dom = makeHeaderTemplate();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeUserTemplate(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
        }
        else {
            window.location = './auth.html';
        }
    });

}