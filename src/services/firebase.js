import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC4JjfkBLqFTMKCkClJ5DVHV7m4vr0hMD8",
    authDomain: "marketingcamp-d7a3f.firebaseapp.com",
    databaseURL: "https://marketingcamp-d7a3f.firebaseio.com",
    projectId: "marketingcamp-d7a3f",
    storageBucket: "marketingcamp-d7a3f.appspot.com",
    messagingSenderId: "79073986514",
    appId: "1:79073986514:web:b4f56a1e8dadc53ebbea0b",
    measurementId: "G-QFQQ820J60"
}
const _firebase = firebase.initializeApp(config);
const database = _firebase.database();
export default database;