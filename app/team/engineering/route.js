// app/team/engineering/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Jeff Horn',
        title: 'boss',
      },
      {
        id: 2,
        name: 'Bri Guy',
        title: 'boss',
      },
      {
        id: 3,
        name: 'Max Payne',
        title: 'boss',
      },
    ];
  }
});
