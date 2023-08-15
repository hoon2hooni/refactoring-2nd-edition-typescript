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
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));

  return result.join('\n');
}

function photoDiv(p: Photo) {
  return ['<div>', `<p>제목: ${p.title}</p>`, emitPhotoData(p), '</div>'].join(
    '\n',
  );
}

function emitPhotoData(aPhoto: Photo) {
  const result = [];

  result.push(`<p>위치: ${aPhoto.location.name}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);

  return result.join('\n');
}
