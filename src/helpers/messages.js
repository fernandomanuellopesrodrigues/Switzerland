import isDevelopment from './environment';

/**
 * @method message
 * @param {String} text
 * @param {Function} fn
 * @return {void}
 */
const message = (text, fn) => isDevelopment() && fn(`Switzerland \uD83C\uDDE8\uD83C\uDDED ${text}.`);

/**
 * @method error
 * @param {String} text
 * @return {void}
 */
export const error = text => message(text, window.console.error);

/**
 * @method warning
 * @param {String} text
 * @return {void}
 */
export const warning = text => message(text, window.console.warn);
