// // import Config from 'react-native-config';
// import Omise from 'omise-react-native';
// const publicKey = 'pkey_test_5wvisbxphp1zapg8ie6'; //Config.PUB_KEY;
// const secretKey = 'skey_test_5wvisdjjoqmfof5npzw'; //Config.SEC_KEY;
// Omise.config(publicKey, '2015-11-17');
// console.log({publicKey});
// type cardHolder = {
//   cardHolderName: string;
//   cardNumber: number;
//   expMonth: number;
//   expYear: number;
//   cvc: number;
//   amount?: number;
// };
// export const createToken = async (cardHolder: cardHolder) => {
//   console.log('am i hitting the server?');
//   await Omise.createToken({
//     card: {
//       name: cardHolder.cardHolderName,
//       city: 'Bangkok',
//       postal_code: 10320,
//       number: cardHolder.cardNumber,
//       expiration_month: cardHolder.expMonth,
//       expiration_year: Number(`20${cardHolder.expYear}`),
//       security_code: cardHolder.cvc,
//     },
//   });
// };

// // async function makeTransaction({
// //   cardHolderName,
// //   cardNumber,
// //   expMonth,
// //   expYear,
// //   cvc,
// //   amount,
// // }: cardHolder) {
// //   // try {
// //   // Step 1: Create Token
// //   //   console.log(token, 'token');
// //   //   const source = await Omise.createSource({
// //   //     type: 'internet_banking_bbl',
// //   //     amount: amount,
// //   //     currency: 'thb',
// //   //   });
// //   //   const {paid} = await Omise.createCharge({
// //   //     description: 'some description',
// //   //     amount: amount, // 5,000 baht
// //   //     currency: 'thb',
// //   //     capture: true,
// //   //     card: omiseTokenId,
// //   //   });
// //   //   return paid;
// //   // } catch (error) {
// //   //   console.log(error, 'from here');
// //   //   // throw new Error(error.response.data.message);
// //   // }
// // }

// // export default makeTransaction;
