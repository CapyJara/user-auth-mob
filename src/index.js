import loadHeader from './header-component.js';

loadHeader();

import './api/filter-components.js';
import makeSearchUrlFromQuery from './api/make-search-url.js';
import { readFromQuery } from './api/query-functions.js';
import loadCharacters from './api/character-component.js';
import updatePaging from './api/paging-component.js';

window.addEventListener('hashchange', loadQuery);

function loadQuery() {

    const searchOptions = readFromQuery(window.location.hash);
    const apiURL = makeSearchUrlFromQuery(searchOptions);
    let pagingInfo = {};
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body.results);
            pagingInfo = {
                page: parseInt(searchOptions.page),
                totalPages: body.info.pages
            };
            updatePaging(pagingInfo);})
        .catch(err => console.error(err));

}