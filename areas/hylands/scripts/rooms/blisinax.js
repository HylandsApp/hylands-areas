'use strict';

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      console.log(player.name + ' entered the Blisinax sea');
    }
  }
};
