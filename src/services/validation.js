const AppError = require('./appError')
var validator = require('validator');


class Validation {

isValidString (x,next) {

if (typeof x === "string") {
  return true ;
} else {
  return next (new AppError(
    `This is not a valid string : ${x} *#*${x} : هذا النص غير صحيح `,
    400
    )
    );
}

}

isValidNumber (x , next) {
  if (isNaN(x)) {
    return next( new AppError(
    `This is not a valid number : ${x}*#*${x} : هذا الرقم غير صحيح `,
    400
    )
    );
}else {
    return true;
}
}

isValidDate (x , next) {
var d_reg =/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;

if (d_reg.test(x)) {
    return true;
}
else{
    return next( new AppError(
    `This is not a valid date : ${x}*#*${x} : هذا التاريخ غير صحيح `,
    400
    )
    );
}
}

isValidBoolean (x , next) {
if( x === false || x === true) {
  return true;
}
else{
  return next( new AppError(
  `This is not a valid boolean  : ${x}*#*${x} : من فضلك ادخل بيانات متوافقة مع نوعها`,
  400
  )
  );
}
}

isValidArray (x , next) {
var length=x.length;

  if (length==0){
      return next( new AppError(
          `This is not a valid array  : ${x}*#*${x} : هذه المجموعة غير صحيحة`,
          400
          )
          );
  }else{
      return true;
  }

}

isEmail (x ,next) {
if(validator.isEmail(x)){
  return true;
}
else {
  return next (new AppError(
  `This is not a valid email  : ${x}*#*${x} : هذا الايميل غير صحيح `,
  400
  )
  );
}
}

isUrl (x ,next) {
if(validator.isURL(x,{protocols: ['http','https','ftp'],validate_length: true})){
  return true;
}
else {
  return next (new AppError(
  `This is not a valid url  : ${x}*#*${x} : هذا اللينك غير صحيح `,
  400
  )
  );
}
}

isTime (x , next) {
if(validator.isTime(x)){
  return true;
}
else {
  return next (new AppError(
  `This is not a valid time  : ${x}*#*${x} : هذا الوقت غير صحيح `,
  400
  )
  );
}
}

isPostalCode (x ,next) {
  if(validator.isPostalCode(x, locale)){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid code  : ${x}*#*${x} : هذا الكود غير صحيح `,
    400
    )
    );
}
}

isMobilePhone (x,next) {
var phoneno = /^\d{10}$/;

if(x.match(phoneno)){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid mobile phone  : ${x}*#*${x} : هذا الهاتف غير صحيح `,
    400
    )
    );
}
}

isCurrency (x ,next) {
  if(validator.isCurrency(x)){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid currency  : ${x}*#*${x} : هذه العملة غير صحيحة `,
    400
    )
    );
}
}

isDecimal (x, next) {
  if(validator.isDecimal(x)){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid decimal number  : ${x}*#*${x} : هذا الرقم غير صحيح `,
    400
    )
    );
}
}

dateValidation (x,next) {
  if(validator.isDate(x)){
  return true;
  }
  else {
  return next (new AppError(
    `This is not a valid date  : ${x}*#*${x} : هذا التاريخ غير صحيح `,
    400
    )
    );
  }
}

isPdf (x,next) {

var ext = x.substring(x.lastIndexOf('.') + 1);
if(ext == "pdf" ){
    return true;
}
else {
    return next (new AppError(
    `1This is not a valid pdf file  : ${x}*#*${x} : هذا الملف غير صحيح `,
    400
    )
    );
}
}

isWord (x , next) {
  var ext = x.substring(x.lastIndexOf('.') + 1);
if(ext == "docx" ){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid word file  : ${x}*#*${x} : هذا الملف غير صحيح `,
    400
    )
    );
}
}

isPhoto (x, next) {
var validExtensions = ['jpg','png','jpeg'];
var fileNameExt = x.substring(x.lastIndexOf('.') + 1);

if (!validExtensions.includes(fileNameExt)) {
    
    return next (new AppError(
        "Only these file picture types are accepted jpg-png-jpeg ,jpg-png-jpeg انواع ملفات الصور هذه هى التى فقط متاحة",
        400
    ));
}
else {
    return true;
}
}

isExcel (x, next) {
var ext = x.substring(x.lastIndexOf('.') + 1);
if(ext == "xlsx" ){
    return true;
}
else {
    return next (new AppError(
    `This is not a valid excel file  : ${x}*#*${x} : هذا الملف غير صحيح `,
    400
    )
    );
}
}
    
}

module.exports = Validation;