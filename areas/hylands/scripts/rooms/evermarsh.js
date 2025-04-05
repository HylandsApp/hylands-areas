'use strict';

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      console.log(player.name + ' entered Evermarsh');
      const questRef = 'hylands:journeybegins';
      if (state.QuestFactory.canStart(player, questRef)) {
        const quest = state.QuestFactory.create(state, questRef, player);
        player.questTracker.start(quest);
      }
    }
  }
};
