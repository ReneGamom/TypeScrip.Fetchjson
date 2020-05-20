class Vehicle{
  _color:string;
  constructor(color:string){
    this._color=color;
  }

  protected drive():void{
    console.log('hihihihihi holalala');
  }

  private honk():void{
    console.log('beep');

  }
  rouler():void{
    console.log('vrom vrom vrom');
  }
}

const vehicle=new Vehicle("orange");

vehicle.rouler();

class Card extends Vehicle{

  protected drive():void{
    console.log('Gamom Rene !');
  }
  Chauffeur():void{
    this.drive();
  }
}

const data=new Card('green');

data.rouler();
data.Chauffeur();

class Ford extends Vehicle{
  constructor(public wheels:number,color:string){
    super(color);
  }
}

const uneford=new Ford(4,'gray');
