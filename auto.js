var Motor = /** @class */ (function () {
    function Motor(tipo) {
        this.tipo = tipo;
    }
    return Motor;
}());
var Rueda = /** @class */ (function () {
    function Rueda(tamaño) {
        this.tamaño = tamaño;
    }
    return Rueda;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor, rueda) {
    }
    Auto.prototype.listaAuto = function () {
        console.log(rueda);
    };
    return Auto;
}());
var motor = new Motor('Nafta');
var rueda = [new Rueda(16), new Rueda(16), new Rueda(16), new Rueda(16)];
var primerAuto = new Auto('Fiat', 'Palio', motor, rueda);
primerAuto.listaAuto();
