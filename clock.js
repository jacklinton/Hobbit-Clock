var nowTime = new Date()
var nowHours = nowTime.getHours()
var nowMinutes = nowTime.getMinutes()
var nowSeconds = nowTime.getSeconds()
var secondHandAngle = 6 * nowSeconds + 180
var hourHandAngle = checkTheHour()
var minuteHandAngle = 6 * nowMinutes + 180


function checkTheHour() {
	if (nowHours > 12) {
		return(((Math.abs(12-nowHours))*(360/12)) + 180 + (nowMinutes/2))
	} else {
		return(((nowHours)*(360/12)) + 180 + (nowMinutes/2))}
}



window.setInterval(function(){
	if (nowSeconds === 60 ) {
		nowMinutes += 1
		nowSeconds = 0
	} 
	if (nowMinutes === 60) {
		nowHours += 1
		nowMinutes = 0
		displayGreeting ()
	}
	if (nowHours === 24) {
		nowHours = 0
	}
	if (nowHours > 12 && nowMinutes >= 10) {
		document.getElementById("displayTime").innerHTML = "<h1>" + Math.abs(12-nowHours) + " : " + nowMinutes + " PM</h1>"
	}
	else if (nowHours > 12 && nowMinutes < 10){
		document.getElementById("displayTime").innerHTML = "<h1>" + Math.abs(12-nowHours) + " : 0" + nowMinutes + " PM</h1>"
	}
	else if (nowHours < 12 && nowMinutes < 10){
		document.getElementById("displayTime").innerHTML = "<h1>" + nowHours + " : 0" + nowMinutes + " AM</h1>"
	}
	else {
		document.getElementById("displayTime").innerHTML = "<h1>" + nowHours + " : " + nowMinutes + " AM</h1>"
	}
	nowSeconds += 1

	}, 1000)


function moveTheHands() {
	var sha = secondHandAngle
	var aha = hourHandAngle
	var mha = minuteHandAngle

	var secondHand = document.getElementById("secondHand")
	secondHand.setAttribute("style", ("transform: rotate(" + sha + "deg);"))

	var hourHand = document.getElementById("hourHand")
	hourHand.setAttribute("style", ("transform: rotate(" + aha + "deg);"))

	var minuteHand = document.getElementById("minuteHand")
	minuteHand.setAttribute("style", ("transform: rotate(" + mha + "deg);"))


	window.setInterval(function(){
		secondHand.setAttribute("style", ("transform: rotate(" + sha + "deg);"))	
		sha += 6
	}, 1000)

	window.setInterval(function(){
		hourHand.setAttribute("style", ("transform: rotate(" + aha + "deg);"))	
		aha += 1
	}, (120000))

	window.setInterval(function(){
		minuteHand.setAttribute("style", ("transform: rotate(" + mha + "deg);"))	
		mha += 1
	}, 10000)
}

function displayGreeting() {
	if (nowHours === 7||nowHours === 8) {
		document.getElementById("greeting").innerHTML = "<h1>Breakfast!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');") 
	}
	else if (nowHours === 9||nowHours === 10) {
		document.getElementById("greeting").innerHTML = "<h1>Second Breakfast!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	}
	else if (nowHours === 11||nowHours === 12) {
		document.getElementById("greeting").innerHTML = "<h1>Elevenses!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	}
	else if (nowHours === 13||nowHours === 14||nowHours === 15) {
		document.getElementById("greeting").innerHTML = "<h1>Luncheon!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	}
	else if (nowHours === 16|| nowHours === 17) {
		document.getElementById("greeting").innerHTML = "<h1>Afternoon Tea!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	}
	else if (nowHours === 18||nowHours === 19) {
		document.getElementById("greeting").innerHTML = "<h1>Dinner!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	}
	else if (nowHours === 20) {
		document.getElementById("greeting").innerHTML = "<h1>Supper!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('" + getRandomInt(1,9) +".jpg');")
	} 
	else {
		document.getElementById("greeting").innerHTML = "<h1>Sleep!</h1>"
		document.getElementById("mainBody").setAttribute("style", "background-image: url('sleep.jpg');")
	}
	
}
function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}
