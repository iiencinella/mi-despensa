export const itemsMenu = [
  {
    item: 'Productos',
    link: '/producto',
    login: true,
    role: ['admin', 'producto']
  },
  {
    item: 'Proveedores',
    link: '/proveedores',
    login: true,
    role: ['admin', 'proveedor']
  },
  {
    item: 'Tesorería',
    link: '/tesoreria',
    login: true,
    role: ['admin']
  },
  {
    item: 'Caja',
    link: '/caja',
    login: true,
    role: ['admin', 'caja']
  },
  {
    item: 'Cerrar Sesión',
    link: '/logout',
    login: true,
    role: ['all']
  },
  {
    item: 'Iniciar Sesión',
    link: '/login',
    login: false,
    role: ['all']
  },
]