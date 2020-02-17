$(".GaugeMeter").gaugeMeter();
$(document).ready(function() {
    $("input[name$='bn']").click(function(){
      var radio_value = $(this).val();
      if (radio_value == '0') {
        $("#reserveModal").fadeIn("slow");
      } else if (radio_value == '1') {
        $("#reserveModal").fadeOut("slow");
      }
    });
    $('input[name="bn"]').change(function() {
     if($(this).is(':checked') && $(this).val() == '0') {
             $('#myModal').modal('show');
      }
    });
    $("#newBtn").on("click",function(){
      alert("button inside modal clicked");
    })
});
