function reverseString() {
    var str = document.getElementById('reverseTheName').value;
    var newString = "";
    for(var i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    document.getElementById('showData').value = newString;
}