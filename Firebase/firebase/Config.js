import { initializeApp } from 'firebase/app'
import { getFirestore,collection,addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRWQjdTiSgrza5w7GTo44zFhiztwLEthI",
    authDomain: "chat-e1c19.firebaseapp.com",
    projectId: "chat-e1c19",
    storageBucket: "chat-e1c19.appspot.com",
    messagingSenderId: "178028515378",
    appId: "1:178028515378:web:5815f3a6bd4a56a67c2c2b"
  };

  initializeApp(firebaseConfig);

  const firestore = getFirestore();

  const MESSAGES = 'messages';

  export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
  }
