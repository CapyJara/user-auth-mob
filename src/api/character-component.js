export function makeCharacterHtml(characterObject) {
    const episodeNum = characterObject.episode[0].slice(40);
    const html = `
    <li class="character-item">
        <h3>${characterObject.name}</h3>
        <img src="${characterObject.image}">
        <p>Species: ${characterObject.species}</p>
        <p>Status: ${characterObject.status}</p>
        <p>First Appeared: Episode ${episodeNum}</p>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const characterList = document.getElementById('character-list');

export default function loadCharacters(characterArray) {
    while(characterList.children.length > 0) {
        characterList.lastElementChild.remove();
    }

    characterArray.forEach(character => {
        const dom = makeCharacterHtml(character);
        characterList.appendChild(dom);
    });
}