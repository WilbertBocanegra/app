var firebaseConfig = {
    apiKey: "AIzaSyBb43Ksb3aWzEPcqIQAKIiU3loNLi_JlWs",
    authDomain: "notificaciones-cordova-push.firebaseapp.com",
    databaseURL: "https://notificaciones-cordova-push.firebaseio.com",
    projectId: "notificaciones-cordova-push",
    storageBucket: "notificaciones-cordova-push.appspot.com",
    messagingSenderId: "552351408243",
    appId: "1:552351408243:web:27741b4ed0cdbabe4a4a06",
    measurementId: "G-1HY378EFYB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
