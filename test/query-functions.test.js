const test = QUnit.test;

QUnit.module('query function tests');

import { writeFilterToQuery } from '../src/api/query-functions.js';

test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = '';
    const filterOptions = {
        name: 'Rick',
        status: 'alive',
        species: 'human'
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Rick&status=alive&species=human&page=1';
    //assert
    assert.equal(result, expected);
});
test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = 'name=Rick&status=alive&species=human&page=1';
    const filterOptions = {
        name: 'Morty',
        status: 'dead',
        species: 'human'
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Morty&status=dead&species=human&page=1';
    //assert
    assert.equal(result, expected);
});
test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = '';
    const filterOptions = {
        name: 'Morty',
        status: '',
        species: ''
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Morty&status=&species=&page=1';
    //assert
    assert.equal(result, expected);
});

import { writePageToQuery } from '../src/api/query-functions.js';

test('writes page to query', assert => {
    //arrange
    const existingQuery = 'name=Morty&status=dead&species=human&page=1';
    const page = 3;
    //act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'name=Morty&status=dead&species=human&page=3';
    //assert
    

    assert.equal(result, expected);
});

import { readFromQuery } from '../src/api/query-functions.js';

test('reads filter options', assert => {
    //arrange
    const queryOptions = '#name=Morty&status=dead&species=human&page=1';
    const expected = {
        name: 'Morty',
        status: 'dead',
        species: 'human',
        page: 1
    };
    //act
    const result = readFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);
});
test('reads filter options', assert => {
    //arrange
    const queryOptions = '#name=Morty&status=&species=&page=1';
    const expected = {
        name: 'Morty',
        status: '',
        species: '',
        page: 1
    };
    //act
    const result = readFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);
});