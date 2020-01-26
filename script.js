

$(document).ready(function() {

    

    $.ajax({
        url : 'curl.php',
        success: function(result) { 
            let rawInfos = getArray(result);
            let neatInfos = neatify(rawInfos);
            console.log(neatInfos.bloodPressure);
            console.log(neatInfos.heartRate);
        },
        error: function(jqxhr, status, exception) {
            console.log(exception);
        }
    });

});


function neatify(raw) {
    let resource,
        mesureTension = {}, // {"date": [int, int]}
        mesureBPM = {}, //  {"date": int } 
        tensions = [],
        obsBloodPressure = [],
        obsBPM = [],
        date, // String
        systolic, // int
        diastolic,
        heartRate; // int
    //let heartRates = [];
    for (var i = 0; i < raw.length; i++) {
        resource = raw[i].resource;
        date = resource.effectiveDateTime;
        if (resource.code.coding[0].display == "Blood Pressure") {
            systolic = resource.component[0].valueQuantity.value;
            diastolic = resource.component[1].valueQuantity.value;
            mesureTension = {};
            mesureTension[date] = [ systolic, diastolic ];
            obsBloodPressure.push(mesureTension);
        } else if (resource.code.coding[0].display == "Heart rate") {
            heartRate = resource.valueQuantity.value;
            mesureBPM = {};
            mesureBPM[date] = heartRate;
            obsBPM.push(mesureBPM);
        }
    }

    let observations = {
        bloodPressure: obsBloodPressure,
        heartRate: obsBPM
    }

    return observations;

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
