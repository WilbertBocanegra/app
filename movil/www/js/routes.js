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
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/usuario/',
    componentUrl: './pages/usuario.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/mihorario/',
    componentUrl: './pages/mihorario.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/noticias/',
    componentUrl: './pages/noticias.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/form/',
    componentUrl: './pages/form.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/seleccion/',
    componentUrl: './pages/seleccion.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/',
    componentUrl: './pages/login.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/inicio/',
    componentUrl: './pages/inicio.html',
    options: {
      transition: 'f7-parallax',
    }
  },
]
