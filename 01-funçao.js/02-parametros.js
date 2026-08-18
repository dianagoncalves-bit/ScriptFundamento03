function apresentar (nome){
    console.log(`olá, ${nome}`);
}
apresentar("Selwyn Kane");

function somar(a , b ){
    console.log(`${a} + ${b} = ${a+b}`);
}

somar (20, 20 );

function apresentar (nome = "visitante"){
    console.log(`olá, ${nome}`);
}
apresentar();
apresentar("Selwyn Kane");

