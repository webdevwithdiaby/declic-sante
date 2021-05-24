import React from 'react';
import NavLink from '../nav-link/nav-link.component';
import { useHistory } from 'react-router-dom';

const CalculatriceLink = props => {
  const history = useHistory();
  return (
    <NavLink {...props} onClick={() => history.push('/calculatrice')}>
      Calculatrice
    </NavLink>
  );
};

export default CalculatriceLink;
