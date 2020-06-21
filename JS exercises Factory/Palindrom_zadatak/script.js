function isPalindrome(str) {
 
  var remove = /[\W_]/g;

  str = str.toLowerCase().replace(remove, '');

  var len = str.length;

  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  } return true;
}

console.log(isPalindrome("Udovica baci vodu"));
