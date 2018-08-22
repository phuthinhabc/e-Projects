let myApp = angular.module('myApp',['ngAnimate','ngStorage']);
myApp.controller('myAppController',function($scope, $sessionStorage){





    // Create variable $sessionStorage.dataStoraged, run only one time
    if ($sessionStorage.onlyOneTime == 0)
    {}
    else
    {
        $sessionStorage.specificStoraged = [];
        $sessionStorage.dataStoraged =[];
        $sessionStorage.onlyOneTime = 0;
    }





    // // // // // MAIN DATA
    $scope.data=[
        {
            id: 1,
            name: 'Table table',
            imageUrl: './images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'HOA PHAT',
            model: '2017',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 3
        },
        {
            id: 2,
            name: 'The shelf',
            imageUrl: './images/products/Danish_store-Shelf-The_shelf.jpg',
            category: 'shelf',
            manufacture: 'DANISH STORE',
            model: '2018',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 11
        },
        {
            id: 3,
            name: 'The new table',
            imageUrl: './images/products/Hoa_Phat-Table-The_new_table.jpg',
            category: 'table',
            manufacture: 'HOA PHAT',
            model: '2018',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 16
        },
        {
            id: 4,
            name: 'The vintage shelf',
            imageUrl: './images/products/Danish_store-Shelf-The_vintage_shelf.jpg',
            category: 'shelf',
            manufacture: 'DANISH STORE',
            model: '2018',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 20
        },
        {
            id: 5,
            name: 'A Desk?',
            imageUrl: './images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'DURIAN',
            model: '2016',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 10
        },
        {
            id: 6,
            name: 'This is a Desk',
            imageUrl: './images/products/Hoa_Phat-Table-Table_table.jpg',
            category: 'table',
            manufacture: 'DURIAN',
            model: '2018',
            size: '28x25',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 5,
            price: 800000,
            sales: 9
        },
        {
            id: 7,
            name: 'The mordern chair',
            imageUrl: './images/products/Apolo-Chair-The_mordern_chair.jpg',
            category: 'chair',
            manufacture: 'APOLO',
            model: '2013',
            size: '50x50',
            description: 'lorem ipsum dolor sit amet this is the demo for check width of container',
            quantity_of_inventory: 3,
            price: 420000,
            sales: 20
        },
    ];





    // // // // // STORAGE DATA

    // Get data for compareData array from sessionStorage.dataStoraged
    $scope.compareData = $sessionStorage.dataStoraged;





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
                    $sessionStorage.dataStoraged = $scope.compareData;
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
            $sessionStorage.dataStoraged=[];
            $scope.compareData = [];
            $scope.compareDatalength = 0;
            $scope.disableCompareButton = true;
        }
    }





    // SORTING ZONE


    // Manufacture sorting
    $scope.selectedListManufacture = {};

    for (let i of $scope.data)
    {
        $scope.selectedListManufacture[i.manufacture] = false;
    }

    $scope.optionManufacture = [];

    for(let i in $scope.selectedListManufacture)
    {
        $scope.optionManufacture.push(i);
    }

    $scope.counterManufactureFunction = function()
    {
        $scope.counterManufacture = 0;
        for (let i in $scope.selectedListManufacture)
        {
            if($scope.selectedListManufacture[i] == false)
            {
                $scope.counterManufacture++;
            }
        }
    }
    $scope.bindManufacture = function(itemManufacture)
    {
        if($scope.counterManufacture == undefined || $scope.counterManufacture == 0 || $scope.counterManufacture == Object.keys($scope.selectedListManufacture).length)
        {
            return true;
        }
        else
        {
            for(let i in $scope.selectedListManufacture)
            {
                if (itemManufacture == i && $scope.selectedListManufacture[i] == true)
                {
                    return true;
                }
            }
        }
    }


    // Category sorting
    $scope.selectedListCategory = {};

    for (let i of $scope.data)
    {
        $scope.selectedListCategory[i.category] = false;
    }

    $scope.optionCategory = [];

    for(let i in $scope.selectedListCategory)
    {
        $scope.optionCategory.push(i);
    }

    $scope.counterCategoryFunction = function()
    {
        $scope.counterCategory = 0;
        for (let i in $scope.selectedListCategory)
        {
            if($scope.selectedListCategory[i] == false)
            {
                $scope.counterCategory++;
            }
        }
    }
    $scope.bindCategory = function(itemCategory)
    {
        if($scope.counterCategory == undefined || $scope.counterCategory == 0 || $scope.counterCategory == Object.keys($scope.selectedListCategory).length)
        {
            return true;
        }
        else
        {
            for(let i in $scope.selectedListCategory)
            {
                if (itemCategory == i && $scope.selectedListCategory[i] == true)
                {
                    return true;
                }
            }
        }
    }


    // Model sorting
    $scope.selectedListModel = {};

    for (let i of $scope.data)
    {
        $scope.selectedListModel[i.model] = false;
    }

    $scope.optionModel = [];

    for(let i in $scope.selectedListModel)
    {
        $scope.optionModel.push(i);
    }

    $scope.counterModelFunction = function()
    {
        $scope.counterModel = 0;
        for (let i in $scope.selectedListModel)
        {
            if($scope.selectedListModel[i] == false)
            {
                $scope.counterModel++;
            }
        }
    }
    $scope.bindModel = function(itemModel)
    {
        if($scope.counterModel == undefined || $scope.counterModel == 0 || $scope.counterModel == Object.keys($scope.selectedListModel).length)
        {
            return true;
        }
        else
        {
            for(let i in $scope.selectedListModel)
            {
                if (itemModel == i && $scope.selectedListModel[i] == true)
                {
                    return true;
                }
            }
        }
    }





    // BEST SELLER ZONE

    $scope.bestseller = [];
    $scope.maxSales = $scope.data[0]['sales'];
    $scope.counterBestSeller = 0;

    if (Object.keys($scope.data).length > 5)
    {
        for (let i in $scope.data)
        {
            if ($scope.data[i]['sales'] >= $scope.maxSales)
            {
                $scope.maxSales = $scope.data[i]['sales'];
            } 
        }
        while ($scope.counterBestSeller < 5)
        {
            for(let i in $scope.data)
            {   
                if($scope.data[i]['sales'] == $scope.maxSales)
                {
                    $scope.bestseller.push($scope.data[i]);
                    $scope.counterBestSeller ++;
                }
            }
            $scope.maxSales --;
        }
    }
    else
    {
        for(let i in $scope.data)
        {   
            $scope.bestseller.push($scope.data[i]);
        }
    }

    // // // // // FUNCTION TEST ZONE
    $scope.clickForDemoBind = function()
    {
        bestsellerFunction();
    }
    $scope.clickForTest = function()
    {
        console.log($scope.bestseller)
    }
    $scope.clickForReset = function()
    {
        $sessionStorage.$reset();
    }
});