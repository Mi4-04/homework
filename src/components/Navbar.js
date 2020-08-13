import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-success navbar-expand-lg justify-content-center text-dark navigation  ">
      <div className="navbar-brand">Disigner</div>

      <ul className="navbar-nav text-dark justify-content-center col-md-9">
        <li className="nav-item ">
          <NavLink exact to="/" className="nav-link">
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/orders" className="nav-link">
            Заказы
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/executors" className="nav-link">
            Исполнители
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/auction" className="nav-link">
            Аукцион
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            О проекте
          </NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0  ">
        <button className="btn btn-outline-light my-2 my-sm-0  " type="submit">
          Авторизация
        </button>
      </form>
    </nav>
  );
};
