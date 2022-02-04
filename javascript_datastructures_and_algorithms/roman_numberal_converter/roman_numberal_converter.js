function convertToRoman(num) {
  let romanNumber="";//empty string
  /*create two arrays of both roman numerals and numbers*/
  let roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let number=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  //loops through any array(as length of both array is same)
  for(let i=0;i<roman.length;i++){
    /*add a while loop that pushes roman numeral to empty string as long as given argument is less than element in numbers array,PS:don't forget to decrement the argument with the number corresponding to the one pushed two string*/
    while(num>=number[i]){
          romanNumber+=roman[i];
      num-=number[i];

    }
  }
  console.log(romanNumber)
 return romanNumber;
}

convertToRoman(36);
