function hideNavbar() {
	var x = document.getElementById("myTopnav");
	if (x.className === "navbar") {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}

// function changeIcon(x) {
//     x.classList.toggle("change");
// }
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);


function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}



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

// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<table style="border-collapse:collapse;"><tbody><tr><td style="padding:5px;"><img src="%data%"';
// var HTMLalt = ' alt="%data%"></td>'
// var HTMLschoolName = '<table style="border-collapse:collapse;"><tbody><tr><td style="padding:5px;">%data%</td>';
// var HTMLschoolLocation = '<td style="padding:5px;">%data%</td></tr>';
// var HTMLschoolDegree = '<tr><td style="padding:5px;">%data%</td>';
// var HTMLschoolDates = '<td style="padding:5px;">%data%</td></tr>';
// var HTMLinfo = '<tr><td style="padding:5px;">%data%</td>';
// var HTMLgpa = '<td style="padding:5px;">%data%</td></tr></tbody></table>';
var HTMLeducationSection = '<table style="border-collapse:collapse;"><tbody><tr><td style="padding:5px;"><img src="%data1%" alt="%data2%" height="48" width="251"></td></td><td style="padding:5px;">%data3%</td></tr><tr><td style="padding:5px;">%data4%</td><td style="padding:5px;">%data5%</td></tr><tr><td style="padding:5px;">%data6%</td><td style="padding:5px;">GPA: %data7%</td></tr></tbody></table>';


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
			//link to image of school logo
			"name": "assets\\images\\usc2.png",
			"alt" : "University of Southern California",
			"location": "Los Angeles, CA",
			"degree": "B.S. Computer Science <br /> B.M. Music Composition",
			"dates": "2016 - 2019",
			"info": "Dean's List",
			"GPA" : "3.9"
		}, {
			//link to image of school logo
			"name": "assets\\images\\ivc.png",
			"alt": "Irvine Valley College",
			"location": "Irvine, CA",
			"degree": "A.S. Math, A.S. Physics, A.A. Music",
			"dates": "2013 - 2016",
			"info": "summa cum laude, Honors Program, Dean's list",
			"GPA" : "4.0"
		}, {
			//link to image of school logo
			"name": "assets\\images\\nodet.png",
			"alt": "Shahid Ejei High School of Excptional Talents",
			"location": "Esfahan, Iran",
			"degree": "Diploma in Physics &amp; Mathematics",
			"dates": "2010 - 2013",
			"info": "",
			"GPA" : "3.83"
		}
	]
};


education.display = function() {
	for (school in education.schools){
		var formattedEducationSection = HTMLeducationSection.replace("%data1%", education.schools[school].name);
		formattedEducationSection = formattedEducationSection.replace("%data2%", education.schools[school].alt);
		formattedEducationSection = formattedEducationSection.replace("%data3%", education.schools[school].location);
		formattedEducationSection = formattedEducationSection.replace("%data4%", education.schools[school].degree);
		formattedEducationSection = formattedEducationSection.replace("%data5%", education.schools[school].dates);
		formattedEducationSection = formattedEducationSection.replace("%data6%", education.schools[school].info);
		formattedEducationSection = formattedEducationSection.replace("%data7%", education.schools[school].GPA);
		$("#education").append(formattedEducationSection);
	}

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



//Note for self: I could also declare this out side of the object as the following:
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
// bio.display();
// education.display();
// work.display();
// projects.display();



//add the button to display the name in international format
// $("#main").append(internationalizeButton);
// $("#mapDiv").append(googleMap);