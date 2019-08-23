var YuanFP = (function (exports) {
  'use strict';

  function getCPUClass() {
    return window.navigator.cpuClasss;
  }

  function getHardwareConcurrency() {
    return window.navigator.hardwareConcurrency;
  }

  exports.getCPUClass = getCPUClass;
  exports.getHardwareConcurrency = getHardwareConcurrency;

  return exports;

}({}));
