// Code your solutions in this file

let cardArray = [];

function writeCards(nameString, event) {
   for (let i=0; i<nameString.length; i++){
      let message = `Thank you, ${nameString[i]}, for the wonderful ${event} gift!`;
      cardArray.push(message);
   }
   return cardArray;
}


function countDown(startNumber){
   while (startNumber>=0){
      console.log(startNumber);
      startNumber -= 1;
   }
}

countDown(10);
