/**
 * 
 * @param {string} message - The string to be truncated.
 * @param {number} [max=50] - The maximum length of the string before truncation. Defaults to 50.
 * @returns {string} - The truncated string with "..." appended if it exceeds the maximum length, or the original string if not.
 */
export function txts( message : string, max:number = 50): string {
   if (message.length >= max) {
       return `${message.slice(0, max)}...`;
   } else {
       return message;
   }
}
