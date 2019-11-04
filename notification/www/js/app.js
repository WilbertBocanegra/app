// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  view:{
    stackPages:true,
  },
  statusbar: {
    enabled:true,
    androidBackgroundColor:'#fff'
  },
  navbar:{
    mdCenterTitle:true,
  },
  // App routes
  routes: routes,
});

var mainView = app.views.create('.view-main', {
  url: '/'
})
$$(document).on('deviceready',function(){

  cordova.plugins.firebase.messaging.getToken().then(function(token) {
   app.dialog.alert("Got device token: ", token);
    db.collection("active_users").add({
      token:token
    })
    .then(function(docRef) {
      app.dialog.alert("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      app.dialog.alert("Error adding document: ", error);
    });
  });
})


