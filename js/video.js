var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Current location is 0")
	}
	else{
		console.log("Current location is " + video.currentTime);
	}
} 

function mute() { 
	if(video.muted){
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted");
		video.muted = false;
	}
	else{
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Muted")
		video.muted = true;
	}
}

function changeVolume() {
	var slider = document.querySelector('#volumeSlider').value;
	video.volume = slider / 100;
	document.querySelector('#volume').innerHTML = slider + "%"
	console.log("Volume is " + slider);
}

function gray() { 
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}

// .play-button {
// 	border-radius: 4px;
// 	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
//   }
//   .play-button-accent {
// 	color: white;
// 	background: #FF5E45;
//   }