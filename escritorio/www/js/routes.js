routes = [
  {
    path: '/',
    componentUrl: './pages/login.html',
  },
  {
    path: '/home/',
    componentUrl: './pages/home.html',
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
    path: '/horario/',
    componentUrl: './pages/horario.html',
  },
  {
    path: '/nuevo horario/',
    componentUrl: './pages/nuevohorario.html',
  },
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
