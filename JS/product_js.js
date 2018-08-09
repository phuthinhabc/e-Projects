let myApp = angular.module('myApp',[]);
myApp.controller('myAppController',
function($scope)
{

    $scope.products=[
        {
            'id': 1,
            'name': 'BMW - 320i',
            'year': 2010,
            'company': 'BMW',
            'info': 'lorem ipsum',
            'price': 250000
        },
        {
            'id': 2,
            'name': 'BMW - 520i',
            'year': 2010,
            'company': 'BMW',
            'info': 'lorem ipsum dolor sit amet',
            'price': 250000
        },
        {
            'id': 3,
            'name': 'BMW - 520i',
            'year': 2010,
            'company': 'BMW',
            'info': 'lorem ipsum dolor sit amet',
            'price': 250000
        },
        {
            'id': 4,
            'name': 'BMW - 520i',
            'year': 2010,
            'company': 'BMW',
            'info': 'lorem ipsum dolor sit amet',
            'price': 250000
        },
        {
            'id': 5,
            'name': 'BMW - 520i',
            'year': 2010,
            'company': 'BMW',
            'info': 'lorem ipsum dolor sit amet',
            'price': 250000
        },

    ];

    $scope.product_element = [];
    for (let i of $scope.products)
    {
        for(let n in i)
        {
            $scope.product_element.push(n);
        }
    }
    $scope.unique_product_element = [];
    $.each($scope.product_element,function(i, el)
        {
            if($.inArray(el, $scope.unique_product_element) === -1) 
            {
                $scope.unique_product_element.push(el);
            }   
        }
    );
    $scope.unique_product_element = $scope.unique_product_element.splice(1,$scope.unique_product_element.length);

}
);