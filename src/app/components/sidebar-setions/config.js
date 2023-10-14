import SvgColor from "../svg-colors/SvgColor";

// ----------------------------------------------------------------------



const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'App',
    path: '/dashboard/app',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'E-Commerce',
    path: '/dashboard/commerce',
    icon: icon('ic_ecommerce'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'products',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Analytics',
    path: '/dashboard/analytics',
    icon: icon('ic_analytics'),
  },
  
];

export default navConfig;