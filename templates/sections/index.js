'use strict';
var model = require( '../../model' );
<% if (useES6) { %>
class <%= section %> {
<% if (section=='Preloader') { %>
  constructor(onComplete) {
    this.preloaded = onComplete;
  }
<% } else { %>
  constructor() {

  }
<% } %>
  init(req,done) {
<% } else { %>
<% if (section=='Preloader') { %>
function <%= section %>(onComplete) {
  this.preloaded = onComplete;
}
<% } else { %>
function <%= section %>() {}
<% } %>
<%= section %>.prototype = {
  init: function( req, done ) {
<% } %>
		done();
<% if (useES6) { %>
  }
  resize(w,h) {
<% } else { %>
  },
  resize: function(w,h) {
<% } %>

<% if (useES6) { %>
  }
  animateIn(req,done) {
<% } else { %>
  },
  animateIn: function(req,done) {
<% } %>
		done();
    <% if (section=='Preloader') { %>
    this.preloaded();
    <% } %>
<% if (useES6) { %>
  }
  animateOut(req,done) {
<% } else { %>
  },
  animateOut: function(req,done) {
<% } %>
		done();
<% if (useES6) { %>
  }
  destroy(req,done) {
<% } else { %>
  },
  destroy: function(req,done) {
<% } %>
		done();
	}
};
module.exports = <%= section %>;
