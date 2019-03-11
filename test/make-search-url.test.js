const test = QUnit.test;

QUnit.module('url test');


import makeSearchUrlFromQuery from '../src/api/make-search-url.js';


test('makes url out of queryhash', assert => {
    //arrange
    const queryOptions = {
        name: 'rick',
        status: 'dead',
        species: 'human',
        page: 1
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&status=dead&species=human&page=1';
    //act
    const result = makeSearchUrlFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);

});
