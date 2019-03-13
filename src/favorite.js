import objectToArray from './object-to-array.js';
import loadHeader from './header-component.js';
import loadCharacters from './api/character-component.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';

loadHeader();

auth.onAuthStateChanged(user => { 
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.on('value', snapshot => {
        const data = snapshot.val();
        const favoriteCharacters = objectToArray(data);
        loadCharacters(favoriteCharacters);
        console.log(favoriteCharacters[0]);
    });
});