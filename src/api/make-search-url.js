export default function makeSearchUrlFromQuery(queryOptions) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';

    if(!queryOptions) {
        return baseUrl;
    }

    const apiURL = new URL(baseUrl);
    apiURL.searchParams.set('name', queryOptions.name);
    apiURL.searchParams.set('status', queryOptions.status);
    apiURL.searchParams.set('species', queryOptions.species);
    apiURL.searchParams.set('page', queryOptions.page);

    return apiURL.toString();
}