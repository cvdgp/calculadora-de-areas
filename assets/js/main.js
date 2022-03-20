
const formulario      =       document.getElementById("form");
const inputBase       =       document.getElementById("base");
const inputAltuura    =       document.getElementById("altura");

formulario.addEventListener("change" , (e)=>{
   let circulo         =       document.getElementById("circle") ;
   let triangulo       =       document.getElementById("triangle");
   let cuadrado        =       document.getElementById("square");

   




   switch(true){

        case (e.target.value === "CIRCULO"):
                triangulo.classList.remove("veo_veo");
                cuadrado.classList.remove("veo_veo");
                circulo.classList.add("veo_veo"); 
            break;
        case (e.target.value === "RECTÁNGULO"):
            circulo.classList.remove("veo_veo");
            triangulo.classList.remove("veo_veo");

            cuadrado.classList.add("veo_veo");
            break;
        case (e.target.value === "TRIANGULO"):
                circulo.classList.remove("veo_veo");
                cuadrado.classList.remove("veo_veo");
                triangulo.classList.add("veo_veo");
            break;
   }
   
   
    console.log(e.target.value);
})
formulario.addEventListener("click" ,
                            (e) =>  {
                            let base            =       inputBase.value;
                            let altura          =       inputAltuura.value;
                             console.log(`Tu objeto tiene un Base de ${base} y una altura de ${altura}`);

                            }
                                );