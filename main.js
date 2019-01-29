//------------Work-1-------------//

// var arr=[1,2,3,4,5,6];
// function printWindowValues(){
//  console.log(window.arr); //я и то, и то вывожу, потому что
//  console.log(window);     //не уверена, что поняла задание
// }
// printWindowValues();

for (var a in window) {
if (window.hasOwnProperty(a)) {
console.log( window[a]);
}
}

// ------------Work-2-------------//

function expTen(ch){
  var x=1;
 for(var i=1;i<11;i++){
   x=x*ch;
 }
console.log(x);
}
expTen(2);

// Пример этого же задания через рекурсию

function expTen(i,x)
{
  if(i>1)
  {
    x=x*expTen(i-1,x);
  }
  return x;
  console.log(x);
}
console.log(expTen(10,2));

//------------Work-3-------------//

function getFuncRes(a,b){
a(b);
}
getFuncRes(console.log,"Hello World!");
