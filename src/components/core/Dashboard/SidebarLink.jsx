import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const SidebarLink = ({link, iconName}) => {

    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
        <NavLink
        to={link.path}
        className={`relative font-inter px-6 py-3 text-sm font-medium 
            ${matchRoute(link.path) 
            ? "bg-yellow-800 text-yellow-50" 
            : "bg-opacity-0 text-richblack-200"} 
            transition-all duration-200`}
        >
            <span className={`absolute left-0 top-0 h-[100%] w-[0.15rem] bg-yellow-50 
            ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}>

            </span>

            <div className='flex items-center gap-x-2'>
                <div className='text-lg'>
                    <Icon/>
                </div>
                <span
                >{link.name}</span>
            </div>
        </NavLink>
  )
}

export default SidebarLink