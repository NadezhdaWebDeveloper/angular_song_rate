angular.module("myApp.directives", [])

.directive("rating", function() {
	var directive = { };
	directive.restrict = 'AE';

	directive.scope = {
		score: '=score',
		max: '=max'
	};
	// directive.template = '<div>My template</div>';
	directive.templateUrl = "app/templates/rating.html";

	return directive;
});