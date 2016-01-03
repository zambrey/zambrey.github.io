var zambreyApp = angular.module('zambrey-app',[]);

zambreyApp.controller('zambrey-ctrl', function($scope){
	//UI
	$scope.displaySidebar=false;

	$scope.displayNavTop=function(){return $('body').scrollTop()!==0;};

	$scope.socialMedia=[
		{
			"name":"LinkedIn",
			"class":"fa fa-linkedin social",
			"link":"https://www.linkedin.com/in/ameyazambre"
		},
		{
			"name":"Twitter",
			"class":"fa fa-twitter social",
			"link":"https://twitter.com/ameyazambre"
		},
		{
			"name":"GitHub",
			"class":"fa fa-github social",
			"link":"https://github.com/zambrey/"
		}
	];

	$scope.openInNewWindow=function()
	{
		window.open(event.currentTarget.getAttribute("link"));
	}

	//DATA
	$scope.sections=[
	/*{
		"title":"Home",
		"id":""
	},*/
	{
		"title":"About Me",
		"id":"#about"
	},
	{
		"title":"Recent Projects",
		"id":"#recent"
	},
	{
		"title":"Internships",
		"id":"#internships"
	},
	{
		"title":"Graduate",
		"id":"#grad"
	},
	{
		"title":"Undergraduate",
		"id":"#undergrad"
	}];
	$scope.nameText="Ameya Zambre";
	$scope.nameSubtext="I code for fun and food.";

	$scope.aboutMe="The name is Ameya(pronounced 'uh-meh-yuh'). I currently work as Software Developer with JD Edwards at Oracle. Before Oracle I have been a student at Georgia Tech in Atlanta and at BITS Pilani in India. I also worked as Intern at Epic Systems in Madison and Intel India in Bangalore.";
	$scope.recentProjects=[
		{
			"title":"Einthusan Monitor",
			"description":"A solution to monitor a movie website for latest movies and also to search in existing movies using website's REST services. Published on chrome webstore with 2500+ users. Code available on Github (zambrey).",
			"link":"https://chrome.google.com/webstore/detail/einthusan-monitor/khhfpiaglmihaifnfocggdmifdeigkhg",
			"linkText":"Chrome Webstore",
			"technology":"Javascript, HTML/CSS"
		},
		{
			"title":"zambrey.github.io",
			"description":"A responsive personal webpage",
			"link":"https://github.com/zambrey/zambrey.github.io",
			"linkText":"Code@Github",
			"technology":"jquery, HTML/CSS, AngularJS"
		},
		{
			"title":"JD Edwards EnterpriseOne for iPad",
			"description":"Working independently on iPad application. Implemented a PDF viewer and handwriting support for signatures, native playback support for video files, touch-friendly navigation menu(later included in web client as well). Responsible for supporting all new features being developed on iPad browser and application and for uptaking latest iOS SDKs.",
			"link":"https://itunes.apple.com/us/app/jd-edwards-enterpriseone-for/id624165519",
			"linkText":"JD Edwards EnterpriseOne for iPad",
			"technology":"Java, Javascript(HTML/CSS), Objective-C"
		},
		{
			"title":"Third party apps support for JD Edwards",
			"description":"Worked in a team of 4 to support third party ADF applications in existing framework. The work involved developing a container to host ADF applications, allowing embedding appropriate content in authorized iframes, establishing secure communication link between different domains, managing sessions, supporting single sign on and overall providing a seamless experience for the end user.",
			"link":"https://docs.oracle.com/cd/E24902_01/doc.91/e61893/toc.htm",
			"linkText":"Public Documentation",
			"technology":"Java, Javascript(HTML/CSS)"
		}
	];

	$scope.internships=[
		{
			"title":"Project with ASAP R&D team",
			"description":"Design and development of an enhanced user interface with advanced functionality to display Emergency Department map with customized summary of the sub-areas and ability to drill down further in to those",
			"thumbnail":"thumbnails/epic-thumb.jpg",
			"guide":"Paul Romine",
			"guide-homepage":"https://www.linkedin.com/in/paul-romine-6410b63a",
			"guideTitle":"Manager",
			"company":"Epic Systems, Madison WI",
			"duration":"May  - July 2012",
			"technology":"C#"
		},
		{
			"title":"Project with Common User Interface(CUI) team in Visual and Parallel Computing Group",
			"description":"Development of a logger tool for CUI team and framework for unified user interface for Intel software",
			"thumbnail":"thumbnails/intel-thumb.png",
			"guide":"Indranil Mukherjee",
			"guide-homepage":"http://in.linkedin.com/in/indranilm",
			"guideTitle":"Manager",
			"company":"Intel India Pvt. Ltd., Bengaluru",
			"duration":"Jan - Jun 2011",
			"technology":"C#"
		},
		{
			"title":"Nation level workshop on Computer Graphics and Vision",
			"description":"We modeled an elastic body using spring mass model. To interact with the body we tracked an object using a camera and interfacing its movement with a virtual object. To introduce the effect of immersive environment we rendered the elastic object as an anaglyph so that it could be viewed as a three-dimensional object using red-cyan filters.",
			"thumbnail":"thumbnails/iitd-thumb.jpeg",
			"guide":"Dr. Subodh Kumar",
			"guide-homepage":"http://www.cse.iitd.ernet.in/~subodh/",
			"guideTitle":"Guide",
			"company":"Indian Institute of Technology, New Delhi",
			"duration":"May - Jul 2010",
			"technology":"C++, C"
		},
		{
			"title":"Project with Advanced Technology Vehicles Project (ATVP) of ISRO",
			"description":"The project was aimed at developing an efficient program for processing the data received from sensors on board the sounding rockets, RH-200 and RH-300 MkII (Rohini sounding rockets, ISRO). The rockets transmit the data in a binary frame format continuously and the same is received on ground. Hence, this data cannot be analyzed by the scientists as it is and needs to be processed in real time before using it.",
			"thumbnail":"thumbnails/vssc-thumb.jpg",
			"guide":"Dr. V. K. S. Panicker",
			"guide-homepage":"",
			"guideTitle":"Director",
			"company":"Vikram Sarabhai Space Center, Thiruvanathapuram (Indian Space Research Organization)",
			"duration":"May - Jul 2008",
			"technology":"C++"
		}
	];

	$scope.graduateProjects=[
		{
			"title":"SalaRead",
			"description":"A visualization tool for public salaries data of Georgia Tech faculty. We imported and cleaned up publicly available salaries data of last 4 years to Google Fusion Tables. Utilizing that we developed an interactive visualization system using Google Charts plotting data against various parameters to provide more insight to the data.",
			"link":"https://github.com/zambrey/SalaRead",
			"linkText":"Code@GitHub",
			"technology":"Javascript(HTML/CSS), Google Charts, Google Fusion Tables"
		},
		{
			"title":"GTLive",
			"description":"A fault tolerant service and an accompanying android app which allowed users to live stream content camera. Consumers are able to visit a website to view the currently live streamed events in their browser. Part of a team of 4.",
			"technology":"Java"
		},
		{
			"title":"Unity Video Games",
			"description":"Four different title built from scratch using Unity game engine. FloodIt, Breakout, icanhascheezburger, Plastic Bogeys. Worked both independently and as a part of teams.",
			"link":"https://sites.google.com/site/ameyazambre/portfolio",
			"linkText":"Try them out here",
			"technology":"Unity"	
		},
		{
			"title":"Voice2Text Logger",
			"description":"Developed an application which transcribes Skype voice calls into simple text file which had silence detection and removal, speech to text conversion and chronological arrangement of text generating the original conversation as its major components. ",
			"technology":"C#, Python"	
		}
	];

	$scope.undergradProjects=[
		{
			"title":"Development of binary similarity measures based approach for copy-move forgery detection in digital images (Undergraduate thesis)",
			"description":"We reviewed several existing methods proposed to detect copy-move forgery. These methods in general used block-matching procedures, which first divide the image into overlapping blocks and extract features from each block, assuming similar blocks will yield similar features. Later in block matching step duplicated blocks are tracked down based on their feature vectors. We proposed a binary similarity measures based approach for block matching. BSM feature values are calculated for the overlapping blocks and the blocks with same value of BSM feature are exactly the same. We also present a few preliminary test results we got during testing.",
			"thumbnail":"thumbnails/copy-move-thumb.jpg",
			"link":"https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=0B6VoprahAXmZNjBjZmU4MDItMTk4MS00ZDA3LWI0NzgtM2QyNjgzYjMzMGFm&hl=en_US",
			"linkText":"Report",
			"guide":"Dr. R. K. Gupta",
			"guide-homepage":"http://discovery.bits-pilani.ac.in/Homepage/disciplines/physics/rkgupta.html",
			"guideTitle":"Assistant Professor, Department of Physics, BITS Pilani"
		},
		{
			"title":"Development of framework for form detection by simple cells in visual cortex area",
			"description":"The scope of this work was modeling simple and complex cells in visual cortex area of brain and practical implementation of image perception pipeline in brain. We developed an algorithm for simulation of form detection by simple cells in visual cortex area V1 and V2 in this project. This work was presented at International Symposium on Medical Imaging 2010.",
			"thumbnail":"thumbnails/med-image-thumb.jpg",
			"link":"https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=1rqlO5HJsEvqaeQmT72l031YTmEA_2-bmvjl_YYJyT00fgK424bZEKhm-gBYg&hl=en",
			"guide":"Dr. A. S. Mandal",
			"guideTitle":"Scientist - F, IC Design Group, Central Electronics Engineering Research Institute(CEERI), Pilani"
		},
		{
			"title":"Three dimensional reconstruction from stereo pair images",
			"description":"After studying basics of three dimensional reconstruction, implementation of the module was done using some of the existing methods. We calculated Fundamental matrix using Eight Point Algorithm and further stereo matching was achieved using some indigenous methods. In the final step depth calculations were done thus completing the reconstruction from stereo pair.",
			"thumbnail":"thumbnails/3d-reconstruction-thumb.jpg",
			"guide":"Dr. M. K. Rohil",
			"guideTitle":"Assistant Professor, Department of Computer Science, BITS Pilani"
		},
		{
			"title":"Designing of student academic database and development of an application for generating grade cards and transcripts",
			"description":"We designed and developed BITS student academic database and user friendly application to generate grade cards and transcripts of students from the database. The required database was developed from the scratch by analyzing each and every aspect of problem statement. Graphical user interface was designed and developed providing a better and efficient alternative for the previously used software for the same purpose.",
			"thumbnail":"thumbnails/transcript-thumb.jpg",
			"guide":"Dr. S. C. Sivasubramanian",
			"guideTitle":"Unit Chief, Computer Assisted Housekeeping Unit, BITS Pilani"
		}
	];
});