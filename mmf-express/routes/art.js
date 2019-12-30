const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/district', (req, res) => {
   var district = [ 
       { 
        "name": faker.address.state()
       }, 

       { 
        "name": faker.address.state() 
       },

       {
        "name": faker.address.state()
       }
    ];

    res.render('district', 
        {"district": district}
    );
});

router.get('/object', (req, res) => {
   var object = [ 
       { 
        "url": "https://myslo.ru/Content/BlogArticle/c6/26/c626188e-0630-4611-adc7-507dc28f9f1c_1.jpg",
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName()
       }, 

       { 
        "url": "https://zagge.ru/wp-content/uploads/2017/01/Eduardo_Kobra-14.jpg",
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName() 
       },

       {
        "url": "https://cs7.pikabu.ru/post_img/big/2018/04/15/6/1523783544117659603.jpg",
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName()
       }
    ];

    res.render('object', 
        {"object": object}
    );
});

router.get('/comments', (req, res) => {
   var comments = [ 
       { 
        "user": faker.internet.userName(),
        "comment": faker.lorem.sentence() 
       }, 

       { 
        "user": faker.internet.userName(),
        "comment": faker.lorem.sentence() 
       },

       {
        "user": faker.internet.userName(),
        "comment": faker.lorem.sentence()
       }
    ];

    res.render('comments', 
        {"comments": comments}
    );
});


module.exports = router;
