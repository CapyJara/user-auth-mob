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
            <a href="index.html"><h1>The Books We Like</h1></a>
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
    assert.htmlEqual(results, `
        <div id="user-profile">
            <img src="assets/placeholder-avatar.jpg">
            <p>Y-joe</p>
            <button>Logout</button>
        </div>
    `);
});

