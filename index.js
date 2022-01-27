

  function insertSpaces(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');

    return string;
}

console.log(insertSpaces('myBook'));