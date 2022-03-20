const CargadorOyentes = (objCarga)=> document.getElementById(objCarga);
const QuitadorClases = (obj, myClass)=>  obj.  classList.remove(myClass) ;
const CargadorClases = (obj, myClass)=>  obj.  classList.add(myClass) ;

const formulario      =       CargadorOyentes("form");
const inputBase       =       CargadorOyentes("base");
const inputAltura     =       CargadorOyentes("altura");
const button_calc     =       CargadorOyentes("clac");
const cargaAreas      =       CargadorOyentes("cargaAreas");
const circle_txt      =       CargadorOyentes("circle-txt");

let   area            =        0;


formulario.addEventListener("change" , (e)=>{
   let  circulo         =       CargadorOyentes("circle") ,
        triangulo       =       CargadorOyentes("triangle"),
        cuadrado        =       CargadorOyentes("square"),
        radio           =       CargadorOyentes("r"),
        labelRadio      =       CargadorOyentes("lRadio"),
        base            =       inputBase.      value,
        altura          =       inputAltura.   value;





   switch(true){

        case (e.target.value === "CIRCULO"):
                
                triangulo.  classList.remove("veo_veo");
                cuadrado.   classList.remove("veo_veo");
                circulo.    classList.add("veo_veo"); 
                radio.      classList.add("veo_veo");
                labelRadio. classList.add("veo_veo");

                //circulo.innerHTML = `El area del ${e.target.value}  es de  ${base * altura} tiene un radio de ${radio}` ;


            break;
        case (e.target.value === "RECTÁNGULO"):
            circulo.    classList.remove("veo_veo");
            triangulo.  classList.remove("veo_veo");
            radio.      classList.remove("veo_veo");
            labelRadio. classList.remove("veo_veo");


            cuadrado.classList.add("veo_veo");
            break;
        case (e.target.value === "TRIANGULO"):
                radio.      classList.remove("veo_veo");
                labelRadio. classList.remove("veo_veo");
                circulo.    classList.remove("veo_veo");
                cuadrado.   classList.remove("veo_veo");
                triangulo.  classList.add("veo_veo");
            break;
   }
   
   

})
button_calc.addEventListener("click" ,
                            (e) =>  {
                            base              =      inputBase.     value;
                            altura            =      inputAltura.   value;
                            circle_txt.innerHTML =   `${base*altura}`;
                        
                            }
                                );