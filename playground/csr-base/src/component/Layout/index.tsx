import React from 'react';
import { Outlet, Link } from "react-router-dom";
import css from './index.scss';

function Layout() {
  return (
    <div>
      <header>
        <Link to={'/'}>首页</Link>
        <Link to={'/book'}>Book page</Link>
        <Link to={'/policy'}>Policy page</Link>
      </header>

      <Outlet />

      <footer>
        底部
      </footer>
    </div>
  );
}

export default Layout;
