function isNumber(val) {
  return typeof val === 'number' && !Number.isNaN(val);
}

function isNotNumber(val) {
  return !isNumber(val);
}

function isString(val) {
  return typeof val === 'string';
}

function isNotString(val) {
  return !isString(val);
}

function isArray(val) {
  return Array.isArray(val);
}

function isNotArray(val) {
  return !isArray(val);
}

function isNull(val) {
  return val === null;
}

function isNotNull(val) {
  return !isNull(val);
}

function isUndefined(val) {
  return val === undefined;
}

function isNotUndefined(val) {
  return !isUndefined(val);
}

function isEmptyString(val) {
  return isString(val) && val === '';
}

function isNotEmptyString(val) {
  return isString(val) && val.length > 0;
}

function isEmptyArray(val) {
  return isArray(val) && val.length === 0;
}

function isNotEmptyArray(val) {
  return isArray(val) && val.length > 0;
}

function isBoolean(val) {
  return typeof val === 'boolean';
}

function isNotBoolean(val) {
  return !isBoolean(val);
}

function isObject(val) {
  return isNotNull(val)
    && isNotUndefined(val)
    && isNotString(val)
    && isNotArray(val)
    && isNotNumber(val)
    && isNotBoolean(val);
}

function isObjectWithFields(object, fields) {
  return isObject(object)
    && fields.every((field) => Object.prototype.hasOwnProperty.call(object, field));
}

const validationRules = {
  isNull,
  isNotNull,
  isUndefined,
  isNotUndefined,
  isEmptyString,
  isNotEmptyString,
  isEmptyArray,
  isNotEmptyArray,
  isString,
  isNotString,
  isObject,
  isObjectWithFields,
  isNumber,
  isNotNumber,
  isBoolean,
  isNotBoolean,
};

export default validationRules;
