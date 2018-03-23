import React from 'react';
import Header from './Header';
import Signup from './Signup';


export default class StudyBuddy extends React.Component {

  componentDidMount() {
    console.log("component did mount.")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update.")
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {

    return (
      <div>
      <Header />
       <Signup />
      </div>
    );
  }
}