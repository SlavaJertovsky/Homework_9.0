const cities = ['moscow', 'london', 'berlin', 'porto'];

function get(arr, index) {
  if (index > arr.length) {
      return 'null'
  }  else if (index < 0){
      return 'oops'
    

}  else return arr[index]
}

console.log(get(cities,3,))