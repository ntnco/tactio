$(document).ready(function()
{
    $('#headingOne').click(function(){
        $.ajax({
            url : 'https://sandbox030.tactiorpm7000.com/tactio_clinical_restful_api.php/1.1.5/Observation?subject=517d8e98-3d63-11ea-b585-000d3af3ac45',
            type : "GET",
            dataType:'jsonp',
            beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer 5934c4001fc23206f90fec5b8a6f5c7deb4a9833"); 
            },
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


let patients = {
    "11": [
        {
            "hr": 136,  
            "tension": [81, 121],
            "date": "2019-01-25"
        },
        {
            "hr": 129, 
            "tension": [99, 130],
            "date": "2019-01-20"
        },
        {
            "hr": 114, 
            "tension": [95, 130],
            "date": "2019-01-21"
        }
    ],
    "12": "...",
    "13": "...",
    "14": "...",
    "15": "...",
    "16": "...",
    "17": "...",
    "18": "...",
    "19": "...",
    "20": "...",
}
