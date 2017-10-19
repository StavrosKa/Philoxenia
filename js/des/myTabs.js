
    $(".tab-control").click(function() {
        //alert($(this).attr("data-thead"))
        var id = $(this).attr("data-thead");

        switch(id) {
            case "1":
               $("#table1").removeClass("hidden").addClass("show");
               $("#table2").removeClass("show").addClass("hidden");
               $("#table3").removeClass("show").addClass("hidden");
               $("#table4").removeClass("show").addClass("hidden");
               break;
            case "2":
               $("#table1").removeClass("show").addClass("hidden");
               $("#table2").removeClass("hidden").addClass("show");
               $("#table3").removeClass("show").addClass("hidden");
               $("#table4").removeClass("show").addClass("hidden");
               break;
            case "3":
               $("#table1").removeClass("show").addClass("hidden");
               $("#table2").removeClass("show").addClass("hidden");
               $("#table3").removeClass("hidden").addClass("show");
               $("#table4").removeClass("show").addClass("hidden");
               break;
            case "4":
               $("#table1").removeClass("show").addClass("hidden");
               $("#table2").removeClass("show").addClass("hidden");
               $("#table3").removeClass("show").addClass("hidden");
               $("#table4").removeClass("hidden").addClass("show");
               break;
        }
    });