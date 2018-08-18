let myApp = angular.module('myApp',['ngAnimate','ngStorage']);
myApp.controller('myAppController',function($scope, $localStorage){





    // Create variable $localStorage.dataStoraged, run only one time
    if ($localStorage.onlyOneTime == 0)
    {}
    else
    {
        $localStorage.dataStoraged =[];
        $localStorage.onlyOneTime = 0;
    }





    // // // // // MAIN DATA
    $scope.data=[
        {
            id: 1,
            name: 'Table table',
            imageUrl: '../images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'HOA PHAT',
            model: '2017',
            size: '28x25'
        },
        {
            id: 2,
            name: 'The shelf',
            imageUrl: '../images/products/Danish_store-Shelf-The_shelf.jpg',
            category: 'shelf',
            manufacture: 'THE DANISH STORE',
            model: '2018',
            size: '28x25'
        },
        {
            id: 3,
            name: 'The new table',
            imageUrl: '../images/products/Hoa_Phat-Table-The_new_table.jpg',
            category: 'table',
            manufacture: 'HOA PHAT',
            model: '2018',
            size: '28x25'
        },
        {
            id: 4,
            name: 'The vintage shelf',
            imageUrl: '../images/products/Danish_store-Shelf-The_vintage_shelf.jpg',
            category: 'shelf',
            manufacture: 'THE DANISH STORE',
            model: '2018',
            size: '28x25'
        },
        {
            id: 5,
            name: 'A Desk?',
            imageUrl: '../images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'DURIAN',
            model: '2018',
            size: '28x25'
        },
        {
            id: 6,
            name: 'This is a Desk',
            imageUrl: '../images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'DURIAN',
            model: '2018',
            size: '28x25'
        },
    ];





    // // // // // STORAGE DATA

    // Get data for compareData array from localStorage.dataStoraged
    $scope.compareData = $localStorage.dataStoraged;





    // // // // // COMPARE BUTTON
    $scope.compareDatalength = $scope.compareData.length;
    $scope.disableCompareButton = true;

    // Function for turn off or turn on 'Compare view' button for the first time
    if($scope.compareDatalength == 0)
    {
        $scope.disableCompareButton = true;
    }
    else
    {
        $scope.disableCompareButton = false;
    }

    // Function for 'Click for compare' button (click for add item into compareData array) 
    $scope.clickForCompare = function(itemId)
    {
        $scope.counterCompare = 0;
        for(let i in $scope.compareData)
        {
            if(itemId == $scope.compareData[i].id)
            {
                $scope.counterCompare++;
            }
        }
        if($scope.counterCompare == 0)
        {
            for(let i in $scope.data)
            {
                if(itemId == $scope.data[i].id)
                {
                    $scope.compareData.push($scope.data[i]);
                    $scope.compareDatalength = $scope.compareData.length;
                    $localStorage.dataStoraged = $scope.compareData;
                    $scope.disableCompareButton = false;
                }
            }
        }
        else
        {
            $scope.counterCompare = 0;
            return false;
        }
    }

    // Reset compareData array (Reset compare button)
    $scope.compareDataReset = function()
    {
        let confirmValue = confirm('Are you sure?');
        if (confirmValue == true)
        {
            $localStorage.dataStoraged=[];
            $scope.compareData = [];
            $scope.compareDatalength = 0;
            $scope.disableCompareButton = true;
        }
    }





    // // // // // FUNCTION TEST ZONE

    $scope.clickForTest = function()
    {
        console.log($scope.compareDatalength);
    }
    $scope.clickForReset = function()
    {
        $localStorage.$reset();
    }
});