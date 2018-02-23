class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    console.log(this.arr);
    return this.arr;
  }

  sort(indices) {
    let tempStore;
    indices = indices.sort();
    for (let j = 0; j < indices.length-1; j++)
      for (let i = 0; i < indices.length-1; i++){
        if (this.compareFunction(this.arr[indices[i]], this.arr[indices[i+1]]) > 0){
          tempStore = this.arr[indices[i]];
          this.arr[indices[i]] = this.arr[indices[i+1]];
          this.arr[indices[i+1]] = tempStore;
        }
      }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;