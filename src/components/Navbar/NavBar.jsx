import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./NavBar.module.css"

const NavBar = () => {
  return  (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" className=
          { NavLink => NavLink.isActive ? s.activeLink : s.item } >Profile</NavLink>
        </div>
        <div  className={s.item}>
          <NavLink to="/dialogs" className=
          { NavLink => NavLink.isActive ? s.activeLink : s.item }  >Messages</NavLink>
        </div>
        <div  className={s.item}>
          <NavLink to="/news" className=
          { NavLink => NavLink.isActive ? s.activeLink : s.item } >News</NavLink>
        </div>
        <div  className={s.item}>
          <NavLink to="/music" className=
          { NavLink => NavLink.isActive ? s.activeLink : s.item } >Music</NavLink>
        </div>
        <div  className={s.item}>
          <NavLink to="/setting" className=
          { NavLink => NavLink.isActive ? s.activeLink : s.item } >Setting</NavLink>
        </div>
      </nav>
  ) 
}

export default NavBar;