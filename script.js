


document.getElementById("id_1").style.visibility = "hidden";
document.getElementById("id_2").style.visibility = "hidden";
document.getElementById("id_3").style.visibility = "hidden";
document.getElementById("id_4").style.visibility = "hidden";
document.getElementById("id_5").style.visibility = "hidden";

function validation(){
    var pass_id=document.getElementById("Pass-id");
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("pass");
    var address=document.getElementById("address");
    var contact=document.getElementById("contact");
    var count=0;
    if(name.value==""){
        count=1;
        document.getElementById("id_1").style.visibility = "visible";
    }
    else
        document.getElementById("id_1").style.visibility = "hidden";
    if(email.value==""){
        count=1;
        document.getElementById("id_2").style.visibility = "visible";
    }
    else
        document.getElementById("id_2").style.visibility = "hidden";
    if(password.value==""){
        count=1;
        document.getElementById("id_3").style.visibility = "visible";
    }
    else
        document.getElementById("id_3").style.visibility = "hidden";
    if(address.value==""){
        count=1;
        document.getElementById("id_4").style.visibility = "visible";
    }
    else
        document.getElementById("id_4").style.visibility = "hidden";
    if(contact.value==""){
        count=1;
        document.getElementById("id_5").style.visibility = "visible";
    }
    else
        document.getElementById("id_5").style.visibility = "hidden";
    
    if(count==0){
        alert("Passenger Registration Successful");
        return true;
    }
    else
        return false;
}