/**
 * 리팩토링 전
 */
declare function setTitle(arg: string): void;

let tpHd = 'untitled';
let result: string = '';

result += `<h1>${tpHd}</h1>`;

const obj = {
  articleTitle: 'untitled',
};

setTitle(obj['articleTitle']);
