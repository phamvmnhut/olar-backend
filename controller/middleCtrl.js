const convVie = require('../utils/convVie');

// eslint-disable-next-line no-unused-vars
exports.convVieSearch = (req, _, next) => {
  Object.keys(req.query).forEach((element) => {
    if (element.indexOf('__search') !== -1) {
      req.query[element] = convVie(req.query[element]).toLowerCase();
    }
  });
  next();
};

exports.paging = async function (request, response, next) {
  request.query.__limit = '20';
  request.query.__offset = '20';
  return next();
};
