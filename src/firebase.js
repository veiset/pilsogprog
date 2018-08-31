import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyA9wc_BCJdmjjs9-975SrWUtShT1-7RfvE",
    authDomain: "pilsogprog.firebaseapp.com",
    databaseURL: "https://pilsogprog.firebaseio.com",
    projectId: "pilsogprog",
    storageBucket: "pilsogprog.appspot.com",
    messagingSenderId: "570337368802"
};

const app = firebase.initializeApp({ config });

export default app;
