import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA9wc_BCJdmjjs9-975SrWUtShT1-7RfvE",
    authDomain: "pilsogprog.firebaseapp.com",
    databaseURL: "https://pilsogprog.firebaseio.com",
    projectId: "pilsogprog",
    storageBucket: "pilsogprog.appspot.com",
    messagingSenderId: "570337368802"
};

const app = firebase.initializeApp(config);

const firestore = app.firestore();
firestore.settings({ timestampsInSnapshots: true });

export {
    firestore
};
