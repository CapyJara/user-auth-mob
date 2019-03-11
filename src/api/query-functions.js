export function writeFilterToQuery(existingQuery, filterOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', filterOptions.name);
    searchParams.set('status', filterOptions.status);
    searchParams.set('species', filterOptions.species);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(queryOptions) {
    const searchParams = new URLSearchParams(queryOptions.slice(1));
    const filterOptions = {
        name: searchParams.get('name'),
        status: searchParams.get('status'),
        species: searchParams.get('species'),
        page: parseInt(searchParams.get('page'))
    };
    return filterOptions;
}