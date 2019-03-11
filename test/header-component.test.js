const test = QUnit.test;

QUnit.module('Header Template');

import { makeUserTemplate } from '../src/header-component.js';

test('does the hardcoded header match the template', assert => {
    //arrange
    const user = {
        displayName: 'Your Name',
        photoURL: 'assets/placeholder-avatar.jpg'
    };

    const expected = `
        <header>
            <a href="index.html"><h1>The Books We Like</h1></a>
            <div id="user-profile">
                <img src="assets/placeholder-avatar.jpg">
                <p>Your Name</p>
                <button>Logout</button>
            </div>
        </header>
    `;
    //act
    const result = makeUserTemplate(user);
    //assert
    assert.htmlEqual(result, expected);
});

