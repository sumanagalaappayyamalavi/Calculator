var a;
function c(val)
{
     if("mrc"==val)
     {
    	 document.getElementById("d").value=a;
     }else if(""==val){
    	 document.getElementById("d").value=val;
     } else{
	     document.getElementById("d").value=val;
	 
      }
}

function m(val){
	if("m+" == val){
		v("+")
		v(a)
		e()
		
	}
	if("m-" == val){
		a=document.getElementById("d").value = a-document.getElementById("d").value
	}
	
}
     

function v(val)
{
     document.getElementById("d").value+=val;
}
function e() 
{ 
    try 
    { 
    	a=eval(document.getElementById("d").value);
        c(a) 
        
    } 
    catch(e) 
    {
        c('Error') 
    } 
}
function myFunction() {
	var d = new Date();
	var n = d.getTime();
	document.getElementById("FromDate").value = n
	  var x = document.getElementById("FromDate").value;
	  document.getElementById("FromDate").value = x;
}