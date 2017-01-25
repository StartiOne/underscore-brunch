var UnderscoreCompiler, _, sysPath;

_ = require('underscore');

sysPath = require('path');

module.exports = UnderscoreCompiler = (function() {
  UnderscoreCompiler.prototype.brunchPlugin = true;

  UnderscoreCompiler.prototype.type = 'template';

  UnderscoreCompiler.prototype.extension = 'jst';

  function UnderscoreCompiler(config) {
    this.config = config;
    null;
  }

  UnderscoreCompiler.prototype.compile = function(data, path, callback) {
    var content, err, error, ref, result, templateSettings;
    try {
      templateSettings = (ref = this.config.plugins) != null ? ref.underscore : void 0;
      content = _.template(data, null, templateSettings).source;
      return result = "module.exports = " + content + ";";
    } catch (error1) {
      err = error1;
      return error = err;
    } finally {
      callback(error, result);
    }
  };

  return UnderscoreCompiler;

})();
