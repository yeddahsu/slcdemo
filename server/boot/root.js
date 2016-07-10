module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  router.get('/login', function(req, res){
      var info={"username":"111","password":"111"};
      server.models.persons.auth(info, function(err, token){
           if (err) res.send(err);

           res.send(token);
      });
  });
  
  router.get('/me', function(req, res){
    server.models.persons.findById(req.query.id, function(err, person){
        if (err) res.send(err);

        res.send(person);
    });
  });
  
  server.use(router);
};
