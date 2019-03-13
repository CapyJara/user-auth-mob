import { auth, favoritesByUserRef } from '../firebase/firebase.js';

export function makeCharacterHtml(characterObject) {
    let episodeNum = '';
    if(characterObject.episode) {
        episodeNum = characterObject.episode[0].slice(40);
    }
    else {
        episodeNum = characterObject.firstAppeared;
    }      
    const html = `
    <li class="character-item">
        <h3>${characterObject.name}</h3>
        <img src="../../assets/fav-unselected.svg" id="favorite-icon">
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
        const favorites = dom.querySelector('#favorite-icon');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteCharacterRef = userFavoritesRef.child(character.id);
        userFavoriteCharacterRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }
            
        
                function addFavorite() {
                    isFavorite = true;
                    favorites.src = './assets/fav-selected.svg';
                }
                function removeFavorite() {
                    isFavorite = false;
                    favorites.src = './assets/fav-unselected.svg';
                }
                favorites.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteCharacterRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteCharacterRef.set({
                            id: character.id,
                            name: character.name,
                            image: character.image,
                            species: character.species,
                            status: character.status,
                            firstAppeared: character.episode[0].slice(40)
                        });
                        addFavorite();
                    }
                });
            });
        characterList.appendChild(dom);
    });
}