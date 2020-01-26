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


var patients = {
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
    ];
    "12": "...";
    "13": "...";
    "14": "...";
    "15": "...";
    "16": "...";
    "17": "...";
    "18": "...";
    "19": "...";
    "20": "...";
}
