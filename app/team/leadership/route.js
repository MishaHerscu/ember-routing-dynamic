// app/team/leadership/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
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
    ];
  }
});
