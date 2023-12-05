import SvgColor from "../svg-colors/SvgColor";

// ----------------------------------------------------------------------



const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Aplicacion',
    path: '/dashboard/app',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Productos',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Analitica',
    path: '/dashboard/analytics',
    icon: icon('ic_analytics'),
  },
  
];

export default navConfig;