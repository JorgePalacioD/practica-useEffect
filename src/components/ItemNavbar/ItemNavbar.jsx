import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({route,content}) => <li className='ml-2'><NavLink className='anchor-header' to={route}>{content}</NavLink></li>
