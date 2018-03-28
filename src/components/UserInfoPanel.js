import React from 'react';

export default class UserInfoPanel extends React.Component{

    render(){
        return(
            <div>
            <h2>Welcome back {this.props.firstName}</h2>
            <p>Are you ready to continue studying?</p>
            </div>
        )
    }
  }