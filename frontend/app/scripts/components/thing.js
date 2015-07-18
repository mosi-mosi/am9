'use strict';

import stores from '../models/stores';

Vue.component('thing', {
  template: '#thing',
  replace: true,
  props: ['thing'],

  ready: function() {
    this.$$.thingInput.focus()
  },

  methods: {
    stateCheck: function(e) {
      if (e.keyCode == 8) {
        if (this.$$.thingInput.value == "") {
          // TODO : backspace時に文字列がなければthingを削除
        }
      }
    },
    onClickMoveThing: function() {

    }
  }
});