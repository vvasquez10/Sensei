class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(`Hello, my name is ${this.nombre}`);
    }

    showStats(){
        console.log("Name: "+ this.nombre +"\n"+
                        "Health: "+ this.salud +"\n"+
                        "Speed: "+ this.velocidad +"\n"+
                        "Streght: "+ this.fuerza);
    }

    drinkSake(){
        console.log("My health is now "+ (this.salud+10));
    }

}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`);
    }

    showStats(){
        super.showStats()
        console.log("Wisdom: "+this.wisdom);
    }

    drinkSake(){
        console.log("My health is now "+ (this.salud+20));
    }
}


const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const sensei1 = new Sensei('Hyomura Sensei');
sensei1.showStats();
sensei1.drinkSake();