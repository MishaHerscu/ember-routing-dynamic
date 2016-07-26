// app/team/leader/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return [
      {
        id: 1,
        name: 'Bill Gates',
        title: 'boss',
      },
      {
        id: 2,
        name: 'Melinda Gates',
        title: 'boss',
      },
    ][params.id - 1];
  }
});
