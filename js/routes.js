routes = [
  {
    path: '/',
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
  // Default route, match to all pages (e.g. 404 page)
  {
    path: '(.*)',
    url: './pages/404.html',
  },
]
