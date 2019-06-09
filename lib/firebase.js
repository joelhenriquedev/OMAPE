import firebase from "firebase";

var config = {
    apiKey: "AIzaSyBV2xprzpvYkAj1O19NExas54pvHD1fBIQ",
    authDomain: "omape-site.firebaseapp.com",
    databaseURL: "https://omape-site.firebaseio.com",
    projectId: "omape-site",
    storageBucket: "omape-site.appspot.com",
    messagingSenderId: "1038051391472"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    console.log('a')

}

console.log('b')
  
export default firebase;
