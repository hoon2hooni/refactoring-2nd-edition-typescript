declare function renderPhoto(aPhoto: Photo): string;

type Person = { name: string; photo: Photo };
type Photo = {
  title: string;
  date: Date;
  location: {
    name: string;
  };
};
function renderPerson(person: Person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p: Photo) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(p: Photo) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location.name}</p>`,
    `<p>날짜: ${p.date.toDateString()}</p>`,
  ].join('\n');
}
