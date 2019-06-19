var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

/*
* the controller uses the ORM to get info from the database
* it then turns the data returned into an object
* and punts it out to the interwebs using the res.render() function and handlebars! 
*/

router.get("/", (req, res) => {
    // chuck i had a double burger... 
    burger.all((data) => {
        var burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject);
    });
});

router.put("/burger/:id", (req, res) => {
    // update isEaten value of a burger
    var id = req.params.id;
    burger.update(id, (data) => {
        var burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject);
    });
});

router.post("/burger", (req, res) => {
    var newBurger = req.body;
    burger.insert(newBurger.name, newBurger.isDevoured, (data) => {
        var burgerObject = {
            burgers: data
        }
        res.render("index", burgerObject);
    })
})

// Export routes for server.js to use.
module.exports = router;