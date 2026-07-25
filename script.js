//your code here
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setData(){
	const now = new Date()

	const seconds = now.getSeconds();
	const secondsDegree = ((seconds/60)*360)+90;
	secondHand.style.transform = `rotate(${secondsDegree}deg)`;

	const minutes = now.getMinutes();
	const minsDegree = ((minutes/60)*360)+ ((seconds / 60) * 6) + 90;
	minsHand.style.transform = `rotate(${minsDegree}deg)`;

	const hours = now.getHours();
	const hoursDegree = ((hours/12)*360) + ((minutes/60)*30)+90;
	hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}
setInterval(setData,1000)
setData()