halkaBox.options({
	hideButtons: true, // hide buttons on touch devices (true || false)
	animation: "fade", // animation type on next/prev ("slide" || "fade")
	theme: "dark", // lightbox overlay theme ("light" || "dark")
	preload: 2, // number of images to preload
	swipeDownToClose: false, // swipe down to close (true || false)
	swipeUpToClose: false, // swipe up to close (true || false)
	nextPrevOnWheel: true, // goto next/prev image on wheel (true || false)
	isZoomable: true // ability to zoom image (true || false)
});

halkaBox.run("gallery1");
halkaBox.run("gallery2");
