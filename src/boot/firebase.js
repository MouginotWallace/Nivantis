// import something here
import * as firebase from 'firebase'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file

var firebaseConfig = {
  apiKey: "AIzaSyBntiBTn0mjLQKfalARc-8WHg79pxoyABU",
  authDomain: "nivantis-4bb33.firebaseapp.com",
  databaseURL: "https://nivantis-4bb33.firebaseio.com",
  projectId: "nivantis-4bb33",
  storageBucket: "nivantis-4bb33.appspot.com",
  messagingSenderId: "226584891900",
  appId: "1:226584891900:web:ccfbb1d15943b0e541a279"
};
// Initialize Firebase
let firebasedb=firebase.initializeApp(firebaseConfig);
export {firebasedb}
