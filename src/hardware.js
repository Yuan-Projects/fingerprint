function getCPUClass() {
  return window.navigator.cpuClasss;
}

function getHardwareConcurrency() {
  return window.navigator.hardwareConcurrency;
}

export {
  getCPUClass,
  getHardwareConcurrency
};