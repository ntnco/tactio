$(document).ready(function()
{
    $('#headingOne').click(function(){
        $.ajax({
<<<<<<< HEAD
            url : 'https://sandbox030.tactiorpm7000.com/tactio_clinical_restful_api.php/1.1.5/Observation?subject=517d8e98-3d63-11ea-b585-000d3af3ac45',
            type : "GET",
            dataType:'jsonp',
            beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer 5934c4001fc23206f90fec5b8a6f5c7deb4a9833"); 
            },
            url : 'curl.php',
>>>>>>> a606bf14951236934cdf51798c932bd41f8d6a54
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

