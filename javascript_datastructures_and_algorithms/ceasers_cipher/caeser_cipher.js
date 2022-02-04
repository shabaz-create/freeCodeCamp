function rot13(str) {
  /*create an object with first thirteen keys and complementary ROT13 letters as values*/
  let obj={
    "A":"N",
    "B":"O",
    "C":"P",
    "D":"Q",
    "E":"R",
    "F":"S",
    "G":"T",
    "H":"U",
    "I":"V",
    "J":"W",
    "K":"X",
    "L":"Y",
    "M":"Z"
  }
  console.log(obj)
  /*reverse the entire object i.e swap keys with values in a new object*/
  let sec={};
  for(let key in obj){
    sec[obj[key]]=key;
  };
  console.log(sec)
  //create an empty string
  let newstr="";

  /*
  here comes the main part ,in here we loop through each character of the given string */

  for(let i=0;i<str.length;i++){
    /*check if the string is special character and if it is then concat the same value to the string */
      if(str.charCodeAt(i)<65){
        newstr+=str[i];
      }
      /*if the value is in between A & M then push the complementary keys from the first object obj */
      else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77){
        newstr+=obj[str[i]];
      }
      /*if the value is in between N & Z then push the complementary key values from the second object sec */
      else{
        newstr+=sec[str[i]]
      }
  }
  console.log(newstr)
  return newstr;
}
