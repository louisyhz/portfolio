	document.addEventListener('DOMContentLoaded',function(){
		new Splide('#proj-slider',  {
			rewind: true,
		} ).mount();

	})
	document.addEventListener('DOMContentLoaded',function(){
		new Splide('#card0slider', {
			perPage:1,
			rewind: true,
			breakpoints:{
				640:{
					perPage:1,
				}
			}
		}).mount();
		
	})
