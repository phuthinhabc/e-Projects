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
            category: 'Chairs',
            manufacture: 'INGOLF',
            model: '2017',
            quantity_of_inventory: 8,
            price: '65',
            sales: 23
        },
        {
            id: 3,
            name: 'Drop-leaf table',
            imageUrl:
            {
                imageUrl:  './images/products/product3/ingatorp-drop_leaf_table-1.jpg',
                imageUrl2: './images/products/product3/ingatorp-drop_leaf_table-2.jpg',
                imageUrl3: './images/products/product3/ingatorp-drop_leaf_table-3.jpg',
                imageUrl4: './images/products/product3/ingatorp-drop_leaf_table-4.jpg',
                imageUrl5: './images/products/product3/ingatorp-drop_leaf_table-5.jpg',
                imageUrl6: './images/products/product3/ingatorp-drop_leaf_table-6.jpg',
                imageUrl7: './images/products/product3/ingatorp-drop_leaf_table-7.jpg',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                    With footrest for relaxed sitting posture.
                `,
                'Assembled size': 
                {
                    'Length': '88 cm',
                    'Min. length': '59 cm',
                    'Max. length': '117 cm',
                    'Width': '78 cm',
                    'Height': '74 cm',
                },
                'Pakage name': 'Drop-leaf table INGATORP',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '102.224.06',
                        'Package': '1',
                        'Length': '81 cm',
                        'Width': '63 cm',
                        'Height': '11 cm',
                        'Weight': '23.75 kg',
                        'Volume per package': '55.1 l'
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
                For maximum quality, re-tighten the screws when necessary.<br><br>
                Seats 2-4.<br><br>
                “I think many people experience love at first sight when they see INGATORP drop-leaf table. It’s a table you can sit at to daydream and fantasize about how you want to use it. Perhaps by putting cutlery, sewing thread or make-up in the little drawer. Place it as a dining table in a small kitchen or as a romantic accent in a larger room. The fine details and timeless design are one thing – the table is also practical with drop-leaves that make it easy to adapt and use."<br><br>
            `,
            designer: 'Carina Bengs',
            materials: 
            `
                Table top/ Drop-leaf: Particleboard, Acrylic paint, ABS plastic<br><br>
                Bottom rail/ Leg: Solid beech, Acrylic paint<br><br>
                Side rail: Moulded layers of fibreboard, Acrylic paint<br><br>
                Supporting rail: Solid birch, Acrylic paint<br><br>
                Drawer front: Fibreboard, Acrylic paint<br><br>
                Drawer side/ Drawer back: Solid pine<br><br>
                Drawer bottom: Pattern printed fibreboard<br><br>
            `,
            productDocument: './product_document/INGATORP-drop_leaf_table.docx',
            category: 'Tables',
            manufacture: 'INGATORP',
            model: '2015',
            quantity_of_inventory: 10,
            price: '100',
            sales: 12
        },
        {
            id: 4,
            name: 'Shelving unit',
            imageUrl:
            {
                imageUrl:  './images/products/product4/KALLAX-shelving_unit-1.jpg',
                imageUrl2: './images/products/product4/KALLAX-shelving_unit-2.jpg',
                imageUrl3: './images/products/product4/KALLAX-shelving_unit-3.jpg',
                imageUrl4: '',
                imageUrl5: '',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                Choose whether you want to place it vertically or horizontally and use it as a shelf or sideboard.
                `,
                'Assembled size': 
                {
                    'Width':	'42 cm',
                    'Depth':	'39 cm',
                    'Height':	'147 cm',
                    'Max. load/shelf':	'13 kg',
                    'Max. load/wall cabinet':	'30 kg',
                },
                'Pakage name': 'Shelving unit KALLAX',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '402.758.46',
                        'Package': '1',
                        'Length': '155 cm',
                        'Width': '41 cm',
                        'Height': '12 cm',
                        'Weight': '19.00 kg',
                        'Volume per package': '76.3 l'
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
                This furniture must be fixed to the wall with the enclosed wall fastener.<br><br>
                Different wall materials require different types of fixing devices. Use fixing devices suitable for the walls in your home, sold separately.<br><br>
                May be completed with KALLAX insert, sold separately.<br><br>
            `,
            designer: 'Tord Björklund',
            materials: 
            `
                Particleboard, Fibreboard, Foil, Printed and embossed acrylic paint, Paper, Plastic edging
            `,
            productDocument: './product_document/KALLAX-shelving_unit.docx',
            category: 'Shelf',
            manufacture: 'KALLAX',
            model: '2018',
            quantity_of_inventory: 15,
            price: '35',
            sales: 9
        },
        {
            id: 5,
            name: 'Bookcase',
            imageUrl:
            {
                imageUrl:  './images/products/product5/BILLY-bookcase-1.jpg',
                imageUrl2: './images/products/product5/BILLY-bookcase-2.jpg',
                imageUrl3: './images/products/product5/BILLY-bookcase-3.jpg',
                imageUrl4: '',
                imageUrl5: '',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                A simple unit can be enough storage for a limited space or the foundation for a larger storage solution if your needs change.
                `,
                'Assembled size': 
                {
                    'Width':	'80 cm',
                    'Depth':	'28 cm',
                    'Height':	'202 cm',
                    'Max. load/shelf':	'30 kg',
                },
                'Pakage name': 'Bookcase BILLY',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '002.638.50',
                        'Package': '1',
                        'Length': '206 cm',
                        'Width': '29 cm',
                        'Height': '13 cm',
                        'Weight': '36.50 kg',
                        'Volume per package': '78.2 l'
                    }
                }
            },
            careinstructions: 
            `
            Wipe clean with a soft cloth dampened in water and a mild washing-up detergent or soap, if necessary.<br><br> 
            Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                This furniture must be fixed to the wall with the enclosed wall fastener.<br><br>
                Different wall materials require different types of fixing devices. Use fixing devices suitable for the walls in your home, sold separately.<br><br>
                1 fixed shelf and 4 adjustable shelves included.<br><br>
                May be completed with BILLY height extension unit in the same width for added storage vertically.<br><br>
                May be completed with doors; available in different colours and designs.<br><br>
                Min. ceiling height required: 205 cm.<br><br>
            `,
            designer: 'Gillis Lundgren',
            materials: 
            `
                Basematerial: Particleboard, Foil, Polypropylene plastic<br><br>
                Side panel: Particleboard, Foil, Melamine foil, Polypropylene plastic<br><br>
                Plinth front: Particleboard, Foil<br><br>
                Back: Fibreboard, Foil, Paint<br><br>
            `,
            productDocument: './product_document/BILLY-Bookcase.docx',
            category: 'Bookcase',
            manufacture: 'BILLY',
            model: '2018',
            quantity_of_inventory: 20,
            price: '35',
            sales: 13
        },
        {
            id: 6,
            name: 'Pendant lamp',
            imageUrl:
            {
                imageUrl:  './images/products/product6/FOTO-pendant_lamp-1.jpg',
                imageUrl2: './images/products/product6/FOTO-pendant_lamp-2.jpg',
                imageUrl3: './images/products/product6/FOTO-pendant_lamp-3.jpg',
                imageUrl4: './images/products/product6/FOTO-pendant_lamp-4.jpg',
                imageUrl5: '',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                Gives a directed light; good for lighting up for example dining tables or bar tops.
                `,
                'Assembled size': 
                {
                    'Max.': '22 W',
                    'Diameter':	'38 cm',
                    'Cord length':	'1.6 m',
                },
                'Pakage name': 'Pendant lamp FOTO',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no': '103.907.01',
                        'Package': '1',
                        'Length': '18 cm',
                        'Diameter': '38 cm',
                        'Weight': '0.62 kg',
                        'Volume per package': '20.2 l'
                    }
                }
            },
            careinstructions: 
            `
            Globe E27 400lm<br><br>
            Wipe clean with a cloth dampened in a mild cleaner.<br><br>
            Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
            Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.<br><br>
            Use a clear light bulb if you have a lamp shade or lamp with a perforated or cut-out pattern or other airy, open design and want the pattern to cast effects on the wall and ceiling.<br><br>
            Can be connected to SKENINGE track system.<br><br>
            This product bears the CE mark.<br><br>
            `,
            designer: 'Nicolas Cortolezzis',
            materials: 
            `
                Aluminium, Lacquer
            `,
            productDocument: './product_document/FOTO-pendant_lamp.docx',
            category: 'Lamp',
            manufacture: 'FOTO',
            model: '2017',
            quantity_of_inventory: 26,
            price: '19',
            sales: 30
        },
        {
            id: 7,
            name: 'Bed frame',
            imageUrl:
            {
                imageUrl:  './images/products/product7/HEMNES-bed_frame-1.jpg',
                imageUrl2: './images/products/product7/HEMNES-bed_frame-2.jpg',
                imageUrl3: './images/products/product7/HEMNES-bed_frame-3.jpg',
                imageUrl4: './images/products/product7/HEMNES-bed_frame-4.jpg',
                imageUrl5: './images/products/product7/HEMNES-bed_frame-5.jpg',
                imageUrl6: './images/products/product7/HEMNES-bed_frame-6.jpg',
                imageUrl7: './images/products/product7/HEMNES-bed_frame-7.jpg',
                imageUrl8: './images/products/product7/HEMNES-bed_frame-8.jpg',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                Made of solid wood, which is a hardwearing.
                `,
                'Assembled size': 
                {
                    'Length':	'201 cm',
                    'Width':	'149 cm',
                    'Footboard height': '66 cm',
                    'Headboard height':	'120 cm',
                    'Mattress length':	'190 cm',
                    'Mattress width':	'135 cm',
                },
                'Pakage name': 'Bed frame HEMNES',
                'Pakages': '4',
                'Package size & weight':
                {
                    'Bed frame HEMNES - Pakage 1':
                    {
                        'Article no': '	102.638.02',
                        'Package': '1/2',
                        'Length':	'153 cm',
                        'Width':	'69 cm',
                        'Height':	'7 cm',
                        'Weight':	'23.40 kg',
                        'Volume per package':	'77.4 l',
                    },
                    'Bed frame HEMNES - Pakage 2':
                    {
                        'Article no': '	102.638.02',
                        'Package': '2/2',
                        'Length':	'196 cm',
                        'Width':	'27 cm',
                        'Height':	'5 cm',
                        'Weight':	'13.50 kg',
                        'Volume per package':	'26.5 l',
                    },
                    'Slatted bed base LURÖY':
                    {
                        'Article no': '502.787.26',
                        'Package': '1',
                        'Length':	'67 cm',
                        'Width':	'19 cm',
                        'Height':	'10 cm',
                        'Weight':	'9.00 kg',
                        'Volume per package':	'12.8 l',
                    },
                    'Midbeam SKORVA':
                    {
                        'Article no': '901.245.34',
                        'Package': '1',
                        'Length':	'139 cm',
                        'Width':	'7 cm',
                        'Height':	'6 cm',
                        'Weight':	'3.62 kg',
                        'Volume per package':	'5.4 l',
                    },
                }
            },
            careinstructions: 
            `
            Wipe clean with a cloth dampened in a mild cleaner.<br><br>
            Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
            The price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.<br><br>
            Slatted bed base is included in the price but packaged separately.<br><br>
            Create extra storage space under the bed with RÖMSKOG bed boxes.<br><br>
            `,
            designer: 'Carina Bengs/IKEA of Sweden',
            materials: 
            `
                <b>Bed frame</b><br>
                Solid pine, Stain, Clear acrylic lacquer<br><br>
                <b>Midbeam</b><br>
                Galvanized steel<br><br>
                <b>Slatted bed base</b><br>
                Layer glued slats: Beech veneer, Birch veneer, Adhesive resin as coating<br>
                Ribbon: 100% polyester, 100% polypropylene<br>
            `,
            productDocument: './product_document/HEMNES-bed_frame.docx',
            category: 'Beds',
            manufacture: 'HEMNES',
            model: '2016',
            quantity_of_inventory: 40,
            price: '175',
            sales: 20
        },
        {
            id: 8,
            name: 'Bed frame with 2 storage boxes',
            imageUrl:
            {
                imageUrl:  './images/products/product8/SONGESAND-bed_frame_with_2_storage_boxes-1.jpg',
                imageUrl2: './images/products/product8/SONGESAND-bed_frame_with_2_storage_boxes-2.jpg',
                imageUrl3: './images/products/product8/SONGESAND-bed_frame_with_2_storage_boxes-3.jpg',
                imageUrl4: './images/products/product8/SONGESAND-bed_frame_with_2_storage_boxes-4.jpg',
                imageUrl5: './images/products/product8/SONGESAND-bed_frame_with_2_storage_boxes-5.jpg',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                Smooth running castors make content easily accessible.
                `,
                'Assembled size': 
                {
                    'Height of drawer (inside)': '14 cm',
                    'Length':	'196 cm',
                    'Width':	'147 cm',
                    'Width of drawer (inside)': '56 cm',
                    'Depth of drawer (inside)':	'64 cm',
                    'Footboard height': '41 cm',
                    'Headboard height': '95 cm',
                    'Mattress length':	'190 cm',
                    'Mattress width':	'135 cm',
                },
                'Pakage name': 'Bed frame with 2 storage boxes',
                'Pakages': '5',
                'Package size & weight':
                {
                    'Bed storage box, set of 2 SONGESAND':
                    {
                        'Article no':	'103.725.42',
                        'Package ':	'1',
                        'Length':	'147 cm',
                        'Width':	'40 cm',
                        'Height':	'7 cm',
                        'Weight':	'21.70 kg',
                        'Volume per package':	'41.6 l',
                    },
                    'Slatted bed base LURÖY':
                    {
                        'Article no':	'502.787.26',
                        'Package ':	'1',
                        'Length':	'67 cm',
                        'Width':	'19 cm',
                        'Height':	'10 cm',
                        'Weight':	'9.00 kg',
                        'Volume per package':	'12.8 l',
                    },
                    'Bed frame SONGESAND - Pakage 1':
                    {
                        'Article no':	'503.725.16',
                        'Package ':	'1/2',
                        'Length':	'165 cm',
                        'Width':	'51 cm',
                        'Height':	'6 cm',
                        'Weight':	'20.25 kg',
                        'Volume per package':	'46.1 l',
                    },
                    'Bed frame SONGESAND - Pakage 2':
                    {
                        'Article no':	'503.725.16',
                        'Package ':	'2/2',
                        'Length':	'206 cm',
                        'Width':	'28 cm',
                        'Height':	'9 cm',
                        'Weight':	'24.00 kg',
                        'Volume per package':	'48.7 l',
                    },
                    'Midbeam SKORVA':
                    {
                        'Article no':	'901.245.34',
                        'Package ':	'1',
                        'Length':	'139 cm',
                        'Width':	'7 cm',
                        'Height':	'6 cm',
                        'Weight':	'3.62 kg',
                        'Volume per package':	'5.4 l',
                    },
                }
            },
            careinstructions: 
            `
            Wipe clean with a cloth dampened in a mild cleaner.<br><br>
            Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                The price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.<br><br>
                Combines with other furniture in the SONGESAND series.<br><br>
            `,
            designer: 'IKEA of Sweden',
            materials: 
            `
                <b>Bed frame</b><br>
                Leg/ Top rail: Fibreboard, Foil, ABS plastic<br>
                Bed end filling/ Rail/ Bedside: Particleboard, Foil, ABS plastic<br><br>
                <b>Bed storage box, set of 2</b><br>
                Drawer front/ Drawer back/ Drawer sides: Particleboard, Foil, ABS plastic<br>
                Drawer bottom: Fibreboard, Paint, Foil<br>
                Partition/ Rail: Particleboard, Foil, Plastic edging<br><br>
                <b>Midbeam</b><br>
                Galvanized steel<br><br>
                <b>Slatted bed base</b><br>
                Layer glued slats: Beech veneer, Birch veneer, Adhesive resin as coating<br>
                Ribbon: 100% polyester, 100% polypropylene<br><br>
            `,
            productDocument: './product_document/SONGESAND-bed_frame_with_2_storage_boxes.docx',
            category: 'Beds',
            manufacture: 'SONGESAND',
            model: '2017',
            quantity_of_inventory: 30,
            price: '195',
            sales: 24,
        },
        {
            id: 9,
            name: 'Wall clock',
            imageUrl:
            {
                imageUrl:  './images/products/product9/STOLPA-wall_clock-1.jpg',
                imageUrl2: './images/products/product9/STOLPA-wall_clock-2.jpg',
                imageUrl3: './images/products/product9/STOLPA-wall_clock-3.jpg',
                imageUrl4: './images/products/product9/STOLPA-wall_clock-4.jpg',
                imageUrl5: './images/products/product9/STOLPA-wall_clock-5.jpg',
                imageUrl6: './images/products/product9/STOLPA-wall_clock-6.jpg',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                Highly accurate at keeping time as it is fitted with a quartz movement.
                `,
                'Assembled size': 
                {
                    'Depth':	'5 cm',
                    'Diameter':	'32 cm',
                },
                'Pakage name': 'Wall clock STOLPA',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no':	'804.003.82',
                        'Package ':	'1',
                        'Length':	'33 cm',
                        'Width':	'33 cm',
                        'Height':	'6 cm',
                        'Weight':	'0.98 kg',
                        'Volume per package':	'6.2 l',
                    },
                }
            },
            careinstructions: 
            `
                Clean with a duster.
            `,
            goodtoknow:
            `
                We recommend using alkaline batteries in the clock.<br><br>

            `,
            designer: 'Henrik Preutz',
            materials: 
            `
                ABS plastic
            `,
            productDocument: './product_document/STOLPA-wall_clock.docx',
            category: 'Clock',
            manufacture: 'STOLPA',
            model: '2018',
            quantity_of_inventory: 60,
            price: '25',
            sales: 30,
        },
        {
            id: 10,
            name: 'Folding chair',
            imageUrl:
            {
                imageUrl:  './images/products/product10/KALLAX-folding_chair-1.jpg',
                imageUrl2: './images/products/product10/KALLAX-folding_chair-2.jpg',
                imageUrl3: './images/products/product10/KALLAX-folding_chair-3.jpg',
                imageUrl4: './images/products/product10/KALLAX-folding_chair-4.jpg',
                imageUrl5: './images/products/product10/KALLAX-folding_chair-5.jpg',
                imageUrl6: './images/products/product10/KALLAX-folding_chair-6.jpg',
                imageUrl7: './images/products/product10/KALLAX-folding_chair-7.jpg',
                imageUrl8: './images/products/product10/KALLAX-folding_chair-8.jpg',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                You can fold the chair, so it takes less space when you're not using it.
                `,
                'Assembled size': 
                {
                    'Tested for': '100 kg',
                    'Width': '44 cm',
                    'Depth': '51 cm',
                    'Height': '77 cm',
                    'Seat width': '38 cm',
                    'Seat depth': '33 cm',
                    'Seat height': '46 cm',
                },
                'Pakage name': 'Folding chair KALLAX',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no':	'648.331.08',
                        'Package ':	'1',
                        'Length':	'89 cm',
                        'Width':	'44 cm',
                        'Height':	'9 cm',
                        'Weight':	'3.20 kg',
                        'Volume per package':	'35.2 l',
                    },
                }
            },
            careinstructions: 
            `
                Wipe clean with a cloth dampened in a mild cleaner.<br><br>
                Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                May be completed with FIXA self-adhesive floor protectors; protect the underlying surface against wear.<br><br>
                This chair has been tested for home use and meets the requirements for durability and safety, set forth in the following standards: EN 12520 and EN 1022.<br><br>
            `,
            designer: 'Lars Norinder',
            materials: 
            `
                Solid beech, Clear acrylic lacquer
            `,
            productDocument: './product_document/KALLAX-folding_chair.docx',
            category: 'Chairs',
            manufacture: 'KALLAX',
            model: '2017',
            quantity_of_inventory: 20,
            price: '13',
            sales: 10,
        },
        {
            id: 11,
            name: 'Extendable table',
            imageUrl:
            {
                imageUrl:  './images/products/product11/BILLY-extendable_table-1.jpg',
                imageUrl2: './images/products/product11/BILLY-extendable_table-2.jpg',
                imageUrl3: './images/products/product11/BILLY-extendable_table-3.jpg',
                imageUrl4: './images/products/product11/BILLY-extendable_table-4.jpg',
                imageUrl5: './images/products/product11/BILLY-extendable_table-5.jpg',
                imageUrl6: './images/products/product11/BILLY-extendable_table-6.jpg',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                    2 pull-out leaves included.
                `,
                'Assembled size': 
                {
                    'Length': '129 cm',
                    'Min. length': '90 cm',
                    'Max. length': '168 cm',
                    'Width': '90 cm',
                    'Height': '74 cm',
                },
                'Pakage name': 'Extendable table BILLY',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no':	'101.168.11',
                        'Package ':	'1',
                        'Length':	'115 cm',
                        'Width':	'92 cm',
                        'Height':	'7 cm',
                        'Weight':	'30.5 kg',
                        'Volume per package':	'69.5 l',
                    },
                }
            },
            careinstructions: 
            `
                Wipe clean with a cloth dampened in a mild cleaner.<br><br>
                Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                For increased stability, re-tighten the screws about two weeks after assembly and when necessary.<br><br>
                Combines with other furniture in the BJURSTA series.<br><br>
                Seats 2-4.<br><br>
            `,
            designer: 'Tord Björklund',
            materials: 
            `
                Table top/ Extension leaf: Particleboard, Oak veneer, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Underframe: Solid pine, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Leg: Particleboard, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Extension rail: Solid birch<br><br>
            `,
            productDocument: './product_document/KALLAX-folding_chair.docx',
            category: 'Tables',
            manufacture: 'BILLY',
            model: '2016',
            quantity_of_inventory: 19,
            price: '130',
            sales: 5,
        },
        {
            id: 12,
            name: 'Extendable table',
            imageUrl:
            {
                imageUrl:  './images/products/product12/STOLPA-extendable-table-1.jpg',
                imageUrl2: './images/products/product12/STOLPA-extendable-table-2.jpg',
                imageUrl3: './images/products/product12/STOLPA-extendable-table-3.jpg',
                imageUrl4: './images/products/product12/STOLPA-extendable-table-4.jpg',
                imageUrl5: './images/products/product12/STOLPA-extendable-table-5.jpg',
                imageUrl6: './images/products/product12/STOLPA-extendable-table-6.jpg',
                imageUrl7: './images/products/product12/STOLPA-extendable-table-7.jpg',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                    2 extension leaves included.
                `,
                'Assembled size': 
                {
                    'Length': '180 cm',
                    'Min. length': '140 cm',
                    'Max. length': '220 cm',
                    'Width': '84 cm',
                    'Height': '74 cm',
                },
                'Pakage name': 'Extendable table STOLPA',
                'Pakages': '1',
                'Package size & weight':
                {
                    'Pakage 1':
                    {
                        'Article no':	'801.162.66',
                        'Package ':	'1/2',
                        'Length':	'87 cm',
                        'Width':	'83 cm',
                        'Height':	'8 cm',
                        'Weight':	'29.00 kg',
                        'Volume per package':	'58.8 l',
                    },
                    'Pakage 2':
                    {
                        'Article no':	'801.162.66',
                        'Package ':	'2/2',
                        'Length':	'152 cm',
                        'Width':	'28 cm',
                        'Height':	'7 cm',
                        'Weight':	'13.00 kg',
                        'Volume per package':	'29.8 l',
                    },
                }
            },
            careinstructions: 
            `
                Wipe clean with a cloth dampened in a mild cleaner.<br><br>
                Wipe dry with a clean cloth.<br><br>
            `,
            goodtoknow:
            `
                For increased stability, re-tighten the screws about two weeks after assembly and when necessary.<br><br>
                Seats 4-6.<br><br>
            `,
            designer: 'Tord Björklund',
            materials: 
            `
                Table top/ Extension leaf: Particleboard, Oak veneer, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Underframe: Solid pine, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Leg: Particleboard, Oak veneer, Tinted clear acrylic lacquer<br><br>
                Rail/ Extension rail: Solid wood<br><br>
            `,
            productDocument: './product_document/STOLPA-extendable_table.docx',
            category: 'Tables',
            manufacture: 'STOLPA',
            model: '2017',
            quantity_of_inventory: 22,
            price: '150',
            sales: 8,
        },
        {
            id: 13,
            name: 'Shelf',
            imageUrl:
            {
                imageUrl:  './images/products/product13/SONGESAND-shelf.jpg',
                imageUrl2: '',
                imageUrl3: '',
                imageUrl4: '',
                imageUrl5: '',
                imageUrl6: '',
                imageUrl7: '',
                imageUrl8: '',
            },
            keyfeatures:
            {
                'Information of keyfeatures': 
                `
                    Untreated wood; can be treated with oil, wax or glazing paint for increased durability and a personal touch.
                `,
                'Assembled size': 
                {
                    'Width': '59.0 cm',
                    'Depth': '26.0 cm',
                    'Thickness': '24.5 cm',
                    'Max. load': '10 kg',
                },
                'Pakage name': 'Shelf SONGESAND',
                'Pakages': '2',
                'Package size & weight':
                {
                    'Shelf SONGESAND':
                    {
                        'Article no':	'501.787.03',
                        'Package ':	'1',
                        'Length':	'59 cm',
                        'Width':	'24 cm',
                        'Height':	'2 cm',
                        'Weight':	'1.40 kg',
                        'Volume per package':	'2.3 l',
                    },
                    'Bracket SONGESAND':
                    {
                        'Article no':	'766.960.09',
                        'Package ':	'2',
                        'Length':	'23 cm',
                        'Width':	'19 cm',
                        'Height':	'3 cm',
                        'Weight':	'0.20 kg',
                        'Volume per package':	'1.4 l',
                    },
                }
            },
            careinstructions: 
            `
                Wipe clean with a cloth dampened in a mild cleaner.<br><br>
                Wipe dry with a clean cloth.<br><br>
                Stains can be removed by using an eraser or fine sandpaper.<br><br>
            `,
            goodtoknow:
            `
            
            `,
            designer: 'IKEA of Sweden/Jon Karlsson',
            materials: 
            `
                <b>Bracket</b><br>
                Solid birch<br><br>
                <b>Shelf</b><br>
                Particleboard, Foil<br><br>
            `,
            productDocument: './product_document/SONGESAND-shelf.docx',
            category: 'Shelf',
            manufacture: 'SONGESAND',
            model: '2016',
            quantity_of_inventory: 0,
            price: '5.90',
            sales: 8,
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
        if ($scope.compareDatalength < 6)
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
        else
        {
            if (confirm("Maximun comparison is 6. Do you want to reset comparison zone?") == true)
            {
                $scope.compareDataReset();   
                alert("Reset completed");
            }
            else
            {
            }
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

    // Function click for drop item in compareData array
    $scope.compareDataDrop = function(idItem)
    {
        for(let i in $scope.compareData)
        {
            if($scope.compareData[i]["id"] == idItem)
            {
                $scope.compareData.splice(i,1);
            }
        }
        $scope.compareDatalength = $scope.compareData.length;
        if($scope.compareDatalength == 0)
        {
            $scope.disableCompareButton = true;
        }
        else
        {
            $scope.disableCompareButton = false;
        }
    }

    //SPECIFIC_PRODUCT

    $scope.checkNavigate= function()
    {
        if ($scope.compareDatalength >= 2)
        {
            if(confirm("Added to comparison. Do you want to navigate to comparison page?") == true)
            {
                window.location.href = "./compare.html"
            }
            else
            {}
        }
        else
        {}
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
        console.log($scope.compareData.length);
    }
    $scope.clickForReset = function()
    {
        $sessionStorage.$reset();
    }
});