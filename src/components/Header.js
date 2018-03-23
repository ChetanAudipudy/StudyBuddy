import React from 'react';

const Header = (props) => {
  return (
    <div className="header-box">
      <h1 className="header-title">{props.title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'Study Buddy!',
  subtitle: 'Learn using these flash cards!'
};

export default Header;
