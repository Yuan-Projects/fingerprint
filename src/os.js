/**
 * Returns Operating system name and version.
 *
 * @return {Object}
 */
function getPlatform() {
  const platform = {
    name: '',
    version: ''
  };
  
  if (navigator.platform) {
    platform.name = navigator.platform;
  }
  return platform;
}

export {
  getPlatform
};