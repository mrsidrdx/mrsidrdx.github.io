function decide()
{
uname = document.getElementById("gname").value;
uname = uname.toLowerCase(); 
	if (uname.indexOf("as") !=-1) {
    document.getElementById("hero").innerHTML = "Thor";
}
	else if(uname.indexOf("ra") !=-1) {
	document.getElementById("hero").innerHTML = "Captain America";
}
	else if(uname.indexOf("ha") !=-1) {
	document.getElementById("hero").innerHTML = "Iron Man";
}
	else if(uname.indexOf("ya") !=-1) {
	document.getElementById("hero").innerHTML = "Hulk";
}
	else if(uname.indexOf("an") !=-1) {
	document.getElementById("hero").innerHTML = "Black Widow";
}
	else if(uname.indexOf("ar") !=-1) {
	document.getElementById("hero").innerHTML = "Hawkeye";
}
	else if(uname.indexOf("ka") !=-1) {
	document.getElementById("hero").innerHTML = "Captain Marvel";
}
	else if(uname.indexOf("th") !=-1) {
	document.getElementById("hero").innerHTML = "Scarlett Witch";
}
	else if(uname.indexOf("sh") !=-1) {
	document.getElementById("hero").innerHTML = "Black Panther";
}
	else if(uname.indexOf("na") !=-1) {
	document.getElementById("hero").innerHTML = "Vision";
}
	else if(uname.indexOf("mi") !=-1) {
	document.getElementById("hero").innerHTML = "Doctor Strange";
}
	else if(uname.indexOf("ay") !=-1) {
	document.getElementById("hero").innerHTML = "Falcon";
}
	else if(uname.indexOf("z") !=-1) {
	document.getElementById("hero").innerHTML = "Spiderman";
}
	else if(uname.indexOf("vi") !=-1) {
	document.getElementById("hero").innerHTML = "War Machine";
}
	else if(uname.indexOf("in") !=-1) {
	document.getElementById("hero").innerHTML = "Winter Soldier";
}
	else if(uname.indexOf("y") !=-1) {
	document.getElementById("hero").innerHTML = "Starlord";
}	
	else if(uname.indexOf("ep") !=-1) {
	document.getElementById("hero").innerHTML = "Gamora";
}
	else if(uname.indexOf("hn") !=-1) {
	document.getElementById("hero").innerHTML = "Antman";
}
	else if(uname.indexOf("on") !=-1) {
	document.getElementById("hero").innerHTML = "Groot";
}
	else if(uname.indexOf("am") !=-1) {
	document.getElementById("hero").innerHTML = "Wasp";
}
	else if(uname.indexOf("sa") !=-1) {
	document.getElementById("hero").innerHTML = "Rocket Racoon";
}
	else
{
	document.getElementById("hero").innerHTML = "Thanos!";
}
}
