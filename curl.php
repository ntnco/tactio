<?php

$subject = $_GET['subject'];
$url = 'https://sandbox030.tactiorpm7000.com/tactio_clinical_restful_api.php/1.1.5/Observation?subject='.$subject;

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/x-www-form-urlencoded",
    "Authorization: Bearer 5934c4001fc23206f90fec5b8a6f5c7deb4a9833"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;