// Dom7
var $$ = Dom7;
Framework7.use(Framework7Keypad);

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  view: {
    stackPages: false,
  },
  touch: {
    tapHold: true, //enable tap hold events
    fastClicks: true,

  },
  statusbar: {
    enabled: true,
    androidBackgroundColor: '#fff'
  },
  lazy: {
    threshold: 600,
    sequential: false,
  },
  card: {
    swipeToClose: false,
  },
  navbar: {
    mdCenterTitle: true,
    showOnPageScrollEnd: false,
    showOnPageScrollTop: false
  },
  // App routes
  routes: routes,
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  var push = PushNotification.init({
         android: {
             senderID: "XXXXXX"
         },
         ios: {
             alert: "true",
             badge: "true",
             sound: "true"
         },
         windows: {}
     });

     push.on('registration', function(data) {
         console.log("device token: " + data.registrationId);
     });

     push.on('notification', function(data) {
            console.log(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
     });

     push.on('error', function(e) {
            console.log(e.message)
     });
}

var mainView = app.views.create('.view-main', {
  url: '/'
})



app.on('dialogOpen', function() {
  app.statusbar.setBackgroundColor('#999999');
});

app.on('dialogClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});

app.on('popoverOpen', function() {
  app.statusbar.setBackgroundColor('#999999');
});

app.on('popoverClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});


app.on('cardClose', function() {
  app.statusbar.setBackgroundColor('#FFFFFF');
});

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {

}
