
const carMarkers:string[]=['ford','toyota','mercedes'];

const dates=[new Date(),new Date()];

const carByMake:string[][]=[];

const carsByMake=[
  ['f150'],['corolla'],['ms350']
];

//help with inference when extracting values

const cars = carMarkers[0];

const myCar=carMarkers.pop(); // extract the lat element

//prevent incompatible values
carMarkers.push('fordfocus'); //append new element in an array and return the lenght

//help with map

carMarkers.map((car:string):string=>{
return car.toUpperCase();
});

// Flexible methode

const importantDates:(Date|string)[]=[new Date()];
importantDates.push(new Date());
importantDates.push('2020-04-16');
