routes = [{
    path: '/',
    componentUrl: './pages/inicio.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/login/',
    componentUrl: './pages/login.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/home/',
    componentUrl: './pages/home.html',
    on: {
      pageInit: function() {},
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
    path: '/kardex/',
    componentUrl: './pages/kardex.html',
    options: {
      transition: 'f7-parallax',
    }
  },
  {
    path: '/avisos/',
    componentUrl: './pages/avisos.html',
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
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
