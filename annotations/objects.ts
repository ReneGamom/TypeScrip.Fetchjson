const profile={
  name:'alex',
  age:20,
  coords:{
    lat:0,
    lng:15
  },
  setAge(age:number):void{
    this.age=age;
  }
};

// destructuration des annotations dans les objects suivant ES2015

const {age, name}:{age:number;name:string}=profile;



const{coords:{lat,lng}}:{coords:{lat:number;lng:number}}=profile;

