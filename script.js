$(document).ready(function()
{
    $('#headingOne').click(function(){
        $.ajax({
            url : 'https://sandbox030.tactiorpm7000.com/tactio_clinical_restful_api.php/1.1.5/Observation?subject=517d8e98-3d63-11ea-b585-000d3af3ac45',
            type : 'GET',
            dataType:'jsonp',
            crossDomain: true,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 5934c4001fc23206f90fec5b8a6f5c7deb4a9833"); 
             },
            success: function(result) { 
                alert('Successfully called');
            },
            error: function(jqxhr, status, exception) {
                console.log(exception);
            }
        });
    });
});