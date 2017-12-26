angular.module('app.routes', ['ngRoute','questionCtrl'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		// Route to the homepage
			.when('/', {
				templateUrl : 'app/views/pages/home.html'
			})
			.when('/success', {
				templateUrl : 'app/views/pages/landing-page.html'
			})
			.when('/diagnose', {
				templateUrl : 'app/views/pages/questions.html'
			})
			.when('/repair', {
				templateUrl: 'app/views/pages/repair-form.html'
			})
			.when('/forms/success', {
				templateUrl: 'app/views/pages/forms-landing-page.html'
			})
			.when('/forms/data', {
				templateUrl: 'app/views/pages/forms/data-transfer-form.html'
			})
			.when('/appt/schedule', {
				templateUrl: 'app/views/appt_pages/sched.html'
			})
			.when('/appt/confirm', {
				templateUrl: 'app/views/appt_pages/appt-form.html'
			})
			.when('/appt/success', {
				templateUrl: 'app/views/appt_pages/appt-landing-page.html'
			});
		// Get rid of has in the URL
		$locationProvider.html5Mode(true);
	});
