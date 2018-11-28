const fs = require('fs');
const map = require('rxjs/operators').map;
var Male = [];
var Famale = [];
function buscarGenero() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const genero = bdd.persona
                    .map((people) => {
                    return people.gender;
                });
                resolve(genero);
            }
        });
    });
}
function buscarEye() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const eyes = bdd.persona
                    .find((people) => {
                    return people.eye_color;
                });
                resolve(eyes);
            }
        });
    });
}
function buscarSkin() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const skin = bdd
                    .find((people) => {
                    return people.skin_color;
                });
                resolve(skin);
            }
        });
    });
}
function buscarHair() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const hair = bdd
                    .find((people) => {
                    return people.hair_color;
                });
                resolve(hair);
            }
        });
    });
}
function main() {
    buscarGenero().then((result) => {
        console.log('Busque los tipos de "gender" en el arreglo', result);
        result.map((people) => {
            if (people === 'male') {
                Male.push(people);
                console.log('MALE', Male);
            }
            else {
                if (people === 'female') {
                    Famale.push(people);
                    console.log('FEMALE', Famale);
                }
            }
        });
    }).catch((resultadoError) => {
        console.log('Error', resultadoError);
    });
    buscarEye().then((result) => {
        console.log('Busque los tipos de "eye_color" en el arreglo', result);
    }).catch((resultadoError) => {
        console.log('Error', resultadoError);
    });
    buscarSkin().then((result) => {
        console.log('Busque los tipos de "skin_color" en el arreglo', result);
    }).catch((resultadoError) => {
        console.log('Error', resultadoError);
    });
    buscarHair().then((result) => {
        console.log('Busque los tipos de "hair_color" en el arreglo', result);
    }).catch((resultadoError) => {
        console.log('Error', resultadoError);
    });
}
main();
//6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.
const arregloRespuesta = [
    {
        a: true
    },
    {
        b: false
    },
];
