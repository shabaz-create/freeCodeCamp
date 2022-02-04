function telephoneCheck(str) {
  //the regex is quite complex if we check case by case then it will be easy
  //be careful while reading the regex it might be confusing
 let regex=/^(1?\s?)(([0-9]{3}\s){2}|\([0-9]{3}\)\s[0-9]{3}-|(([0-9]{3}-)){2}|^([0-9]{3}-){2}|[0-9]{6}|\([0-9]{3}\)[0-9]{3}-)[0-9]{4}$/

//simple if else statemnt to validate the number using given regex 
 if(regex.test(str)){
   return true;
 }else{
   console.log(false);
   return false;
 }
}
