function second_smallest(arr){
    if (arr.length < 2)
     return 0;

    let firstmin = arr[0];
    let secondmin = arr[1];
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < firstmin){
        secondmin = firstmin;
        firstmin = arr[i];
      } else if (i>1 && arr[i] < secondmin){
         secondmin = arr[i];
      }
    }
    return secondmin;
  }
console.log(second_smallest([33,44,8]));