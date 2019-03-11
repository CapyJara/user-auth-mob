import { writePageToQuery } from './query-functions.js';

const previousButtonNode = document.getElementById('previous-button');
const nextButtonNode = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let currentPageNumber = 1;

export default function updatePaging(pagingInfo) {
    const existingQuery = window.location.hash;
    currentPageNumber = pagingInfo.page;
    currentPageNode.textContent = currentPageNumber;
    totalPagesNode.textContent = pagingInfo.totalPages;
    nextButtonNode.disabled = pagingInfo.page === pagingInfo.totalPages;
    previousButtonNode.disabled = pagingInfo.page === 1;

    writePageToQuery(existingQuery, currentPageNumber);
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButtonNode.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButtonNode.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});