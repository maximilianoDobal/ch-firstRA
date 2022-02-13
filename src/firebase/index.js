import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt9cvMthGrz0XCI1PuukBwAHKkO-TOP6Y",
    authDomain: "curso-react-coder-400ad.firebaseapp.com",
    projectId: "curso-react-coder-400ad",
    storageBucket: "curso-react-coder-400ad.appspot.com",
    messagingSenderId: "424709384134",
    appId: "1:424709384134:web:2c63516e7f8d0c6517f4c7"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export const getFirebase = () => app;

  export const getFirestore = () => {
      return firebase.firestore(app)
  }