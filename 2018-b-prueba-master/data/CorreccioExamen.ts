
declare var require;
const fs = require('fs');
const rxjs = require('rxjs');
const inquirer = require('inquirer');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;

function buscarTipos(propiedad:string, arreglo:Character[]) {
    const  arregloRepetido = arreglo.map((caracter)=>{
        return caracter[propiedad]
    });
    rxjs.of(arregloRepetido).pipe(
        distinct()
    )
}
function clasificar (propiedad:string, arregloPropiedades:string[],arreglo:Character[]){
    const respuesta = [];
    arregloPropiedades.forEach((prop)=>{
        const arregloFiltrado =arreglo.filter((caracter)=>{
            return caracter[propiedad] === prop
        })
        respuesta.push(arregloFiltrado)
    })
    return respuesta
}
buscarTipos('gender',arreglo).pipe(
    map((arregloRepetidos)=>{
        return clasificar('gender',arregloRepetidos,arregl)
    })
);

const  arregloAbecedario = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
function buscarPorAbecedario(arregloAbecedario:string[],arreglo){
    return arregloAbecedario.map(
        (letra)=>{
            const object ={};
            object[letra] = arreglo.some((caracter)=>{
                return caracter.name.slice(0,1)
            })
        }
    )
}
interface Character {
    "name": string,
    "height": string,
    "mass": string,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string,
    "homeworld": string,
    "films": string [],
    "species": string [],
    "vehicles": string [],
    "starships":string [],
    "created": Date | string | any,
    "edited": string | string  |any
    "url": string
}