function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
}

  
// setInterval(function(){ alert("intervale"); }, 3);
  }

  function ApparitionProgressive(id)
  {
      var el = document.getElementById(id);
        var style = window.getComputedStyle(el).getPropertyValue('font-size');
        var fontSize1 = parseFloat(style); 
        el.style.fontSize=3+'px';
        el.style.display="block";
        intervalId= setInterval(function(){
                                            var fontSize=parseFloat(window.getComputedStyle(el).getPropertyValue('font-size'));
                                            el.style.fontSize=(fontSize+0.5)+'px';       
                                            if(fontSize===fontSize1-1)
                                              {
                                                clearInterval(intervalId);
                                              }             
                                          },200);     
  } 
  

  function myFunction2(id1,classe) {
    // var x1 = document.getElementById(id1);
     var x2=document.getElementsByClassName(classe);
       
       for(var i=0; i<x2.length; i++)
        {x2[i].style.display="none";
            if(x2[i].getAttribute('id')===id1 )
                {
                    //x2[i].style.display = "block";
                    ApparitionProgressive(id1);
                } 
        }
    //x1.style.display = "block";
  }

  function tooltip(id)
  {
    h=document.getElementById(id);
    var competances={ "BD" : 'SQL Server, PostgreSQL, MySQL, Mongo DB',
                     "WEB" : 'html/css/javascript , Laravel, Asp.net,Spring Boot,Angular',
                      "LP":"C/C++, Java, Python, php ,Matlab",
                      "CPT":"UML,Merise",
                      "BI":"MSBI(SSIS,SSAS,SSRS)",
                      "AI":"Machine Learning",
                      "SCV":"git"
                    };
                    
    var p=document.createElement('span');
    p.textContent=competances[id];
    p.setAttribute('id', "tooltip");
    p.style.backgroundColor= "darkgray";
    p.style.color="cyan";
    p.style.position="relative";
     document.addEventListener('mousemove', function(event)
  {
    var mousex = event.clientX; // Gets Mouse X
    var mousey = event.clientY; // Gets Mouse Y
    p.style.left=mousex+"px";
  });
    
    h.insertAdjacentElement("afterend", p);
    //h.appendChild(p);
  }
  //p.style.backgroundSize=window.getComputedStyle(p).getPropertyValue('width');
    // p.style.padding="10px";
    //p.style.whiteSpace="normale";
    //b.prepend(newP);
    //p.style.display="inlineblock" ;
    //p.style.top=mousey+"px";
    
  function DeleteTooltip() 
  {
    var span=document.getElementById('tooltip');
    span.remove();
  }
  

