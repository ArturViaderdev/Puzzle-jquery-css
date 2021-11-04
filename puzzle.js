var fitxes_inici = {
        fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img5"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img4"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_ara ={
    fitxa1:"",
    fitxa2:"",
    fitxa3:"",
    fitxa4:"",
    fitxa5:"",
    fitxa6:"",
    fitxa7:"",
    fitxa8:"",
    fitxa9:""
};

var fitxes_final = {
        fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};


var estat=0;

var antiga;
var llocantiga;

var x;
x=$(document);
x.ready(inicializarEventos);

$(document).ready(function () {
    carregaimatges();
});

function carregaimatges()
{
  /* $("#im1").attr('src',fitxes_inici['fitxa1']+".jpg");
    $("#im2").attr('src',fitxes_inici['fitxa2']+".jpg");
    $("#im3").attr('src',fitxes_inici['fitxa3']+".jpg");
    $("#im4").attr('src',fitxes_inici['fitxa4']+".jpg");
    $("#im5").attr('src',fitxes_inici['fitxa5']+".jpg");
    $("#im6").attr('src',fitxes_inici['fitxa6']+".jpg");
    $("#im7").attr('src',fitxes_inici['fitxa7']+".jpg");
    $("#im8").attr('src',fitxes_inici['fitxa8']+".jpg");
    $("#im9").attr('src',fitxes_inici['fitxa9']+".jpg");*/
    for(var cont=1;cont<10;cont++)
    {
          $("#im"+cont).attr('src',fitxes_inici['fitxa'+cont]+".jpg");  
    }
}

function inicializarEventos()
{
  var x;
  x=$("#fitxes_iguals img");
  x.click(pulsafitxa);
    
  x=$("#taulell div");
  x.click(pulsataulell);
      
  x=$("#check");
  x.click(pulsacheck); 
}

function pulsacheck()
{
    /*$.each(fitxes_ara),function(index, value)
    {
        alert(index);
        alert(value);
        
    }*/
   
    var totesbe=1;

    $( ".fitxa" ).each(function( index ) {
        var elid = $(this).attr("id");
        //alert(fitxes_ara[elid]);
        //alert(fitxes_final[elid]);
        if(fitxes_ara[elid] == fitxes_final[elid])
        {
           $(this).css('border-color','green');
        }
        else
        {
           $(this).css('border-color','red');
           totesbe = 0;
        }
    });
    
    if(totesbe==1)
    {
        var nuevaImg= $("<img  src='enhorabuena.png' />");    
        $('#fitxes_iguals').prepend(nuevaImg);
    }
    
}

function pulsataulell()
{
    var canvia = false;
    var fes=false;
    if(estat==0)
    {
        if(fitxes_ara[$(this).attr("id")].length>0)    
        { 
            var img = ponextension(fitxes_ara[$(this).attr("id")]);
            $("#seleccionada").attr('src',img);
            estat=1;
            antiga= $(this).attr("id");
            llocantiga=1;    
        }  
    }
    else
    {
            if(fitxes_ara[$(this).attr("id")].length>0 && llocantiga==1)    
            {
                    var temp = fitxes_ara[$(this).attr("id")];
                    canvia=true;
                    fes = true;
            }
            else if( fitxes_ara[$(this).attr("id")].length==0 )
            {
                    fes= true;
            }
        
            if(fes)
            {
               $(this).css("background-image","url("+$("#seleccionada").attr('src')+")");
                fitxes_ara[$(this).attr("id")] = quitaextension($("#seleccionada").attr('src'));
                $("#seleccionada").attr('src','');
                
                var vella = "#" + antiga;
                if(llocantiga==0)
                {
                    $(vella).remove();          
                }
                else
                {
                    fitxes_ara[antiga]=""; 
                    $(vella).css("background-image","");
                }   
                estat =0;
            }
            if(canvia)
            {
                fitxes_ara[antiga]=temp;
                $(vella).css("background-image","url(" + ponextension(temp) +")");
                canvia = false;
            }     
    }
    
    /*
    
    
    if(fitxes_ara[$(this).attr("id")].length>0)
    {
        if(estat==0)
        {
            var img = ponextension(fitxes_ara[$(this).attr("id")]);
            $("#seleccionada").attr('src',img);
            estat=1;
            antiga= $(this).attr("id");
            llocantiga=1;    
        }
        else
        {
            
        }
    }
    else
    {

          if(estat==1)
          {
                $(this).css("background-image","url("+$("#seleccionada").attr('src')+")");
                fitxes_ara[$(this).attr("id")] = quitaextension($("#seleccionada").attr('src'));
                $("#seleccionada").attr('src','');
                
                var vella = "#" + antiga;
                if(llocantiga==0)
                {
                    $(vella).remove();          
                }
                else
                {
                    fitxes_ara[antiga]=""; 
                    $(vella).css("background-image","");
                }   
                estat =0;     
          }
    }*/
}

function rutarelativa(bg)
{
    var cont =bg.length;
    var resultado;
    cont--;
    while(bg.charAt(cont)!="/")
    {
         resultado = bg.charAt(cont) + resultado;   
         cont--;
    }
    return resultado;
}

function pulsafitxa()
{
   $("#seleccionada").attr('src',$(this).attr('src'));
   estat=1; 
   antiga = $(this).attr('id');
   llocantiga =0;
}

function quitaextension(nombre)
{
    var res = nombre.substring(0,nombre.length-4);
    return res;  
}

function ponextension(nombre)
{
    var res = nombre + ".jpg";
    return res;
}