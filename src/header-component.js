export function makeUserTemplate(user) {
    const dom = `
    <header>
        <a href="index.html"><h1>The Books We Like</h1></a>
        <div id="user-profile">
            <img src="${user.photoURL}">
            <p>${user.displayName}</p>
            <button>Logout</button>
        </div>
    </header>
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
    const dom = makeUserTemplate(user);
    headerContainer.appendChild(dom);
}