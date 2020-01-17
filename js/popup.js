$().ready(function() {
    $("#timeDiv").hide();
    $("#startButton").click(function() {
        let time = $("#timeInput").val();
        console.log(time);
        $("#startDiv").hide();
        $("#timeDiv").show();
        $("#time").text(time);
    })
});