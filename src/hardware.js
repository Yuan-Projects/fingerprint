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

export {
  getCPUClass,
  getCPUCores
};