<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #4834DF;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #67E6DC;
  color: black;
}

.topnav a.active {
  background-color: #0ABDE3;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
<div>
  <br>
  <h1>𝓜𝔂 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸 𝓦𝓮𝓫𝓼𝓲𝓽𝓮</h1>

<h2>PROJECTS I HAVE WORKED UPON : </h2>
<br>
⦿ Avengers FanGame : It is a game made with love for Avengers Fans. In this our website will tell you your favourite SuperHero based on your name input. And it will also provide you SuperHero Teammate randomly to fight with you.
Go To <a href="https://cutt.ly/avengers-fangame" target="_blank">Avengers FanGame</a> And Enjoy Your Game 👍
</div>
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
</body>
</html>
