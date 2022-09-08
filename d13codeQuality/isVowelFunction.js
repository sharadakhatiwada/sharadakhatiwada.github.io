"use strict";
/**
 *
 * @param {letter} alphabet  anything user input
 * @returns {boolean} if its vowel return true
 */

function isVowel(alphabet) {
  if (
    alphabet === "a" ||
    alphabet === "e" ||
    alphabet === "i" ||
    alphabet === "o" ||
    alphabet === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("b"));

exports.isVowel = isVowel;
