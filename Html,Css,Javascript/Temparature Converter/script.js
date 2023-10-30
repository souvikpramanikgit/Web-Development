const btn=document.getElementById("convert");
btn.addEventListener("click",()=>{
    
    let val = Number(document.getElementById("input-value").value);
    
    let input = document.getElementById("input").value;
    let output = document.getElementById("output").value;

    var result;

    if (input === "celcius" && output === "fahrenheit") {
        result = val + " °C = " + ((val * (9 / 5)) + 32) + " °F";
    }
        
    else if (input === "celcius" && output === "kelvin") {
        result = val + " °C = " + (val + 273.15) + " k";
    }
        
    else if (input === "fahrenheit" && output === "celcius") {
        result = val + " °F = " + ((val - 32) * (5/9)) + " °C";
    }
        
    else if (input === "fahrenheit" && output === "kelvin") {
        result = val + " °F = " + ((val - 32) * (5/9) + 273.15) + " k";
    }
        
    else if (input === "kelvin" && output === "celcius") {
        result = val + " k = " + (val - 273.15) + " °C";
    }
        
    else if (input === "kelvin" && output === "fahrenheit") {
        result = val + " k = " + (((val - 273.15) * (9/5)) + 32) + " °F";
    }
        
    else{
        result = "|| Same unit ||";
    }

    document.getElementById("result").value=result;
})
