function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
}
  }

  function myFunction2(id1,classe) {
    // var x1 = document.getElementById(id1);
     var x2=document.getElementsByClassName(classe);
       
       for(var i=0; i<x2.length; i++)
        {x2[i].style.display="none";
            if(x2[i].getAttribute('id')===id1 )
                {
                    x2[i].style.display = "block";
                } 
        }
    //x1.style.display = "block";
    
  }

