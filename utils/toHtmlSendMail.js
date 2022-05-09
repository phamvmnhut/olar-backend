const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

exports.listHtmlFile = {
  resetPw: 'password-reset.html',
  confirmEmail: 'confirm_email.html',
};

exports.toHtmlSendMail = function (templateName, replacements) {
  const filePath = path.join(__dirname, `./${templateName}`);

  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);

  const htmlToSend = template(replacements);
  return htmlToSend;
};
