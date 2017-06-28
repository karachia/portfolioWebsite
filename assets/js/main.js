/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


var bio = {
	"name": "Sina Karachaini",
	"role": "Software Engineer and Composer",
	"contacts": {
		"mobile": "(333) 777 - 9999",
		"email": "myEmail@gmail.com",
		"address": "Los Angeles, CA"
	},

	"welcomeMessage": "Hi! Welcome to my portfolio website :)",
	"bioPic": "images/fry.jpg",
	"skills": ["C/C++", "JS", "HTML", "CSS"]
};

var education = {
	"schools": [{
			"name": "Irvine Valley College",
			"location": "Irvine, CA",
			"degree": "Associate degree",
			"major": "Computer Science, Music Composition",
			"dates:": "2013 - 2016",
			"url": "http://www.ivc.edu"
		}, {
			"name": "University of Southern California",
			"location": "Los Angeles, CA",
			"degree": "Bachelors",
			"major": "Computer Science, Music Composition",
			"dates:": "2016 - 2020",
			"url": "http://www.usc.edu"
		}, {
			"name": "Shahid Ejei High School",
			"location": "Esfahan, Iran",
			"degree": "Diploma",
			"major": "Physics and Mathematics",
			"dates:": "2010 - 2013",
			"url": "None"
		}


	]
};

var work = {
	"jobs": [{
			"employer": "USC ITS",
			"title": "Windows Software Engineer",
			"location": "Los Angeles, CA",
			"dates": "2017 - present",
			"description": "I worked on repackaging and modifying software for installationa and updating the software on lab and library computers on campus. I used InstallShield, JavaScript and other repackaging tools."
		},

		{
			"employer": "IVC Writing Center",
			"title": "Student Aide",
			"location": "Irvine, CA",
			"dates": "2015 - 2016",
			"description": "I answered students' queries, entered data, maitained the center, and made flyers and announcements."
		}
	]
}


var projects = {
	"projects": [{
		"title": "U.S. Department of Energy Solar Decathlon",
		"dates": "Spring 2017",
		"description": "Created a platform for communication between pilots and traffic controllers in direct cooperation with LAX to improve runway safety.",
		//an array with URL strings for project imgaes
		"images": ["images/LOGO.png"]
	}, {
		"title": "FAA Airport Cooperative Research Competition",
		"dates": "Sept. 2014 – Sept. 2015",
		"description": "Designed the lighting system and architecture of a net zero sustainable house.",
		//an array with URL strings for project imgaes
		"images": ["images/House.jpg"]
	}]
}



//we could also declare this out side of the object as the following:
/*projects.display = function(){....} 
or just inside the object itself:
	"display" : function(){ ....}
*/

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", "Sina Karachaini");
	var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);


	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(index) {
		var formattedSkill = HTMLskills.replace("%data%", index);
		$("#skills").append(formattedSkill);
	});

};

// education.display = function() {
// 	for (school in education.schools){
// 		$("#education").append(HTMLschoolStart);
// 		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
// 		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
// 		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
// 		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
// 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
// 	}

// 	$(".education-entry:last").append(formattedName, formattedLocation, formattedDegree, formattedMajor, formattedDates);
// };



work.display = function() {
	for (job in work.jobs) {
		//create new div for work experience
		$("#work").append(HTMLworkStart);
		//Append employer and title
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

projects.display = function() {
	projects.projects.forEach(function(index) {
		//create the project dev
		$("#projects").append(HTMLprojectStart);
		//Getting the data
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", index.title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", index.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", index.description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", index.images[0]);
		//append the data
		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage)
	});
};



function inName() {
	var names = bio.name.trim().split(" ");
	console.log(name);
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
	finalName = names.join(" ");
	return finalName;
};

// $(document).click(function(loc) {
// 	x = loc.pageX;
// 	y = loc.pageY;

// 	logClicks(x, y);
// });


//display 
bio.display();
// education.display();
work.display();
projects.display();



//add the button to display the name in international format
// $("#main").append(internationalizeButton);
// $("#mapDiv").append(googleMap);