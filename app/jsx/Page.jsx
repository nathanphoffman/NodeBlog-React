var React = require('react');
var Navbar = require('./Components/Navbar.jsx');
var Header = require('./Components/Header.jsx');
var Footer = require('./Components/Footer.jsx');
var TagBar = require('./Components/TagBar.jsx');

var Preview = require('./Pages/Preview.jsx');
var Post = require('./Pages/Post.jsx');

module.exports = class extends React.Component {
  render() {

    let route;
    if (this.state && this.state.route) {
      if (this.state.route == 'preview') route = (
        <Preview 
          page={this.state.page ? this.state.page : 1}
          tag={this.state.tag ? this.state.tag : null}
        />
        );
      // id is always required and should hard fail if we dont have it
      else if (this.state.route == 'post') route = (<Post id={this.state.id}/>) 
      else if (this.state.route == 'error') route = (<div>{this.state.error.message}</div>)
    }
    else route = null; // we do nothing if the route is still rendering

    return (<div><Navbar/><Header/><TagBar/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
            {route}
          </div>
        </div>
      </div>
      <hr/><Footer/></div>);
  }
}
