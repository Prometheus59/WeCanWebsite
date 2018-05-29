document.getElementById('auto').addEventListener("click", function() {
    var disp = document.getElementById('display').style.display;
    if (disp === 'none'){
        document.getElementById('display').style.display = 'inherit ';
    } else {
        document.getElementById('display').style.display = 'none';
    }
});