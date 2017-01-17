var nowTime = new Date()
var nowHours = nowTime.getHours()
var nowMinutes = nowTime.getMinutes()
var nowSeconds = nowTime.getSeconds()
var secondHandAngle = 6 * nowSeconds + 180
var hourHandAngle = ((Math.abs(12-nowHours))*(360/12)) + 180 + (nowMinutes/2)
var minuteHandAngle = 6 * nowMinutes + 180


window.setInterval(function(){
	if (nowSeconds === 60 ) {
		nowMinutes += 1
		nowSeconds = 0
	} 
	if (nowMinutes === 60) {
		nowHours += 1
		nowMinutes = 0
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
		document.getElementById("displayTime").innerHTML = "<h1>" + Math.abs(12-nowHours) + " : " + nowMinutes + " AM</h1>"
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