// for(var i = 0 ; i < 5 ; i++){
//     console.log(i)
// }

// function encontrarVocarA(string){
//     for(var i = 0 ; i < string.length ; i++){
//         if(string[i] === 'a'){
//             return 'encontramos la vocal a'
//         }
//     }
//     return 'El string que recibimos por parámetro no tiene la vocal a';
// }

// console.log(encontrarVocarA('ana'))

// function cuentaRegresiva(num){
//     for(var i = num ; i >= 5 ; i--){
//         console.log(i)
//     }
// }

// cuentaRegresiva(20)

// function deletrear(string){
//     for(var i = 0 ; i < string.length; i++){
//         console.log(string[i])
//     }
// }

// deletrear('Abril')

// function contarLetra(string, letra){
//     var contador_letra = 0;
//     for(var i = 0; i < string.length ; i++){
//         if(string[i] === letra){
//             contador_letra = contador_letra + 1;
//             console.log(contador_letra)
//         }
//     }
//     return contador_letra;
// }

// contarLetra('Mariana', 'a')

// for(var i = 0 ; i >= 0 ; i++){
//     console.log(i)
// }

// function mientrasMenor6(){
//     var count = 1;
//     while(count < 6){
//         console.log('count es: ' + count)
//         count++
//     }
//     return count;
// }

// console.log(mientrasMenor6())

// function semaforo(color){
//     switch(color){
//         case 'amarillo':
//             console.log('los autos se preparan para avanzar')
//             break;
//         case 'verde':
//             console.log('los autos avanzan')
//             break;
//         case 'rojo':
//             console.log('los autos se detienen')
//             break;
//         default:
//             console.log('este color no es de semaforo')
//     }
// }

// semaforo('verde')

// console.log(comidaRapida.length)

// var longitudArray = comidaRapida.length

// console.log(comidaRapida[longitudArray])

// comidaRapida.push('sandwich')
// console.log(comidaRapida);
// comidaRapida.pop()
// console.log(comidaRapida);
// comidaRapida.unshift('sandwich')
// console.log(comidaRapida);
// comidaRapida.shift()
// console.log(comidaRapida);

// var nombre = "Henry";

// for(var i = 0; i < nombre.length;i++){
//     console.log(nombre[i]);
// }

var comidaRapida = ["Pizza", "Hamburguesa", "Hot dog", "Lasagna"];

// for(var i = 0 ; i < comidaRapida.length ; i++){
//     // console.log(i)
//     console.log(comidaRapida[i])
// }

// for (var comida of comidaRapida) {
//     console.log(comida);
// }

var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// autos.forEach(function(auto){
//    console.log(auto + " quiero")
// })

// var numeros = [2,3,4,5]

// var resultado = numeros.map(function multiplicarPorTres(elemento){
//     return elemento * 3;
// })
// console.log(resultado)
// console.log(numeros);

// var numeros = [1,2,3,4,5,6,7,8,9]

// var suma = numeros.reduce(function(acumulador, elemento){
//     return acumulador + elemento
// },5)

// console.log(suma)

// var arr = []

// arr.length = 20

// console.log(arr)

// var usuario = {
//   nombre: "Nohe",
//   password: "hola123",
//   age: 26,
//   online: true,
// };

// var frutas = {
//   primerFrutaReal: "Manzana",
//   segunda_fruta: "Pera",
//   terceraFruta: "naranja",
// };

// console.log(frutas)

// function usuarios(obj, prop){
//     return obj.prop = 'Nohe'
// }

// var usuario = {
//     nombreUsuario:"Guada", 
//     online:true
// }

// console.log(usuarios(usuario['nombreUsuario']))


  var usuario = {
      nombre: "Nohe",
      password: "hola123",
      age: 26,
      online: true,
    };
//     // console.log(usuario.password)
    
//     usuario.password = "holi2023"
//     usuario["age"] = 27

//     console.log(usuario.password)
//     console.log(usuario.age)

// delete usuario['password'];

// console.log(usuario)

var alumna = {
    nombre:"Nohe",
    apellido:"Martinez",
    etapa:"prepcourse full stack",
    online:true,
    saludo:function(){
        // return 'Mi nombre es ' + this.nombre + ' ' + this.apellido + ' y estoy en la etapa de ' + this.etapa + ' y estoy' + this.online
        return `Mi nombre es ${this.nombre} ${this.apellido} y estoy en la etapa de ${this.etapa} y estoy ${this.online}`
    }
}

console.log(alumna.saludo())
// console.log(alumna.nombre)

// console.log(Object.keys(alumna))
// console.log(Object.values(alumna))

// for(var propiedad in alumna){
//     // console.log(propiedad)
//     console.log(alumna[propiedad])
// }

// for(var i = 0 ; i < array.length ; i++){
//     console.log(i)//0,1,2,3
//     console.log(array[i]) //'hola',true, 25
// }


    