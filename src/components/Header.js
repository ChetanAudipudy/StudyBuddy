import React from 'react';
import NavComponent from './NavComponent';

const Header = (props) => {
  return (
    <NavComponent />
  );
};

Header.defaultProps = {
  title: 'Study Buddy!',
  subtitle: 'Learn using these flash cards!'
};

export default Header;
