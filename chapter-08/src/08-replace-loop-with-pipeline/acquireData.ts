function acquireData(input: string) {
  return input
    .split('\n')
    .slice(1) //
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((fields) => fields[1].trim() === 'India')
    .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}
