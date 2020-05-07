import React from 'react';
import {
  Dashboard as DashboardIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Description as DescriptionIcon
} from '@material-ui/icons';

export default [
  {
    title: 'Dashboard',
    href: '/dashboard/overview',
    icon: <DashboardIcon />
  },
  {
    title: 'Proposals',
    href: '/proposals',
    icon: <DescriptionIcon />,
    children: [
      { title: 'All Proposals', href: '/proposals/all' },
      { title: 'New Proposal', href: '/proposals/new' }
    ]
  },
  {
    title: 'Products',
    href: '/products',
    icon: <ShoppingBasketIcon />
  }
];
