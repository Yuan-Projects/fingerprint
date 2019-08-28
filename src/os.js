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


/**
 * Returns a timezone string.
 *
 * @return {string} A string.
 */
function getTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Returns the time zone difference, in minutes, from current locale (host system settings) to UTC.
 *
 * @return {number} A number representing the time-zone offset, in minutes, from the date based on current host system settings to UTC.
 */
function getTimezoneOffset() {
  const now = new Date();
  return now.getTimezoneOffset();
}

export {
  getPlatform,
  getTimezone,
  getTimezoneOffset
};