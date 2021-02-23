
 
  function validateAllData(pnr,date,source,destination,status,seat,meal)
  {
      var flag=true;
    if (pnr=="")  
        { 
            flag=false;  
            // Changing content and color of content 
            error1.textContent = "Please enter a PNR Number" 
            error1.style.color = "red" 
        } else
        { 
            error1.textContent = "" 
        } 
    if (date=="")  
        { 
             flag=false; 
            // Changing content and color of content 
            error2.textContent = "Please enter a Date" 
            error2.style.color = "red"
        } else
        { 
            error2.textContent = "" 
        }     
        
    if (source=="")  
        { 
            flag=false;    
            // Changing content and color of content 
            error3.textContent = "Please enter a source city" 
            error3.style.color = "red" 
        } else
        { 
            error3.textContent = "" 
        } 
    if (destination=="")  
        { 
              flag=false;
            // Changing content and color of content 
            error4.textContent = "Please enter a Destination city" 
            error4.style.color = "red" 
        } else
        { 
            error4.textContent = "" 
        }         
        
   var array1 = [pnr,date,source,destination,status.options[status.selectedIndex].text,status.options[status.selectedIndex].text,seat.options[seat.selectedIndex].text ,meal.options[meal.selectedIndex].text];
      
      
      
       if(pnr!="")
    var flag_pnr= validPNR(pnr); 
     if(date!="")
     var flag_date=check_date(date);
     if( flag && flag_date && flag_pnr)
     window.location.assign("ack.html");

  }
   
 function validPNR(check_pnr)
  {
       if(!(parseInt(check_pnr)>=1000000  && parseInt(check_pnr)<=9999999))
       {
           alert("wrong pnr");
           return false;
       }
       return true;
  }
  function check_date(testDate)
  { 
      var date_regex =/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
      
               
              
            if (!( date_regex. test(testDate))) {
            alert("wrong date");   
            return false;
            }
             
            return true;
  }