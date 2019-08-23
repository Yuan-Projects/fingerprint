var YuanFP = (function (exports) {
  'use strict';

  /**
   * Returns the central processing unit (CPU) class of the user's operating system.
   * http://help.dottoro.com/ljjsison.php
   * Note: only works in IE.
   * @return {(string|undefined)} String that represents the class of the CPU. ['68K', 'Alpha', 'PPC', 'x86', 'Other']
   */
  function getCPUClass() {
    return window.navigator.cpuClasss;
  }

  /**
   * Returns the number of logical processors available to run threads on the user's computer.
   * Don't treat this as an absolute measurement of the number of cores in the user's system.
   * https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency
   * 
   * @return {(number|undefined)} A Number indicating the number of logical processor cores.
   */
  function getCPUCores() {
    return window.navigator.hardwareConcurrency;
  }

  /**
   * Returns the approximate amount of device memory in gigabytes.
   * https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory
   *
   * @return {(number|undefined)} A floating point number, or undefined if not supported.
   */
  function getMemory() {
    return window.navigator.deviceMemory;
  }

  /**
   * Detects GPU vendor and renderer.
   * https://gist.github.com/cvan/042b2448fcecefafbb6a91469484cdf8
   *
   * @return {Object} An object contains GPU render and renderer.
   */
  function getGPU() {
    var canvas = document.createElement('canvas');
    var gl;
    var debugInfo;
    var vendor;
    var renderer;
    
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    
    if (gl) {
      debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
    return {
      vendor,
      renderer
    };
  }

  exports.getCPUClass = getCPUClass;
  exports.getCPUCores = getCPUCores;
  exports.getGPU = getGPU;
  exports.getMemory = getMemory;

  return exports;

}({}));
