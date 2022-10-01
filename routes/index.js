var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { title: "Home", page: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render("index", { title: "Home", page: "home" });
});

/* GET About Me page. */
router.get('/about_me', function(req, res, next) {
  res.render("about_me", { title: "About Me", page: "about_me" });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render("projects", { title: "Projects", page: "projects" });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render("services", { title: "Services", page: "services" });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render("contact", { title: "Contact", page: "contact" });
});

module.exports = router;
