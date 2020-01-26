$(document).ready(function()
{
    $('#headingOne').click(function(){
        $.ajax({
            url : 'curl.php',
            success: function(result) { 
                console.log(result);
            },
            error: function(jqxhr, status, exception) {
                console.log(exception);
            }
        });
    });

    function numAverage(a) {
        var b = a.length,
            c = 0, i;
        for (i = 0; i < b; i++){
          c += Number(a[i]);
        }
        return c/b;
      }
});
