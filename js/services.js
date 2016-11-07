app.factory("firstService", function() {

  var results;

  return {
    getResults: function(newResults) {
      results = newResults || results;
      return results;
    }
  }

});
