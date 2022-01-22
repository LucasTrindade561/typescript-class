export function linkObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'Key 1' };
const obj2 = { key2: 'Key 2' };
const link = linkObjects(obj1, obj2);
console.log(link);
