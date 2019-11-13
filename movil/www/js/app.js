// Dom7
var $$ = Dom7;
Framework7.use(Framework7Keypad);

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'mx.edu.uttab.uttabapp', // App bundle ID
  name: 'Framework7', // App name
  logged:false,
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
  panel: {
    swipe: true,
    
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

var popupOpen=false;
app.on('popupOpen',function(){
popupOpen=true;
 console.log("abierto")
})

app.on('popupClose',function(){
  popupOpen=false;
  console.log("cerrado")
})

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
  if(popupOpen==true){
      app.popup.close();	
      console.log("cerrado con backbutton")
    }else if(app.views.main.history.length == 1){
        navigator.app.exitApp (); 
        }else{
            mainView.router.back();
        }   
}

app.logged=localStorage.getItem("id")!=undefined;
var mainView = app.views.create('.view-main', {
  url: '/'
});


function cerrarsesion() {
  app.dialog.create({
    title: '',
    text: '¿Esta seguro de cerrar su sesion?',
    buttons: [{
        text: 'No',
      },
      {
        text: 'Si',
        onClick: function() {
          localStorage.clear();
          app.logged=false;
          mainView.router.navigate('/', {
            animate: true,
            clearPreviousHistory: true
          });
        }
      },

    ],
  }).open();
}


