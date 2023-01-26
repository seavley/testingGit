$(document).ready(function(){
    $("#click").click(function(){
        $("h1").css({"background-color": "lightblue",
            "color": "red"}).slideUp(3000).slideDown(3000);
    });
});