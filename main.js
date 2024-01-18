// let playBtn = document.querySelector(".play");
// let releoadBtn = document.querySelector(".reload");
// let video = document.querySelector("video");

// function playVideo() {
// 	if (this.getAttribute("src") == "play.png") {
// 		video.play();
// 		this.setAttribute("src", "pause.png");
// 	} else {
// 		video.pause();
// 		this.setAttribute("src", "play.png");
// 	}
// }
// function reloadVideo() {
// 	video.load();
// 	playBtn.setAttribute("src", "play.png");
// }

// playBtn.addEventListener("click", playVideo);
// replayBtn.addEventListener("click", reloadVideo);

// (function () {
// 	let videoPlayer = {
// 		playBtn: document.querySelector(".play"),
// 		reloadBtn: document.querySelector(".reload"),
// 		video: document.querySelector("video"),

// 		playVideo: function () {
// 			if (this.getAttribute("src") == "play.png") {
// 				videoPlayer.video.play();
// 				this.setAttribute("src", "pause.png");
// 			} else {
// 				videoPlayer.video.pause();
// 				this.setAttribute("src", "play.png");
// 			}
// 		},
// 		reloadVideo: function () {
// 			videoPlayer.video.load();
// 			videoPlayer.playBtn.setAttribute("src", "play.png");
// 		},
// 		init: function () {
// 			videoPlayer.playBtn.addEventListener("click", videoPlayer.playVideo);
// 			videoPlayer.reloadBtn.addEventListener("click", videoPlayer.reloadVideo);
// 		},
// 	};
// 	videoPlayer.init();
// })();

(function () {
	function VideoPlayer(id) {
		this.container = document.querySelector("#" + id);
		this.playBtn = this.container.querySelector(".play");
		this.reloadBtn = this.container.querySelector(".reload");
		this.video = this.container.querySelector("video");
		this.init = function () {
			this.playBtn.addEventListener("click", this.playVideo.bind(this));
			this.reloadBtn.addEventListener("click", this.reloadVideo.bind(this));
		};
		this.reloadVideo = function () {
			this.video.load();
			this.playBtn.setAttribute("src", "play.png");
		};
		this.playVideo = function () {
			if (this.playBtn.getAttribute("src") == "play.png") {
				this.video.play();
				this.playBtn.setAttribute("src", "pause.png");
			} else {
				this.video.pause();
				this.playBtn.setAttribute("src", "play.png");
			}
		};
	}
	let vp = new VideoPlayer("one").init();
	let vp2 = new VideoPlayer("two").init();
})();
