angular.module('myApp.controllers', [])

.controller('songCtrl', function($scope, songService){
	// $scope.songs = [
		// static data
		// {
		//   artist: "Nightwish",
		//   title: "Ghost Loves Score"
		// }, {
		//   artist: "Evanescence",
		//   title: "Everybody's Fool"
		// }, {
		//   artist: "Within Temptation",
		//   title: "Ice Queen"
		// }
	// ];
	$scope.songs = songService.get();

	$scope.newSong = { };
	$scope.error = false;

	// AngularJS event driven feature that allows us 
	// to react everytime the array changes by “watching” it.
	$scope.$watch('songs', function (newValue, oldValue) {
		if (newValue !== oldValue) {
			songService.put($scope.songs);
			console.log($scope.songs);
		}
	}, true);

	$scope.addSong = function(/** String */ artist, /** String */ title) {
		if ( (artist == '' && title == '') || (artist == undefined && title == undefined) ) {
			$scope.errorMsg = 'Enter name of the artist, band and name of the song';
		  	return $scope.error = true;
		}else if(artist == '' || artist == undefined){
			$scope.errorMsg = 'Enter name of the artist, band';
			return $scope.error = true;
		}else if(title == '' || title == undefined){
			$scope.errorMsg = 'Enter name of the song'
			return $scope.error = true;
		}else{
			$scope.error = false;
			$scope.songs.push({
				artist: artist,
				title: title,
				score: 0
			});
			$scope.newSong.title = '';
			$scope.newSong.artist = '';
		}
	};

	$scope.deleteSong = function(/** Song */ song){
		var idx = $scope.songs.indexOf(song);
		if (idx >= 0) {
			$scope.songs.splice(idx, 1);
		}
	};
});