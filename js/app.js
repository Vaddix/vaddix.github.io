(function () {
	var app = angular.module('penguindrum', []);

	app.controller('pinguController', function(){
		this.family = pengys;
	});

	app.controller('tabController', function(){
		this.tab = 1;
		this.setTab = function(newTab){
			this.tab=newTab;
		};
		this.isTab = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('blurbController', ['$http', function($http){
		splash = this;
		this.titleLeft = "Take Action!";
		this.titleRight = "Get Involved!";

		$http.get('./updates.json').success(function(data){
			splash.blurbs = updates;
		});
		$http.get('./contacts.json').success(function (data) {
			splash.contacts = contacts;
		});
	}]);

	var pengys = [
		{
			name: "1",
			description: "This pengy wears the mask of the playboy. Hiding the memory of all he has given up, he suppresses his true desires and dedicates himself to protecting his 'family'.",
			images: [
				"../images/pengy1.jpg",
				"../images/pengy1.png"
			]
		},
		{
			name: "2",
			description: "This pengy wears the mask of the nice guy. Hiding the memory of all his past regrets, he suppresses his fear and anger and dedicates himself to maintaining  his 'family'.",
			images: [
				"../images/pengy2.jpg",
				"../images/pengy2.png"
			]
		},
		{
			name: "3",
			description: "This pengy wears the mask of the happy cripple. Hiding the memory of all that has been taken from her, she suppresses her sadness and dedicates herself to supporting her 'family'.",
			images: [
				"../images/pengy3.jpg",
				"../images/pengy3.png"
			]
		}
	];
	
	var tabSettings = [
		{
			title: 'Tab 1',
			description: "Tab 1 description goes here!"
		},
		{
			title: 'Tab 2',
			description: "Tab 2 description goes here!"
		},
		{
			title: 'Tab 3',
			description: "Tab 3 description goes here!"
		}
	];


})();
