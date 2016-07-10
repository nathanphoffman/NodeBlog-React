
var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./Page.jsx');
var state = require('./../js/state.js');

module.exports = function(){

  state.setRootComponent(ReactDOM.render(
    <Page></Page>,
    document.getElementById('reactJS')
  ));

  routie({
    // preview blog posts is the default state
    '': function() {
      state.setState({ route: 'preview', page: 1, tag: null })},

    'posts': function() {
      state.setState({ route: 'preview', page: 1, tag: null })},

    'posts/:tag': function() {
      state.setState({ route: 'preview', page: 1, tag: tag })},

    'post/:id': function(id) {
      state.setState({ route: 'post', id: id });},

    'modify/:id': function(id){
      state.setState({ route: 'modify', create: false, id: id });
    },

    'create': function(id){
      state.setState({ route: 'modify', create: true, id: null });
    },

    // this must be at the end to catch any non matching routes
    '*': function(){
      state.setState({ route: 'error', message: "Route not found" });
    },

  });



};

/*

'element/:symbol': function(symbol){
    data.getElement(symbol, elements, function(element){
      api.getWikiSummary(element.Name,function(response){
      state.setState({route: "element", element:ele

      '*': function(){
   state.setState({route: "default"});
 }
*/
