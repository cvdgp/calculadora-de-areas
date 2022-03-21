/* funciones para cargar datos */
const CargadorOyentes = (objCarga)=> document.getElementById(objCarga);
const QuitadorClases = (obj, myClass)=>  obj.  classList.remove(myClass) ;
const CargadorClases = (obj, myClass)=>  obj.  classList.add(myClass) ;

const formulario        =       CargadorOyentes("form");
        /**inpust */
      inputBase         =       CargadorOyentes("base"),
      inputAltura       =       CargadorOyentes("altura"),
      inputRadius       =       CargadorOyentes("r"),
      inputList         =       CargadorOyentes("mi_figura"),
      /**labels */
      labelBase         =       CargadorOyentes("labelAltura"),
      labelAltura       =       CargadorOyentes("labelBase"),

     /**botones */
      button_calc       =       CargadorOyentes("clac"),
      button_cargaAreas =       CargadorOyentes("cargaAreas"),
      /**svgs con formas geométricas */
      circle_txt        =       CargadorOyentes("circle-txt"),
      square_txt        =       CargadorOyentes("square-txt"),
      triangle_txt      =       CargadorOyentes("triangle-txt");

let   area              =        0;

/* función para el calculo de areas de objetos */
const Areas = (figuraGeometrica, base, altura,radio) =>{
    /**
    
        triangulo ==> b*h /2
        Rectángulo ==> b * h 
        circulo ==> π  * r2
    
     */
     
    
    let resultado = 0 ;
    
    if (figuraGeometrica === "CIRCULO" ){
            resultado =   Math.PI * radio;/**Math.PI * (Math.pow(radio,2)) */
        return resultado;
    }else if (figuraGeometrica === "RECTÁNGULO" ){
            resultado = base * altura ;
        return resultado;
    }else if (figuraGeometrica === "TRIANGULO" ) {
        resultado =  (base * altura ) / 2;

         return resultado;
    } 

};


formulario.addEventListener("change" , (e)=>{


   let  circulo         =       CargadorOyentes("circle") ,
        triangulo       =       CargadorOyentes("triangle"),
        cuadrado        =       CargadorOyentes("square"),
        radio           =       CargadorOyentes("r"),
        labelRadio      =       CargadorOyentes("Radio"),
        base            =       inputBase.    value,
        altura          =       inputAltura.  value;
    


   if(e.target.value === "RECTÁNGULO"  || e.target.value === "TRIANGULO"){
       CargadorClases(inputAltura, "veo_veo");
       CargadorClases(inputBase, "veo_veo");
       CargadorClases(labelAltura, "veo_veo");
       CargadorClases(labelBase, "veo_veo");
   }

   switch(true){

        case (e.target.value === "CIRCULO"):

                let cargador_QuitadorClases = 
                    [ triangulo, cuadrado, inputBase, inputAltura, labelAltura, labelBase];

                    /** quitamos la clase veo_veo para modificar visibility */
                cargador_QuitadorClases.forEach(item => QuitadorClases(item,"veo_veo"));
                            /*
                            QuitadorClases(triangulo,"veo_veo");
                            QuitadorClases(cuadrado,"veo_veo");
                            QuitadorClases(inputBase,"veo_veo")
                            QuitadorClases(inputAltura,"veo_veo")
                            QuitadorClases(labelAltura,"veo_veo")
                            QuitadorClases(labelBase,"veo_veo")
                            */

                let cargador_CargadorClases = [inputBase,inputAltura, labelBase,labelAltura];
                    cargador_CargadorClases.forEach(item => CargadorClases(item,"no_veo"));
                let cargador_CargadorClase_2 = [circulo,radio,labelRadio];
                    cargador_CargadorClase_2.forEach(item => CargadorClases(item,"veo_veo"));
                                /*  
                                    ******cargador_CargadorClase**
                                    CargadorClases(inputBase,"no_veo");
                                    CargadorClases(inputAltura,"no_veo");
                                    CargadorClases(labelBase,"no_veo");
                                    CargadorClases(labelAltura,"no_veo");
                                    ******cargador_CargadorClase_2****
                                    circulo.    classList.add("veo_veo"); 
                                    radio.      classList.add("veo_veo");
                                    labelRadio. classList.add("veo_veo");
                                */
                //circulo.innerHTML = `El area del ${e.target.value}  es de  ${base * altura} tiene un radio de ${radio}` ;


            break;
        case (e.target.value === "RECTÁNGULO"):
            circulo.    classList.remove("veo_veo");
            triangulo.  classList.remove("veo_veo");
            radio. classList.remove("veo_veo");
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
                            let base              =      inputBase.     value;
                            let altura            =      inputAltura.   value;
                            let radio             =      inputRadius.   value;
                            let figuraGeometrica  =      inputList.     value;
                             
                            
                            circle_txt.innerHTML =   `Área = ${Areas(figuraGeometrica, base, altura,radio)}`;
                            square_txt.innerHTML =   `Área = ${Areas(figuraGeometrica, base, altura,radio)}`;
                            triangle_txt.innerHTML =   `Área = ${Areas(figuraGeometrica, base, altura,radio)}`;
                        
                            }
                                );