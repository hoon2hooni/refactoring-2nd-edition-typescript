/**
 * 리팩토링 후
 */

let _tittle: string = 'untitled';
let result: string = '';

result += `<h1>${title}</h1>`;

const obj = {
  articleTitle: 'untitled',
};

function title() {
  return _tittle;
}

function setTitle(arg: string) {
  _tittle = arg;
}
