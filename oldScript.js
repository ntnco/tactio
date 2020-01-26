






$(document).ready(function() {

    

    $.ajax({
        url : 'curl.php',
        success: function(result) { 
            let rawInfos = getArray(result);
            let neatInfos = neatify(rawInfos);
            
        },
        error: function(jqxhr, status, exception) {
            console.log(exception);
        }
    });

});


function neatify(raw) {
    let resource,
        objet = {}, // sous forme {"date": [int, int]} // tension
                    // ou {"date": int } // hr
        tensions = []
        observations = [];
    //let heartRates = [];
    let date; // String

    for (var i = 0; i < raw.length; i++) {
        resource = raw[i].resource;
        if (resource.code.coding[0].display == "Blood Pressure") {
            date = resource.effectiveDateTime 
            objet = {};
            objet[date] = [5, 5];
            observations.push(objet);
        }
    }
    console.log(observations);
}

function getArray(jsonResult) {
    let json = JSON.parse(jsonResult);
    return json.entry;
}



function numAverage(a) {
    var b = a.length,
        c = 0, i;
    for (i = 0; i < b; i++){
        c += Number(a[i]);
    }
    return c/b;
}
