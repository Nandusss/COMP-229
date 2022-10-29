let User = require('../models/user');
let passport = require('passport');
const app = require('../config/app');

function getErrorMessage(err) {
  console.log("===> Erro: " + err);
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

//render signin page if not signed in, else go to contact list
module.exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('auth/signin', {
      title: 'Sign In',
      messages: req.flash('error') || req.flash('info')
    });
  }
  else
  {
    console.log(req.user);
    return res.redirect('/contactlist/list');
  }
};

//render signup page if not signed in, else go to contact list
module.exports.renderSignup = function(req, res, next) {
  if (!req.user) {

    // creates a empty new user object.
    let newUser = User();

    res.render('auth/signup', {
      title: 'Sign Up',
      messages: req.flash('error'),
      user: newUser,
      userName: req.user ? req.user.username : ''
    });

  } 
  else
  {
    return res.redirect('/user/signin');
  }
};

//signup if no error
module.exports.signup = function(req, res, next) {
  if (!req.user && req.body.password === req.body.password_confirm) {
    console.log(req.body);

    let user = new User(req.body);
    user.provider = 'local';
    console.log(user);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash('error', message);
        return res.render('auth/signup', {
          title: 'Sign Up',
          messages: req.flash('error'),
          user: user,
          userName: req.user ? req.user.username : ''
        });
      }
      req.login(user, (err) => {
        if (err) { 
          return next(err);
        }
        return res.redirect('/');
      });
    });
  }
  else
  {
    return res.redirect('/');
  }
};

module.exports.signout = function(req, res, next) {
  req.logout(function(err) {
    if (err) { 
      return next(err); 
    }
    res.redirect('/');
  });
};

//authenticate sign in.
module.exports.signin = function(req, res, next){
  passport.authenticate('local', {   
    successRedirect: req.session.url || '/contactlist/list',
    failureRedirect: '/user/signin',
    failureFlash: true
  })(req, res, next);
  delete req.session.url;
}