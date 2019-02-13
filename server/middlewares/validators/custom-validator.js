const CustomValidators = {},
  statuses = ['pending', 'settled'];

CustomValidators.isMinLen = (input, val) => input.length >= val;

CustomValidators.isMaxLen = (input, val) => input.length <= val;

CustomValidators.isHumanName = (input) => {
  if (typeof input !== 'string') {
    return false;
  }

  if (input.length < 2 || input.length > 50) {
    return false;
  }
  return /^([a-zA-Z,.\d\s\-])*$/.test(input);
};

CustomValidators.isEmailV2 = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

CustomValidators.isArray = input => Array.isArray(input);
CustomValidators.isStatusType = input => statuses.includes(input.toLowerCase());
CustomValidators.isIdType = input => (input + 1) > 0;
export default CustomValidators;