import React from 'react';
import Header from './Header';


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
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header />
      </div>
    );
  }
}