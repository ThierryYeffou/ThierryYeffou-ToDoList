$(document).ready(function() {
    // recupération du nombre de checkbox
    var count = 0;
    var checked = 0;
    function countBoxes() { 
        count = $("input[type='checkbox']").length;
        console.log(count);
    }
    
    countBoxes();
    $(":checkbox").click(countBoxes);
    
    // compter les checkbox cochées
    
    function countChecked() {
        checked = $("input:checked").length;

        // Calcul du pourcentage d'avancée en fonction des cases cochées
        
        var percentage = parseInt(((checked / count) * 100),10);
        
        $(".progressbar-bar").progressbar({
                value: percentage
        });

        if (percentage == 100) {
            $(".progressbar-label").text("complétude 100%");
            alert(" Félicitations !");
        }

        else {
            $(".progressbar-label").text(percentage + "%");
        }
        // Reinitialisation des checkboxs et du pourcentage d'avancée des tâches
        $(':button').click(function(){
            var percentage = 0;
            $(".progressbar-bar").progressbar({
                value: percentage
            });
            $("input[type='checkbox']").attr("checked",false);
            $(".progressbar-label").text(percentage + "%");
        
        });
    }
    
    countChecked();
    $(":checkbox").click(countChecked);

});

  