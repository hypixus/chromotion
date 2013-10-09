$(function(){
    event.preventDefault();
    $( "#sendStatus" ).click(function() {
        var $form = $('#statusUpdate');
        var serializedData = $form.serialize();
        $.ajax({
            url: "http://www.panthersweat.com/dash/updateStatus.php",
            type: "post",
            data: serializedData,
            success: function(){
                console.log("success");
            },
            error:function(){
                console.log("failure");
            }
        });
    });
});
