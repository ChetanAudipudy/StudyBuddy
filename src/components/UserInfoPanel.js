import React from 'react';

export default class UserInfoPanel extends React.Component{
    state = {
        firstName: ''
    }
  
    componentDidMount(){
        let self = this;
        fetch('/api/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({
                firstName: data.firstName
            });
        }).catch(err => {
        console.log('caught it!',err);
        })
    }
    render(){
        return(
            <div>
            <h2>Welcome back {this.state.firstName}</h2>
            <p>Are you ready to continue studying?</p>
            </div>
        )
    }
  }