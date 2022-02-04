function palindrome(str) {
  //regex to select all alphanumeric characters,case insensitive
  let regex= /[a-z0-9]/i;
  /*splitting and reversing the string after removing alpha numeric characters*/
  let right=str.split("").filter(elem=>regex.test(elem)).reverse();
  console.log(right)
  /* splitting the string after removing alpha numberic characters */
  let left=str.split("").filter(elem=>regex.test(elem));
  console.log(left);

  //checking both left and right after joining them if they are same
  //if same return true else false
  if(left.join("").toLowerCase()===right.join("").toLowerCase()){
    console.log(true)
    return true;
  }else{
    console.log(false)
    return false;
  }
 
}
