//---------work#1--------------//

var age = 101;
if (age>=1 && age<=17) console.log("Учеба")
else if (age>=18 && age<=64) console.log("Работа")
else if (age>=65 && age<=100) console.log("Пенсия")
else console.log("Мертв");

//---------work#2--------------//

var mas=[1,2,3,4,5,6,7,8,9];

for (var i=0; i<10; i++){
  switch(mas[i]){
    case 1: console.log(mas[i]+' разработчик'); break;
    case 2:
    case 3:
    case 4: console.log(mas[i]+" разработчика");break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9: console.log(mas[i]+" разработиков");break;
  }
}
