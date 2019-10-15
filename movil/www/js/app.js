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

  app.dialog.create({
    title: '',
    text: '¿Desea salir de la App?',
    buttons: [{
        text: 'No',
      },
      {
        text: 'Si',
        onClick: function() {
          navigator.app.exitApp();
        }
      },

    ],
  }).open();
}

var matricula = localStorage.getItem('matricula');
var contraseña = localStorage.getItem('contraseña');

if (matricula != '' && contraseña != '') {
  var mainView = app.views.create('.view-main', {
    url: '/home/'
  })
  app.request.post('http://webcore.uttab.edu.mx/webcore/apps/gettoken.jsp', {
    uid: matricula,
    pwd: contraseña
  }, function(data) {
    localStorage.setItem("id", data);
    localStorage.setItem("matricula", matricula);
    localStorage.setItem("contraseña", contraseña);
  });
} else {
  var mainView = app.views.create('.view-main', {
    url: '/'
  })

}

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
          localStorage.setItem("matricula", '');
          localStorage.setItem("contraseña", '');
          mainView.router.navigate('/', {
            animate: false,
            clearPreviousHistory: true
          });
        }
      },

    ],
  }).open();
}
