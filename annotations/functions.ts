// creation d'une fonction add ayant deux parametres nombres
const add =(a:number,b:number):number=>{
return a+b;
};

function divide(x:number,y:number):number{
  return y/x;
}

const multiply=function(a:number,b:number):number{
  return a*b;
};

const logger=(message:string):void=>{
  console.log(message);
};

const todaysWeather={
  date:new Date(),
  weather:'sunny'
};

const logWeather=(forecast:{date:Date,weather:string}):void=>{
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);
