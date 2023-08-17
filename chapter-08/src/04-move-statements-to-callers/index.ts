/**
 * 호출자가 둘뿐인 상황
 */

interface OutStream {
  write: (str: string) => void;
}

export type Person = { name: string; photo: Photo };
export type Photo = {
  title: string;
  date: Date;
  location: {
    name: string;
  };
};

declare function recentDateCutoff(): Date;
declare function renderPhoto(outStream: OutStream, photo: Photo): void;

export function renderPerson(outStream: OutStream, person: Person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream: OutStream, photos: Photo[]) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream: OutStream, photo: Photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
