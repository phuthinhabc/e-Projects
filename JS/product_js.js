let myApp = angular.module('myApp',[]);
myApp.controller('myAppController',function($scope){
    $scope.data=[
        {
            name: 'Dining table',
            imageUrl: '/images/products/dining.jpg',
            model: '2017',
            manufacture: 'DURIAN'
        },
        {
            name: 'Desk',
            imageUrl: '/images/products/dining.jpg',
            model: '2018',
            manufacture: 'DURIAN'
        },
    ];
});