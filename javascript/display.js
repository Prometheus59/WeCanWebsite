document.getElementById('auto').addEventListener("click", function() {
    var all = document.querySelectorAll(".display");
    var disp = document.getElementById('car').style.display;

    // Clear all descriptions
    all.forEach(function(elem) {
        elem.style.display = 'none';
    });
    document.getElementById('car').style.display='block';
});

document.getElementById('home').addEventListener("click", function() {
    var all = document.querySelectorAll(".display");
    var disp = document.getElementById('house').style.display;

    // Clear all descriptions
    all.forEach(function(elem) {
        elem.style.display = 'none';
    });
    document.getElementById('house').style.display='block';
});

document.getElementById('comm').addEventListener("click", function() {
    var all = document.querySelectorAll(".display");
    var disp = document.getElementById('stuff').style.display;

    // Clear all descriptions
    all.forEach(function(elem) {
        elem.style.display = 'none';
    });
    document.getElementById('stuff').style.display='block';
});