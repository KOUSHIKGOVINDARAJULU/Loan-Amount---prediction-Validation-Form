const  form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
});

function error_msg(element,message,parentid){
    document.getElementById(element).style.visibility = "visible"
    document.getElementById(element).innerHTML = message;
    document.getElementById(element).style.color = "red";
    document.getElementById(parentid).style.borderColor = "red"
}
function success_msg(element,parentid) {
    document.getElementById(element).innerHTML="";
    document.getElementById(element).style.visibility="visible";
    document.getElementById(parentid).style.borderColor = "green"

}

var amountval = false;
var genderval = false;
var dependeciesval = false;
var maratialval = false;
var educationval = false;
var Propertyval = false;
var incomeval = false;
var appincomeval = false;
var tearmval = false;
var historyval = false;

//loan amount validation
$("#amount").on("change",()=>{
    var amt = document.getElementById("amount").value.trim();
    var letter = /^[0-9\d]{5,8}$/;
    if(amt != "" && letter.test(amt)){
        amountval = true;
        success_msg("amt","amount")
    }
    else{
        
        error_msg("amt","Invalid","amount");
    }
})
// gender validation
$("#gender_val").on("change",()=>{
    var Gender = document.getElementById("gender_val").value.trim();
    if(Gender == "male" || Gender == "female"){
        genderval = true;
        success_msg("gen_msg","gender_val");
    } 
    else{
        error_msg("gen_msg","Please select the option","gender_val");
    }
})

//dependecies validation
$("#dependecies").on("change",()=>{
    var depen = document.getElementById("dependecies").value.trim();
    if(depen == "1" || depen == "2" || depen == "3"){
        dependeciesval = true;
        success_msg("depen_msg","dependecies");
    } 
    else{
        error_msg("depen_msg","Please select the option","dependecies");
    }
})

// maratial validation
$("#maratial").on("change",()=>{
    var Maratial = document.getElementById("maratial").value.trim();
    if(Maratial == "married" || Maratial == "not married"){
        maratialval = true;
        success_msg("maratial_msg","maratial");
    } 
    else{
        error_msg("maratial_msg","Please select the option","maratial");
    }
})

//  education validation
$("#education").on("change",()=>{
    var Education = document.getElementById("education").value.trim();
    if(Education == "graduate" || Education == "not graduate"){
        educationval = true;
        success_msg("edu_msg","education");
    } 
    else{
        error_msg("edu_msg","Please select the option","education");
    }
})


//  Property validation
$("#Property").on("change",()=>{
    var property = document.getElementById("Property").value.trim();
    if(property == "urban" || property == "semi_urban" || property == "rurel"){
        Propertyval = true;
        success_msg("pro_msg","Property");
    } 
    else{
        error_msg("pro_msg","Please select the option","Property");
    }
})

//income amount validation
$("#income").on("change",()=>{
    var Income = document.getElementById("income").value.trim();
    var number = /^[0-9\d]{1,8}$/;
    if(Income != "" && number.test(Income)){
        incomeval = true;
        success_msg("income_msg","income")
    }
    else{
        
        error_msg("income_msg","Invalid","income");
    }
})


//app_income amount validation
$("#app_income").on("change",()=>{
    var app_Income = document.getElementById("app_income").value.trim();
    var number = /^[0-9\d]{5,8}$/;
    if(amt != "" && number.test(app_Income)){
        appincomeval = true;
        success_msg("app_msg","app_income")
    }
    else{
        
        error_msg("app_msg","Invalid","app_income");
    }
})

//  term validation
$("#term").on("change",()=>{
    var Term = document.getElementById("term").value.trim();
    if(Term == "120" || Term== "180"|| Term== "360" || Term== "480"){
        tearmval = true;
        success_msg("term_msg","term");
    } 
    else{
        error_msg("term_msg","Please select the option","term");
    }
})


//  history validation
$("#history").on("change",()=>{
    var History = document.getElementById("history").value.trim();
    if(History == "0" || History == "01"){
        historyval = true;
        success_msg("history_msg","history");
    } 
    else{
        error_msg("history_msg","Please select the option","history");
    }
})





$("#form").on("submit",function(event){
    if(amountval == true && genderval == true && dependeciesval == true && maratialval == true && educationval == true && incomeval == true && appincomeval == true && tearmval == true && historyval == true){
        document.getElementById("msg").style.visibility = "hidden"
        $.ajax({
            type: "GET",
            url: ".\abot.html",
            success: function(response) {
                if(response == true){   
                    alert("success")
                     window.location.replace('.\abot.html');
                }     
            },
          });
    }
    else{
         document.getElementById("msg").innerHTML = "Please Check All the Fields are Filled or Not";
         document.getElementById("msg").style.visibility = "visible";
     }
});