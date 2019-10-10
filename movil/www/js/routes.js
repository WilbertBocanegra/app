routes = [{
    path: '/home/',
    componentUrl: './pages/home.html',
    on: {
      pageInit: function() {
        var vistanoticia = app.views.create('#noticias', {
          url: '/noticias/'
        });
        var vistamihorario = app.views.create('#mihorario', {
          url: '/mihorario/'
        });
        var vistaperfil = app.views.create('#perfil', {
          url: '/usuario/'
        });
      },
    }
  },
  {
    path: '/perfil/',
    componentUrl: './pages/perfil.html',
  },
  {
    path: '/usuario/',
    componentUrl: './pages/usuario.html',
  },
  {
    path: '/mihorario/',
    componentUrl: './pages/mihorario.html',
  },
  {
    path: '/noticias/',
    componentUrl: './pages/noticias.html',
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
  },
  {
    path: '/form/',
    componentUrl: './pages/form.html',
  },
  {
    path: '/seleccion/',
    componentUrl: './pages/seleccion.html',
  },
  {
    path: '/',
  componentUrl: './pages/login.html',
  },
  {
    path: '/inicio/',
  componentUrl: './pages/inicio.html',
  },
]
