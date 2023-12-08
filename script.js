"use strict"

// const a=5
// const b=6
// document.write(a+b)


//funkcijas deklarešana
// function izdruka(){
//     document.write("mani sauc")
// }

// //izsauc funkciju
// izdruka()


function sulus(ab, ap){
    console.log(ab, ap)
    const sula=`sula no ${ab} aboliem un ${ap} apelsiniem`
    return sula
}
const absula = sulus(2,0)
console.log(absula)

const abapsula = sulus(2,4)
console.log(abapsula)



function perimetrs(a,b,c){
    const per=`trijstura perimetrs ir ${a+b+c}`
    return per
}
const tr = perimetrs(2,4,6)
console.log(tr)

//funkciju izteiksmes(function expression)
function vecums(dzG){
    const pV = 2023 - dzG
    return pV
}
const vec = vecums(1986)
console.log(vec)

//izteiksme jeb anonima funkcija
const vec1 = function(dzG){
    return 2023 - dzG
}
console.log(vec1(2000))




const tr1 = function(a,b,c){
    return a+b+c
}

console.log(tr1(2,3,4))

//bultu funkcijas (arrow function)
const vec3 = dzG => 2023 - dzG
const pilnG = vec3(1985)
console.log(pilnG)