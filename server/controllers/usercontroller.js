var mongoose = require("mongoose");
var User = mongoose.model('User');

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, users) {
            res.json(users);
        });
    },

    create: function(req, res) {
        User.create({ name: req.params.username }, function(err, user) {
            res.redirect('/');
        });
    },
    remove: function(req, res) {
        User.remove({ name: req.params.username }, function(err) {
            if (err) {
                console.log("something went wrong removing the user")
            } else {
                console.log("user removed")
                res.redirect("/");
            }
        })
    },
    find: function(req, res) {
        User.findOne({ name: req.params.username },
            function(err, user) {
                if (err) {
                    console.log("user not found");
                } else {
                    res.json(user);
                }
            });
    },
}