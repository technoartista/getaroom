/** @jsx React.DOM */

define([
    'react',
    'skyway'
], function (
    React,
    Skyway
) {

var sky = new Skyway();

var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function() {
    return React.DOM.div(null, "Hello ", this.props.name);
  }
});

React.renderComponent(HelloMessage( {name:"Visitor"} ),
    document.getElementById('notifications'));

});
