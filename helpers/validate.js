/* check if string is empty/blank */
String.prototype.isEmpty = function() {
  return this.trim() === "";
};

/* check if string has only alphabets */
String.prototype.hasOnlyAlphabets = function() {
  const regx = new RegExp("^[a-zA-Z ]+$");
  return regx.test(this);
};

/* check if string only has numbers */
String.prototype.hasOnlyNumbers = function() {
  return /^\d+$/.test(this);
};
/* check if string is a valid email address */
String.prototype.isValidEmail = function() {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    this
  );
};
String.prototype.lengthIsLessThan = function(limit) {
  return this.length <= limit;
};
