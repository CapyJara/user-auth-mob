const test = QUnit.test;

QUnit.module('character template');

import { makeCharacterHtml } from '../src/api/character-component.js';

test('template function returns html', function(assert) {
    //arrange
    const characterObject = {
        'id': 21,
        'name': 'Aqua Morty',
        'status': 'unknown',
        'species': 'Humanoid',
        'type': 'Fish-Person',
        'gender': 'Male',
        'origin': {
            'name': 'unknown',
            'url': ''
        },
        'location': {
            'name': 'Citadel of Ricks',
            'url': 'https://rickandmortyapi.com/api/location/3'
        },
        'image': 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
        'episode': [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/22'
        ],
        'url': 'https://rickandmortyapi.com/api/character/21',
        'created': '2017-11-04T22:39:48.055Z'
    };

    const result = makeCharacterHtml(characterObject);
    const expected = `
    <li class="character-item">
        <h3>Aqua Morty</h3>
        <img src="../../assets/fav-unselected.svg" id="favorite-icon">
        <img src="https://rickandmortyapi.com/api/character/avatar/21.jpeg">
        <p>Species: Humanoid</p>
        <p>Status: unknown</p>
        <p>First Appeared: Episode 10</p>
    </li>
    `;

    //act
    //assert
    assert.htmlEqual(result, expected);
});
