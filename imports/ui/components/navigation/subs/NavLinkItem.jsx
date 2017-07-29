import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavLinkItem = ({ to, activeOnlyWhenExact, className, children }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
      <li className={match ? 'tab-current' : ''}>
        <Link to={to} className={className}>{children}</Link>
      </li>
  )}/>
);

export default NavLinkItem;
