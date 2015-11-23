$(function(){
	//compiling template
	var source = $('#profiles').html();
	var template = Handlebars.compile(source);
	var results = $('#results');
	//making ajax call to data.json
	$.ajax({
		url: "/data/eta.json"

	//once this file is .done, run the following function
	}).done(function(array) {
		//create html of 'context' from template
		var html = template({profiles: array});
		results.append(html);

		//Set the first person's profile to visible
		$('div.person').first().addClass('currentProfile');
	});

	//When clicking the right button...
	$('.rightButton').on('click', function() {
		//set a variable for the current profile and the next profile.
		var currentProfile = $('.current');
		var nextProfile = currentProfile.next();

		//'if' statement to check if we've reached the end of
		//the person list. If so, go to beginning again.
		if(nextProfile.length === 0) {
			//QUESTION: How do I get this to animate?
			nextProfile = $('.person').first();
		}

		//QUESTION: I don't have any CSS set for '.current', yet it
		//still works... is this because it fades in? Should I be adding
		//a css display for best practice?
		currentProfile.fadeOut(400).removeClass('current');
		nextProfile.fadeIn(400).addClass('current');
	});

	//when clicking the left button...
	$('.leftButton').on('click', function() {
		//set variables for the current profile and the previous profile
		var currentProfile = $('.current');
		var prevProfile = currentProfile.prev();

		//'if' statement to check if we're going past the
		//beginning of the list. If so, go to the end of the list.
		if(prevProfile.length === 0) {

			//Same as above: how do I get this to animate?
			prevProfile = $('.person').last();
		}

		//same question as above about animation/css for '.current'
		currentProfile.fadeOut(400).removeClass('current');
		prevProfile.fadeIn(400).addClass('current');
	});
});