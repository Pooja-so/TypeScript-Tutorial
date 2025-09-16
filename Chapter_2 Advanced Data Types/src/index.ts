/* ----------------- 1. Classes in Typescript --------------- */
/* Parent class */
class Player {
  public id: string;
  constructor(
    protected height: number,
    protected weight: number,
    protected healthPoint: number
  ) {
    this.id = crypto.randomUUID();
    this.height = height;
    this.weight = weight;
    this.healthPoint = healthPoint;
  }

  /* Getter functions */
  get getHeight(): number {
    return this.height;
  }
  get getWeight(): number {
    return this.weight;
  }

  /* Setter Function */
  set setHeight(heightValue: number) {
    this.height = heightValue;
  }
}

const player1 = new Player(100, 150, 23);
console.log(player1.getHeight);
console.log(player1.getWeight);
player1.setHeight = 55;
console.log("Player Id: ", player1.id);

/* Child class */
class AdvancedPalyer extends Player {
  constructor(
    height: number,
    weight: number,
    healthPoint: number,
    private level: number
  ) {
    super(height, weight, healthPoint);
    this.level = level;
  }
}

/*----------- Class with Interface---------- */
interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface RetrieveID {
  getId: () => string;
}

class Product implements ProductType, RetrieveID {
  private id: string = crypto.randomUUID();

  constructor(public name: string, public price: number, public stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getId = () => this.id;
}

const product1 = new Product("laptop", 50000, 30);
console.log(product1.getId());
