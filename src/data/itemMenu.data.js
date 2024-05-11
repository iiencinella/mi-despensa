export const itemsMenu = [
  {
    item: 'Productos',
    link: '/producto',
    login: true,
    role: ['root', 'admin', 'producto']
  },
  {
    item: 'Proveedores',
    link: '/proveedores',
    login: true,
    role: ['root', 'admin', 'proveedor']
  },
  {
    item: 'Tesorería',
    link: '/tesoreria',
    login: true,
    role: ['root', 'admin']
  },
  {
    item: 'Caja',
    link: '/caja',
    login: true,
    role: ['root', 'admin', 'cajero']
  },
  {
    item: 'Iniciar Sesión',
    link: '/login',
    login: false,
    role: ['all']
  },
]