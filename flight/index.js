var Flight = function () {
  this.data = {
    number: null,
    origin: null,
    destination: null,
    departs : null,
    arrives: null,
    actualDepart: null,
    actualArrive: null
  };

  this.fill = function(info) {  
    for (var property in this.data) {
      if (this.data[property] !== 'undefined') {
        this.data[property] = info[property];
      }
    }
  };

  this.triggerDepart = function () {
    this.data.actualDepart = Date.now();
  };

  this.triggerArrive = function () {
    this.data.actualArrive = Date.now();
  };

  this.getInformation = function () {
    return this.data;
  };
};

module.exports = function (info) {
  var instance = new Flight();
  instance.fill(info);
  return instance;
};
