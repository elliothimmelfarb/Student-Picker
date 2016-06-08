// making chunks with Array.prototype.splice()

var arr = [1,2,3,4,5,6,7,8,9,10];

console.log(chunk(shuffle(arr), 3))


function chunk(arr, size) {
   var resArr = [];

   while(arr.length) {

      resArr.push(arr.splice(0, size));

   }
   return resArr;
}

function shuffle(arr) {
   var shuffled = [];

   while(arr.length) {
      var index = Math.floor(Math.random() * arr.length);

      shuffled = shuffled.concat(arr.splice(index, 1));
   }

   return shuffled;
}


