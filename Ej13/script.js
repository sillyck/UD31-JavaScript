window.onload = function(){
    for (var p of document.getElementsByTagName("p")) {
        p.addEventListener("click", function(){
            var then = this; 
            then.innerHTML = "Primer parrafo";
            setTimeout(function() {
                then.innerHTML = "";
            }, 2000);
        });
    }

    for (var p of document.getElementsByTagName("table")[1].getElementsByTagName("p")) {

        p.addEventListener("click", function(){
            var then = this; 
            then.innerHTML = "Segundo parrafo en la tabla2";
            setTimeout(function() {
                then.innerHTML = "";
            }, 2000);
        });
    }
};