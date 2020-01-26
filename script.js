

$(document).ready(function() {
    let tags = [],
        set1a = [],
        set1b = [],
        set1c = [];

    let affichage = "pressure"; // as opposed to pressure

    // Document.getElementById("toggle");
    
    $.ajax({
        url : 'curl.php',
        type: "GET",
        data: {"subject" : '517d8e98-3d63-11ea-b585-000d3af3ac45'},
        success: function(result) { 
            let rawInfos = getArray(result),
                neatInfos = neatify(rawInfos);
            //console.log(neatInfos.bloodPressure);
            //console.log(neatInfos.heartRate);

            for (var i = 0; i < 26; i++) {
                tags.push(i);
                set1a.push(Object.values(neatInfos.heartRate[i])[0]);
                set1b.push(Object.values(neatInfos.bloodPressure[i])[0][0]);
                set1c.push(Object.values(neatInfos.bloodPressure[i])[0][1]);
            }
        },

        error: function(jqxhr, status, exception) {
            console.log(exception);
        }

        /*url : 'curl2.php',
        success: function(result) { 
            let rawInfos = getArray(result),
                neatInfos = neatify(rawInfos);
            //console.log(neatInfos.bloodPressure);
            //console.log(neatInfos.heartRate);

            for (var i = 0; i < 26; i++) {
                tags.push(i);
                set4.push(Object.values(neatInfos.heartRate[i])[0]);
                set5.push(Object.values(neatInfos.bloodPressure[i])[0][0]);
                set6.push(Object.values(neatInfos.bloodPressure[i])[0][1]);
            }
        },

        error: function(jqxhr, status, exception) {
            console.log(exception);
        }*/

    });
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tags,
            datasets: [{
                label: 'BPM',
                lineTension: 0,
                fill: true,
                borderColor: 'rgba(49, 112, 142, 1)',
                data: set1a,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tags,
            datasets: [{
                label: '',
                lineTension: 0,
                fill: false,
                borderColor: 'rgba(49, 112, 142, 1)',
                data: set1b,
                borderWidth: 1
            }, {
                label: '',
                lineTension: 0,
                fill: true,
                borderColor: 'rgba(49, 112, 142, 1)',
                data: set1c,
                borderWidth: 1
            }    
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
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


function valueChanged()
{
    if($('.check-toggle1').is(":checked"))
        $("#myChart").hide();
    else
        $("#myChart").show();
}



/////////////////////
//everything below this line is amazing
//-ly immoral 
////////////////////
