type Resource = {
  pop: () => Resource;
  create: () => Resource;
}
declare const available: Resource[];
declare const allocated: Resource[];
declare const Resource: Resource;

function resourcePool()  {
  try {
    const result = available.pop()
    if(!result) {
      throw new Error('리소스가 부족합니다.')
    }
    allocated.push(result);
  } catch (e) {
    const result = Resource.create();
    allocated.push(result)
  }

  return result;
}

