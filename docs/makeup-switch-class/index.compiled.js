"use strict";

var MakeupSwitchClass = require('../../packages/makeup-switch-class');

window.onload = function (e) {
  document.querySelectorAll('.makeup-switch').forEach(function (e, i) {
    var widget = new MakeupSwitchClass(e);
    console.log(widget);
  });
};