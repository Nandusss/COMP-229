/**
 * controller which controlls all the pages that are displayed
 */

module.exports.home = function(req, res, next) {
    res.render(
        'index', 
        { 
            title: 'Home'
        }
    );
  }

module.exports.about = function(req, res, next) {
    res.render(
        'about', 
        { 
            title: 'About' 
        }
    );
  }

module.exports.projects = function(req, res, next) {
    res.render(
        'projects', 
        {
            title: 'Projects' 
        }
    );
  }

module.exports.services = function(req, res, next) {
    res.render(
        'services',
        { 
            title: 'Services' 
        }
    );
  }

module.exports.contact = function(req, res, next) {
    res.render(
        'contact', 
        { 
            title: 'Contact' 
        }
    );
  }