import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class About extends React.Component {
  state = {
    title: "Vocabulary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nisl, consequat eu aliquet vitae, pulvinar sed orci. Morbi eleifend posuere magna sit amet interdum. Nam venenatis risus sit amet orci pulvinar, varius varius diam venenatis. Vivamus quis arcu a purus dictum vehicula et sit amet leo.",
    user: "Amanda Ramirez",
    link: "./questionpage"
  }

  render() {
    return (
      <div className="row">
        <div className="about">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button className="gradient-button set-title">{this.state.title}</button>
            <h3 className="byline">by {this.state.user}</h3>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="description">
              {this.state.description}
              <Link to={this.state.link}><button className="gradient-button continue">continue</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;