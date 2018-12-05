const fs = require('fs');
const rxjs = require('rxjs');
const inquirer = require('inquirer');
const map = require('rxjs/operators').map;
var Male = [];
var Famale = [];
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'Base de datos vacia',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    bdd: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
const leerBDD$ = rxjs.from(leerBDD());
leerBDD$.pipe(map((res) => {
    console.log(res.gender);
})).subscribe((mensaje) => {
    console.log(mensaje);
});
