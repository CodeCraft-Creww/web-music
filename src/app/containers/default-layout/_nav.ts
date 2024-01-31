import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'geners',
    url: '/admin/geners',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'artists',
    url: '/admin/artists',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'songs',
    url: '/admin/songs',
    iconComponent: { name: 'cil-star' }
  },
  {
    name: 'albums',
    url: '/admin/albums',
    iconComponent: { name: 'cil-calculator' }
  },
  {
    name: 'client',
    url: '/client/home',
    iconComponent: { name: 'cil-speedometer' }
  },
];
