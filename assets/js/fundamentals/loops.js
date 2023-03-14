//LOOP FOR
for (let i = 0; i < 5; i++) {
    console.log('Iterasi ke ${i}');
}

//LOOP DO WHILE
//let i = 0;

//do {
//    console.log('Iterasi ke ${i}');
//} while (i < 5);

//LOOP WHILE 
//let i = 0;

//while (i<5) {
//    console.log('Iterasi ke ${i}');
//    i++;
//}

//LOOP CONTROL BREAK
for (let i = 0; i < 5; i++) {
    if(i=3){
        break;
    }
    console.log('Iterasi ke ${i}');
}

//LOOP CONTROL CONTINUE
for (let i = 0; i < 5; i++){
    if(i=3){
        continue;
    }
    console.log('Iterasi ke ${i}');
}
