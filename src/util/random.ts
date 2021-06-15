/* eslint-disable max-len */
// Code taken from 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random'
const generate = (min: number, max: number): number => Math.random() * (max - min) + min;

export default generate;
