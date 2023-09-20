/**
 * They are just true or false statements
 */

// True false table:
console.log('///true or false///');
console.log(true && true); //true
console.log(true && false); //false
console.log(true || false); //true
console.log(false || false); //false
console.log(false && false); //false

/**
 * And: &&
 * Or: ||
 * Greater: >
 * Lesser: <
 * GreaterOrEqual: >=
 * LesserOrEqual: <=
 * Loose Equality: ==
 * Strict Equality: ===
 * Loose not Equality: !=
 * Strict not Equality: !==
 * Not operator !
 */

// Truthyness
console.log('Truthyness');
console.log(Boolean(1));
console.log(Boolean('random string'));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));

// Falsiness
console.log('Falsiness');
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));
