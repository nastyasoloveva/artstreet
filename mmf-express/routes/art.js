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
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName()
       }, 

       { 
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName() 
       },

       {
        "date": faker.date.past(),
        "location": faker.address.latitude() + ' ' + faker.address.longitude(),
        "author": faker.name.findName()
       }
    ];

    res.render('object', 
        {"object": object}
    );
});


module.exports = router;
