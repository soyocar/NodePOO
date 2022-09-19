class Motor {
    private tipo:string;

    public constructor(tipo:string){
        this.tipo = tipo;
    }

}

class Rueda {
    private tamaño: number;
    public constructor(tamaño:number){
        this.tamaño = tamaño;
    }
}

class Auto {
    private marca: string;
    private modelo: string;
    private motor: Motor;
    private rueda: Rueda[];

    public constructor (marca:string,modelo:string,motor: Motor,rueda:Rueda[]){

    }

    public listaAuto(){
        console.log(rueda);
    }
}

let motor: Motor = new Motor('Nafta');
let rueda: Rueda[] = [new Rueda(16), new Rueda(16), new Rueda(16),new Rueda(16)];
let primerAuto:Auto = new Auto('Fiat','Palio',motor,rueda);
primerAuto.listaAuto();