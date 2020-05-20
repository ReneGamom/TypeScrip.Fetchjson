const apples=5;
let aples=5;

let speed:string ='fast';

let hasName:boolean=true;

let nothingMuch: null=null;

let nothing:undefined=undefined;

let now: Date=new Date();


//array
let colors:string[] =['red','green','bleu'];
let myNumber: number[]=[1,2,3,4,5];
let truths:boolean[]=[true,true,false];

// classes
class Car{

}
let car:Car=new Car();

// object litteral

let point:{x:number; y:number}={
  x:10,
  y:20
};

// functions

const logNumber:(i:number)=>void=(i:number)=>{
  console.log(i);
};
// When to use annotations
// Function that returns the 'any' type

const json='{"x":10,"y":20}'
const coordinates=JSON.parse(json);
console.log(coordinates);

// WHEN WE DECLAARE A VARIABLE ON ONE LINE AND INITIALIZED IT LATER

let words=['red','green','blue'];

let foundWord:boolean;

for(let i=0; i<words.length;i++){
  if (words[i]==='green'){
    foundWord=true;
  }
}