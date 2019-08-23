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

/**
 * Returns information about the system's battery charge leve.
 * https://github.com/pstadler/battery.js
 * Note: Due to privacy concerns, support for the Battery Status API has been dropped from most browsers.
 * See: https://caniuse.com/#feat=battery-status.
 *
 * @return {Object} An wrapped HTML5 Battery object. 
 */
function getBattery() {
  var Battery = (function(self) {
    var _events = 'chargingchange chargingtimechange dischargingtimechange levelchange',
    _battery = navigator.getBattery || navigator.battery || navigator.mozBattery,
    _status = null,
    _statusCallback = function() {},
    _updateCallback = function() {},
    STATUS_UNSUPPORTED = 'not supported';
  
    self.getStatus = function(fn) {
      if(_status === STATUS_UNSUPPORTED) {
        fn(null, _status);
      } else if(_status) {
        fn(_status);
      } else {
        _statusCallback = fn;
      }
    };
  
    self.onUpdate = function(fn) {
      _updateCallback = fn;
    };
  
    function eventHandler(status) {
      _status = status;
      _updateCallback(_status);
    }
  
    function registerEventHandler(battery) {
      _events.split(' ').forEach(function(evt) {
        battery.addEventListener(evt, eventHandler);
      });
    }
  
    if(_battery instanceof Function) {
      _battery.call(navigator)
        .then(function(status) {
          _status = status;
          _statusCallback(_status);
          registerEventHandler(_status);
        }, function() {
          _status = STATUS_UNSUPPORTED;
        });
    } else if(_battery) {
      _status = _battery;
      registerEventHandler(_battery);
    } else {
      _status = STATUS_UNSUPPORTED;
    }
  
    return self;
  })(Battery || {});

  return Battery;
}

export {
  getBattery,
  getCPUClass,
  getCPUCores,
  getGPU,
  getMemory
};