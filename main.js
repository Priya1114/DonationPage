
function giveNowFunction() {
    
    var value = (document.getElementById("body-input").value.slice(1) * 0.4) + 'px';
    document.getElementById("coloredDiv").style.width = value;
}


function saveFunction() {
    alert("Saved!")
}

