let myApp = angular.module('myApp',['ngAnimate','ngStorage','ngSanitize']);
myApp.controller('myAppController',function($scope, $sessionStorage){





    // Create variable $sessionStorage.dataStoraged, run only one time
    if ($sessionStorage.onlyOneTime == 0)
    {}
    else
    {
        $sessionStorage.specificStoraged ={};
        $sessionStorage.dataStoraged =[];
        $sessionStorage.onlyOneTime = 0;
    }





    // // // // // MAIN DATA
    $scope.data=[
        {
            id: 1,
            name: 'Chair',
            imageUrl:
            {
                imageUrl: './images/products/product1/ingolf-chair-1.jpg',
                imageUrl2: './images/products/product1/ingolf-chair-2.jpg',
                imageUrl3: './images/products/product1/ingolf-chair-3.jpg',
                imageUrl4: './images/products/product1/ingolf-chair-4.jpg',
                imageUrl5: './images/products/product1/ingolf-chair-5.jpg',
                imageUrl6: './images/products/product1/ingolf-chair-6.jpg',
                imageUrl7: './images/products/product1/ingolf-chair-7.jpg',
                imageUrl8: './images/products/product1/ingolf-chair-8.jpg',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 'Solid wood is a hardwearing natural material.',
                'Assembled size': 
                {
                    'Tested for': '110 kg',
                    'Width': '43 cm',
                    'Depth': '52 cm',
                    'Height': '91 cm',
                    'Seat width': '41 cm',
                    'Seat depth': '38 cm',
                    'Seat height': '44 cm'
                },
                'Package_display': 'Package size & weight',
                'Pakage name': 'Chair INGOLF',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '701.032.50',
                        'Package': '1',
                        'Length': '96 cm',
                        'Width': '47 cm',
                        'Height': '14 cm',
                        'Weight': '8.90 kg',
                        'Volume per package': '61.9 l'
                    }
                }
            },
            careinstructions: 
            `
                Wipe clean with a cloth dampened in a mild cleaner.<br><br> 
                Wipe dry with a clean cloth.<br><br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquid provident eveniet, minima voluptate, quibusdam libero perferendis ex qui illo mollitia culpa distinctio. Autem nihil fugit accusamus, maiores facilis odit.
            `,
            goodtoknow:
            `
                For increased stability, re-tighten the screws about two weeks after assembly and when necessary.<br>
                May be completed with FIXA self-adhesive floor protectors; protect the underlying surface against wear.<br>
                This chair has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.<br>
            `,
            designer: 'Carina Bengs',
            materials: 
            `
                Basematerial: Solid wood<br><br>
                Seat: Fibreboard<br><br>
                All parts: Acrylic paint
            `,
            productDocument: './product_document/INGOLF-Chair.docx',
            category: 'Chairs',
            manufacture: 'INGOLF',
            model: '2017',
            quantity_of_inventory: 5,
            price: '70',
            sales: 3
        },
        {
            id: 2,
            name: 'Bar stool with backrest',
            imageUrl:
            {
                imageUrl: './images/products/product2/ingolf-bar_stool_with_backrest-1.jpg',
                imageUrl2: './images/products/product2/ingolf-bar_stool_with_backrest-2.jpg',
                imageUrl3: './images/products/product2/ingolf-bar_stool_with_backrest-3.jpg',
                imageUrl4: './images/products/product2/ingolf-bar_stool_with_backrest-4.jpg',
                imageUrl5: './images/products/product2/ingolf-bar_stool_with_backrest-5.jpg',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 'With footrest for relaxed sitting posture.',
                'Assembled size': 
                {
                    'Tested for': '100 kg',
                    'Width': '40 cm',
                    'Depth': '45 cm',
                    'Height': '102 cm',
                    'Seat width': '40 cm',
                    'Seat depth': '40 cm',
                    'Seat height': '74 cm'
                },
                'Pakage name': 'Bar stool with backrest INGOLF',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '001.217.66',
                        'Package': '1',
                        'Length': '106 cm',
                        'Width': '42 cm',
                        'Height': '13 cm',
                        'Weight': '9.34 kg',
                        'Volume per package': '55.4 l'
                    }
                }
            },
            careinstructions: 
            `
            Wipe clean with a cloth dampened in a mild cleaner.<br><br> 
            Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                Suitable for bar height 110 cm.<br><br>
                For increased stability, re-tighten the screws about two weeks after assembly and when necessary.<br><br>
                May be completed with FIXA self-adhesive floor protectors; protect the underlying surface against wear.<br><br>
                This bar stool has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.<br><br>
            `,
            designer: 'Carina Bengs',
            materials: 
            `
                Basematerial: Solid wood<br><br>
                Seat: Fibreboard<br><br>
                All parts: Acrylic paint
            `,
            productDocument: './product_document/INGOLF-Bar_stool_with_backrest.docx',
            category: 'Café & bar chairs',
            manufacture: 'INGOLF',
            model: '2017',
            quantity_of_inventory: 8,
            price: '65',
            sales: 23
        },
    ];





    // // // // // STORAGE DATA

    // Get data for compareData array from sessionStorage.dataStoraged
    $scope.compareData = $sessionStorage.dataStoraged;
    $scope.specificData = $sessionStorage.specificStoraged;




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

    if (Object.keys($scope.data).length > 6)
    {
        for (let i in $scope.data)
        {
            if ($scope.data[i]['sales'] >= $scope.maxSales)
            {
                $scope.maxSales = $scope.data[i]['sales'];
            } 
        }
        while ($scope.counterBestSeller < 6)
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





    // SPECIFIC DATA ZONE

    $scope.specificItemFunction = function(idItem)
    {
        $sessionStorage.specificStoraged = {};
        for (let i in $scope.data)
        {
            if($scope.data[i]['id'] == idItem)
            {
                $sessionStorage.specificStoraged = $scope.data[i];
            }
        }
    }




    
    // // // // // FUNCTION TEST ZONE
    $scope.clickForDemoBind = function()
    {
        bestsellerFunction();
    }
    $scope.clickForTest = function()
    {
        console.log($sessionStorage.specificStoraged);
    }
    $scope.clickForReset = function()
    {
        $sessionStorage.$reset();
    }
});