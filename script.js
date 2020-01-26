

$(document).ready(function() {
    let tags = ["Jan 4th", "Jan 11th", "Jan 18th", "Jan 25th"];
    $.ajax({
        url : 'curl.php',
        success: function(result) { 
            let rawInfos = getArray(result),
                neatInfos = neatify(rawInfos);
            //data.labels = ["tiger", "elephant", "koala"];
            console.log(neatInfos.bloodPressure);
            console.log(neatInfos.heartRate);
        },
        error: function(jqxhr, status, exception) {
            console.log(exception);
        }
    });
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: tags,
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
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
