<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <title>Wireframe to HTML</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="src/style.css">
</head>
<body>
  <div id="temperature"></div>
    <div class="container">
<div class="row">
    <div class=" col-3">
       <button class="citybutton-5" role="button">City Name</button>
    </div>
      <div class=" col-3">
       <button class="citybutton-5" role="button">City Name</button>
    </div>
      <div class=" col-3">
      <button class="citybutton-5" role="button">City Name</button>
    </div>
      <div class=" col-3">
     <button class="citybutton-5" role="button">City Name</button>
    </div>
</div>
  <div id=""></div>
<div class= "module"> 
  <div class="row">
    <div class="col-sm">
      <form id="search-form">
        <input type="text" id="search-input" placeholder="Enter city name">
        <button class="button-search" role="button-search">🔎 Search</button>
        <div id="result" class="h2"></div>
    </form>
    <div id="result"></div>
    </div>
</div>

<div class= "module"> 
  <div class="row">
      <div class="col-sm">
      <div id="current-date" class="col-sm">
          <h1>Sunday, 3 October 2023</h1>
         </div>
    <div id="current-city" class="h1">
     <h1>Temperature in Lisbon</h1>
    </div>
  </div>

    <div class= "list"> 
  <div class="row">
    <div class="col-sm">
<div id="current-temperature" class="fa-solid fa-sun">30º</i>
</div>


<div class="col-sm">
  <div class="flex-container">
      <div class="flex-item"></div>
    <div class="flex-item">Rain:1%</div>
    <div class="flex-item">Humidity:47%</div>
    <div class="flex-item">Wind:10km/h</div>
</div>
    </div>

 <div style="display: flex; margin-top: 30px;">
  <div style="flex-basis: 14.2857%;">
    <i class="fa-solid fa-arrow-left"></i></div>
  <div style="flex-basis: 14.2857%;"><h2>MON</h2><i class="fa-solid fa-cloud-sun"></i></div>
  <div style="flex-basis: 14.2857%;"><h2>TUE</h2><i class="fa-solid fa-sun"></i></div>
  <div style="flex-basis: 14.2857%;"><h2>WED</h2><i class="fa-solid fa-cloud-rain"></i></div>
  <div style="flex-basis: 14.2857%;"><h2>THU</h2><i class="fa-solid fa-cloud-sun"></i></div>
  <div style="flex-basis: 14.2857%;"><h2>FRI</h2><i class="fa-solid fa-cloud-rain"></i></div>
  <div style="flex-basis: 14.2857%;"><i class="fa-solid fa-arrow-right"></i></div>

 </div>
</div>
</div>
</body>
<script src="https://kit.fontawesome.com/6f60877881.js" crossorigin="anonymous"></script>
<script src="src/index.js"></script>
</html>