module.exports = function(Persons) {
    //var info={"username":"demo","password":"demo"};
    Persons.auth = function(credentials, include, fn) {
    var self = this;

    self.login(credentials, include, function(err, token) {
      authInfo = {
        token: token
      };

      fn(err, authInfo);
    });
  };


  Persons.remoteMethod(
    'auth',
    {
      description: 'Login method with Role data information embedded in return',
      accepts: [
        {arg: 'credentials', type: 'object', required: true, http: {source: 'body'}},
        {arg: 'include', type: ['string'], http: {source: 'query' },
          description: 'Related objects to include in the response. ' +
          'See the description of return value for more details.'}
      ],
      returns: {
        arg: 'accessToken', type: 'object', root: true,
        description: 'User Model'
      },
      http: {verb: 'post'}
    }
  );
};
