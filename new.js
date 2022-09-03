// const person = {

//     name: 'Gulab_|',
//     lastName: 'Gul Jan_|',
//     age: 23,
//     car: {

//         name: 'Rolls Royce',
//         model: '2016',
//         path: '-4-44332',
//         engine: 'V8',
//         color: 'Black'
//     }
// };

// document.write(person.car.name)
// document.write(person.car.model)
// document.write(person.car.path)
// document.write(person.car.engine)
// document.write(person.car.color)



// // for(let key in person){

// // document.write("<h1>" +person[key]+ "</h1>" )
// // }




// // document.getElementById('demo').innerHTML;




// // const myPc = new Object();
// // myPc.Name = "DELL"
// // myPc.Gen = "8th Gen"
// // myPc.processor = "8processors Corei5"

// // console.log(myPc.Name);
// // console.log(myPc.Gen);
// // console.log(myPc.processor);

// // document.write(myPc['Gen'])

 

// // function myBtn(){

// //     document.getElementById('btn').style.backgroundColor='red';
// // }





// function searchKey(){

//     var inputa = document.querySelector('$a').value;
//     var inputb = document.querySelector('$b').value;

//     // const car = {

//     //             name: "Rolls Royce",
//     //             model: "2016",
//     //             path: "-4-44332",
//     //             engine: "V8",
//     //             color: "Black"
//     //         }

//             // document.getElementById(demo).innerHTML.car[input];
// }



// myObj = {

//     name: "Yousuf",
//     Age: 17,

//     cars: {
//         car1: "Chevrolet    ",
//         car2: "Mercedes-Benz    ",
//         car3: "Toyota    "
//     } 
// }
// for(let key in myObj.cars){
//     document.write(myObj.cars[key])
// }



const loop ={

    name: "Yousuf",
     cars: [

        {name: "Chevrolet", model: ['Suburban_', 'Avalanch_', 'Hybrid']},
        {name: "Mercedes-Benz", model:['C300_', 'Sport_', 'Compressor']},
        {name: "Toyota", model:['Land-Cruiser_', 'GLX Corolla-2013_', 'Hilux']},

     ]
}
var demo = ""
demo = demo + loop.name

for(let key in loop.cars){
    demo = demo + ("<h1>" + loop.cars[key].name + "</h1>" );

    for(let j in loop.cars[key].model){
        demo = demo + loop.cars[key].model[j];
    }
}
document.getElementById('show').innerHTML=demo;

