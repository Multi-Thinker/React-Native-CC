export const identifyCardType = (creditCardNumber: string | number) => {
  if (creditCardNumber.toString().startsWith('4')) {
    return 'visa';
  } else if (creditCardNumber.toString().startsWith('5')) {
    return 'master';
  } else if (
    creditCardNumber.toString().startsWith('35') ||
    creditCardNumber.toString().startsWith('2131')
  ) {
    return 'JCB';
  }
  return '';
};
