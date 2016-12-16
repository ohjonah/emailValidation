var express = require('express');
var app = express();
var path = require('path');
module.exports = app;

app.use("/public", express.static(__dirname + '/public'));

app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/evHome.html')
});

app.get('/updateSuccess', function (req, res) {
  res.sendFile(__dirname + '/updateSuccess.html')
});

app.get('/updateNoSuccess', function (req, res) {
  res.sendFile(__dirname + '/updateNoSuccess.html')
});

app.get('/evInputForm', function (req, res) {
  res.sendFile(__dirname + '/evInputForm.html')
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


// Credit: https://github.com/madhums/node-express-mongoose-demo/blob/master/app/utils/index.js

// module.exports = {
//   respond,
//   respondOrRedirect
// };
//
// function respond (res, tpl, obj, status) {
//   res.format({
//     html: () => res.render(tpl, obj),
//     json: () => {
//       if (status) return res.status(status).json(obj);
//       res.json(obj);
//     }
//   });
// }
//
// function respondOrRedirect ({ req, res }, url = '/', obj = {}, flash) {
//   res.format({
//     html: () => {
//       if (req && flash) req.flash(flash.type, flash.text);
//       res.redirect(url);
//     },
//     json: () => res.json(obj)
//   });
// }
//
// exports.emailSubmit = function(req, res, next) {
//   var body = req.body;
//   var emailInput = body.emailInput;
//
//   if (verifyEmployee(emailInput)) {
//     // console.log("i'm here")
//     res.message('Information updated!');
//     res.redirect('/updateSuccess');
//
//   } else {
//     console.log("missing");
//   };
//
// };
//
