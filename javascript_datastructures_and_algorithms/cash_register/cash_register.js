function checkCashRegister(price, cash, cid) {
//currency unit
let currency ={
  "ONE HUNDRED":100,
  "TWENTY":20,
  "TEN":10,
  "FIVE":5,
    "ONE":1,
    "QUARTER":0.25,
    "DIME":0.1,
    "NICKEL":0.05,
    "PENNY":0.01
}

//converting given cid into an object
let register={};
    cid.map(elem=>register[elem[0]]=elem[1])


  //change to be given
  let change={
    status:undefined,
    change:[]
  };
  //total change
  let diff=cash-price;
 
 //total money in present
  let sum=0;
  let add= function(a,b){
    return a+b;
  }
  cid.forEach(money=>sum=add(sum,money[1]))
  sum=sum.toFixed(2);
//closed if change due is equal to available cash
  if(diff==sum){
    change={
      status:"CLOSED",
      change:cid
    }
  }
  else{
    
    //an empty array to hold all the change
    let give=[];
  //a loop which pushes all the change to the previous array
//looping through all the currency units in currency object
for(let f in currency){
 /*check if difference amount is greater than amount available in register and if yes then give all the amount of that denomination && don't forget to subtract the given change from difference*/
  if(diff>=register[f]){
   
   give.push([f,register[f]]);

   diff-=register[f];

   diff=diff.toFixed(2);
   
 /* if the difference is lesser than the cash denomination of the register but greater than the currency unit then subtract the differnece with as much possible value */
   }else if(diff<register[f]&&diff>currency[f]){
     
    give.push([f,Math.floor(diff/currency[f])*currency[f]]);

    diff-=Math.floor(diff/currency[f])*currency[f];
    diff=diff.toFixed(2)
   }
   
}

/*if difference amount is  greater than sum required or exact change is not available*/ 
    if(diff>sum ||diff!=0){
      change={
        status:"INSUFFICIENT_FUNDS",
        change:[]
      }
    }else{
      change={
        status:"OPEN",
        change:give
      }
    }

  }
  
 
 return change;
}
