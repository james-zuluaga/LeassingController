 /// calcular valor energia ///////

 let consumo301=0;
 let consumo302=0;
 let consumo401=0;
 function sumar301(){

   let suma301=0;
   let vrKwSin301=Number(document.getElementById(`pal1`).value);
   let vinicial301=Number(document.getElementById(`pal2`).value);
   let vfinal301=Number(document.getElementById(`pal3`).value);
   let vrsub301=vrKwSin301/2;
   let resultado301= vfinal301-vinicial301;
   consumo301= resultado301*vrKwSin301;
      document.getElementById('resultado301').textContent = 'los Kw consumidos son : ' + resultado301;
      document.getElementById('consumo301').textContent = 'el valor a pagar es: ' + consumo301;
      document.getElementById('vrsub301').textContent = 'el valor del kw con subsidio es: $' + vrsub301;
 }

  function sumar302(){

   let suma301=0;
   let vrKwSin302=Number(document.getElementById(`pal4`).value);
   let vinicial302=Number(document.getElementById(`pal5`).value);
   let vfinal302=Number(document.getElementById(`pal6`).value);
   let vrsub302=vrKwSin302/2;
   let resultado302= vfinal302-vinicial302;
   consumo302= resultado302*vrKwSin302;
      document.getElementById('resultado302').textContent = 'los Kw consumidos son : ' + resultado302;
      document.getElementById('consumo302').textContent = 'el valor a pagar es: ' + consumo302;
      document.getElementById('vrsub302').textContent = 'el valor del kw con subsidio es: $' + vrsub302;
 }
 function sumar401(){

   let suma401=0;
   let vrKwSin401=Number(document.getElementById(`pal7`).value);
   let vinicial401=Number(document.getElementById(`pal8`).value);
   let vfinal401=Number(document.getElementById(`pal9`).value);
   let vrsub401=vrKwSin401/2;
   let resultado401= vfinal401-vinicial401;
   consumo401= resultado401*vrKwSin401;
      document.getElementById('resultado401').textContent = 'los Kw consumidos son : ' + resultado401;
      document.getElementById('consumo401').textContent = 'el valor a pagar es: ' + consumo401;
      document.getElementById('vrsub401').textContent = 'el valor del kw con subsidio es: $' + vrsub401;
 }
 function sumTotalSer(){
      let sumTotalSer=consumo301+consumo302+consumo401;
      document.getElementById('sumTotalSer').textContent = 'el total a pagar del recibo es : $' + sumTotalSer;
     }


     //////////////////////// calcular acueducto

     // aseo 

let aResidencial=0;
 let subsidioRes=0;
 let cargofiNores=0;
 let aporte=0;
 let toAseo=0;  
 let totalRec=0;
 let aBodega=0;

 //// acueducto
let vaAcueducto=0;
let personas=0;
let valAcuXPer=0; // secalcula
let totalbodega=0; // se calcula
let acue201=0; // se opera
let toPago201=0;// se opera


 function sumaAc201(){

   let suma301=0;
   totalRec=Number(document.getElementById(`pal10`).value);
//   aResidencial=Number(document.getElementById(`pal11`).value);
   subsidioRes=Number(document.getElementById(`pal12`).value);
   cargofiNores=Number(document.getElementById(`pal13`).value);
   aporte=Number(document.getElementById(`pal14`).value);
     toAseo=Number(document.getElementById(`pal15`).value);
     personas=Number(document.getElementById(`pal16`).value);
     aBodega=aporte+cargofiNores;
     aResidencial=toAseo-aBodega;
     valAcuXPer=vaAcueducto/personas;

   vrsub301=vrKwSin301/2;
   resultado301= vfinal301-vinicial301;
   consumo301= resultado301*vrKwSin301;
      document.getElementById('resultado301').textContent = 'los Kw consumidos son : ' + resultado301;
      document.getElementById('consumo301').textContent = 'el valor a pagar es: ' + consumo301;
      document.getElementById('vrsub301').textContent = 'el valor del kw con subsidio es: $' + vrsub301;
 }
