// generics --> parametros nos tipos --> quando não sabemos qual vai ser o tipo
type FilterCb<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackFn: FilterCb<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 'a']; // tipo concreto

// const filteredArrayOriginal = array.filter((value) => value < 5);
// console.log(filteredArrayOriginal);

const filteredArray = myFilter(array, (value) => value < 5);
console.log(filteredArray);
