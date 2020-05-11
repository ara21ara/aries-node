'use strict'

module.exports.formattedDate = formattedDate;


function formattedDate() {
  const now = new Date();
  const formattedDate = `${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDate()}`;

  return formattedDate;
};



