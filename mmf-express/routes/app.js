const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/cities', (req, res) => {
   var cities = [ 
       { "name": "Minsk", "id": "minsk"}, 
  	   { "name": "San Francisco", "id": "sanfrancisco" }
  	];

    res.render('cities', 
  			{ "cities": cities}
  	);
});

router.get('/address', (req, res) => {
    res.render('address', 
        { "address": [ 
           { "name": "", "id": "byhist"}, 
           { "name": "Art gallery 1", "id": "byart1" },
           { "name": "Contemporary art", "id": "bycontemp" },
           { "name": "Design space", "id": "bydesign" }
          ]
        }
    );
});


router.get('/items', (req, res) => {
    res.render('items', 
        { "items": [ 
           { "name": "Главная елка (на Октябрьской площади)", "id": "shock", "url":"https://prodetok.by/img/elkinewyear2020/31.jpg"}, 
           { "name": "Елка на Площади Независимости", "id": "miamiparts1", "url":"https://prodetok.by/img/elkinewyear2020/8.jpg" },
           { "name": "Елка у цирка", "id": "bestshows", "url":"https://prodetok.by/img/elkinewyear2020/11.jpg" },
           { "name": "", "id": "designmiami", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH4448_PEOPLE_5_PS_LoRes.jpg" }
          ]
        }
    );
});

module.exports = router;
