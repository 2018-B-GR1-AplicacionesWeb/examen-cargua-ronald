declare var require;
const fs = require('fs');
const inquirer = require('inquirer');
const map = require('rxjs/operators').map;
var Male=[];
var Famale=[];
function buscarGenero() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const genero = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            )
                        resolve(genero);
                    }
                });
        }
    );
}
function buscarEye() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const eyes = bdd.persona
                            .find(
                                (people) => {
                                    return people.eye_color;
                                }
                            );
                        resolve(eyes);
                    }
                }
            );
        }
    );
}
function buscarSkin() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const skin = bdd
                            .find(
                                (people) => {
                                    return people.skin_color ;
                                }
                            );
                        resolve(skin);
                    }
                }
            );
        }
    );
}
function buscarHair() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const hair = bdd
                            .find(
                                (people) => {
                                    return people.hair_color ;
                                }
                            );
                        resolve(hair);
                    }
                }
            );
        }
    );
}
function main(){
    buscarGenero().then(
        (result)=>{
            console.log('Busque los tipos de "gender" en el arreglo',result);
            result.map((people)=> {
                        if (people === 'male') {
                            Male.push(people);
                            console.log('MALE',Male)
                        }else{
                            if(people === 'female'){
                                Famale.push(people);
                                console.log('FEMALE',Famale)
                            }
                        }
                    }
                )
        }
    ).catch(
            (resultadoError)=>{
                console.log('Error',resultadoError);
            }
    );
    buscarEye().then(
        (result)=>{
            console.log('Busque los tipos de "eye_color" en el arreglo',result);
        }
    ).catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    );
    buscarSkin().then(
        (result)=>{
            console.log('Busque los tipos de "skin_color" en el arreglo',result);
        }
    ).catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    );
    buscarHair().then(
        (result)=>{
            console.log('Busque los tipos de "hair_color" en el arreglo',result);
        }
    ).catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    );
}
main()
//## 11) Realizar la operacion de crear nuevos `people` con la libreria `inquirer.js`

const people = [{

    name: "name",
    type: 'input',
    message: 'Ingrese: '
    },{
        name: "height",type: 'input',
    message: 'Ingrese: '
    },{
        name:"mass",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"hair_color",
    type: 'input',
    message: 'Ingrese: '
    },{
        mane:"skin_color",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"eye_color",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"birth_year",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"gender",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"homeworld",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"films",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"species",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"vehicles",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"starships",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"created",
    type: 'input',
    message: 'Ingrese: '
    },{
        name:"edited",
    type: 'input',
    message: 'Ingrese: '
    },{
    name:"url",
    type: 'input',
    message: 'Ingrese: '
}
];













