

const colors = ['yellow', 'blue', 'red', 'orange'];

i = 0;


while (i < colors.length) {

    console.log(colors[i]);
    i++
}



for (i = 0; i < colors.length; i++) {

    console.log(colors[i]);
}


colors.forEach(element => console.log(element));




const hotel = {
    name: 'Zeezicht',
    rooms: 50,
    pool: true,
    gym: false,
    biljart: undefined
};

const keys = Object.keys(hotel);

console.log(keys);

keys.forEach(element => console.log(element));





// 1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?

// For loop: 3 regels
// While loop: 4 regels


// 2. Hoeveel regels neemt mijn forEach method in beslag?

// 1 regel


// 3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
//    Welke Methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?

//    forEach is makkelijker leesbaar omdat het maar één regel code is. Daarnaast is het makkelijker te formulieren dan er een loop voor te schrijven.


