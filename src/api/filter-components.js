import { writeFilterToQuery } from './query-functions.js';
const filterFormNode = document.getElementById('filter-form');


filterFormNode.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(filterFormNode);
    const filterOptions = {
        name: formData.get('name'),
        status: formData.get('status'),
        species: formData.get('species')
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeFilterToQuery(existingQuery, filterOptions);
    window.location.hash = newQuery;
});