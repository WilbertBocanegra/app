// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'aurora', // Automatic theme detection
  view:{
    stackPages:true,
  },
  statusbar: {
    enabled:true,
    androidBackgroundColor:'#fff'
  },
  navbar:{
  },
  // App routes
  routes: routes,
});

var mainView = app.views.create('.view-main', {
  url: '/'
})
