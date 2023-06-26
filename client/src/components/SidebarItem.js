import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarItem = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/Profile',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Truck Rental',
        path: '/Test',
        icon: <FaIcons.FaTruckMoving />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <IoIcons.IoIosPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/support',
        icon: <IoIcons.IoIosSettings/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <IoIcons.IoIosLogOut/>,
        cName: 'nav-text'
    }
];