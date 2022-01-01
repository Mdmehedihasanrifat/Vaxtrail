function vaxTrail(arr){
    let A=new Array();
    let B=new Array();
    let C=new Array();
    let D=new Array();
    const Filter= arr.map(element => {
        if(element.temperature>100){
            D.push(element)
        }

        if((element.age>=20 && element.age<30)){
            if(element.temperature<100){
             console.log(element.name)
            console.log(element.temperature)
            A.push(element)}
        }
        if((element.age>=31 && element.age<40)){
            if(element.temperature<100){
                B.push(element)
            }
        }
        if((element.age>=41 && element.age<50)){
            if(element.temperature<100){
                C.push(element)
            }
        }


    });

   console.log("A:",A,"B:",B,"C:",C,"D:",D)



}

vaxTrail([{ name: 'sunil', age: 20, temperature:98},
    { name: 'Biplap', age: 31, temperature: 98 },
    { name: 'Biplap', age: 41, temperature: 98 },
        { name: 'lap', age: 41, temperature: 102 }]

    )