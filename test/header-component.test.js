const test = QUnit.test;

QUnit.module('Header Template');

import { makeHeaderTemplate, makeUserTemplate } from '../src/header-component.js';


test('does the hardcoded header match the template', assert => {
    //arrange
    const user = {
        displayName: 'Your Name',
        photoURL: 'assets/placeholder-avatar.jpg'
    };

    const expected = `
        <header>
            <a href="index.html"><h1>Rick and Morty Characters</h1></a>
            </header>
    `;
    //act
    const result = makeHeaderTemplate(user);
    //assert
    assert.htmlEqual(result, expected);
});

test('no image', assert => {
    // arrange
    const user = {
        displayName: 'Y-joe',
        photoURL: null
    };
    // act
    const results = makeUserTemplate(user);
    // assert
    assert.htmlEqual(results, /*html*/ `
        <div id="user-profile">
            <a href="favorites.html"><img src="assets/placeholder-avatar.jpg"></a>
            <a href="favorites.html"><p>Y-joe</p></a>
            <button>Logout</button>
        </div>
    `);
});

