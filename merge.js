function mergeSortedArrays (arr1, arr2) {
    let mergedArr = arr1.concat(arr2);
    let uniqueArr = mergedArr.filter(function(ele, p) {
      return mergedArr.indexOf(ele) == p;
    });
    return uniqueArr;
  }
console.log(mergeSortedArrays([1,2,3,4],[4,5,6]))