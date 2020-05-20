interface IVehicle {
  name:string;
  year:Date;
  broken:boolean;
  summary():string;
}

interface IReportable{
  summary():string;
}

const oldCivic={
  name:'civic',
  year:new Date(),
  broken:true,
  summary():string {
    return `Name:${this.name}`;
  }
};

const drinker={
  color:'brow',
  carbonated:true,
  sugar:40,
  summary():string{
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printVehicle=(vehicle:{name:string; year:number;broken:boolean}):void=>{
  console.log(`
  The vehicle with name:${vehicle.name}
  Has a title of : ${vehicle.year}
  Is it finished?: ${vehicle.broken}
  `);
};


const printVehicles=(vehicle:IVehicle):void=>{
  console.log(vehicle.summary());
};

printVehicles(oldCivic);

const printSummary=(item:IReportable):void=>{
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinker);