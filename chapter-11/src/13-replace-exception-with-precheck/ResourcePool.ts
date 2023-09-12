type Resource = {
  pop: () => Resource;
  create: () => Resource;
};
declare const available: Resource[];
declare const allocated: Resource[];
declare const Resource: Resource;

function resourcePool() {
  const result =
    available.length === 0 ? Resource.create() : (available.pop() as Resource);
  allocated.push(result);
  return result;
}
