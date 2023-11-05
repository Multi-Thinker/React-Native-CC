import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CreditCardHeading, CreditCardValueHeading} from './CreditCardText';
import {t} from 'react-native-tailwindcss';
import CreditCardNumber from './CreditCardNumber';
import {Icon, ImageTypes} from './Icons';
import * as Yup from 'yup';

const CreditCard = ({
  name,
  expires,
  type = 'master',
  lastFourDigits = '0000',
}: {
  name: string;
  expires: string;
  type: ImageTypes;
  lastFourDigits: string;
}) => {
  const [shouldPay, setShouldPay] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);
  const schema = Yup.number()
    .required('Please enter an amount.')
    .typeError('Please enter a valid number.')
    .min(5, 'Minimum amount is 5.')
    .max(100, 'Maximum amount is 100.');

  const performPayment = async () => {};
  const handlePay = () => {
    schema
      .validate(amount)
      .then(async () => {
        await performPayment();
        setShouldPay(false);
      })
      .catch(error => setError(error.message));
  };
  return (
    <View
      style={[
        t.bgWhite,
        t.mY1,
        t.wFull,
        t.hFull,
        t.shadowXl,
        t.flex1,
        t.itemsCenter,
        {
          paddingHorizontal: 31,
          paddingVertical: 23,
          minHeight: 179,
          borderRadius: 30,
          shadowColor: '#000',
        },
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setShouldPay(true);
          setError('');
          setAmount(null);
        }}
        style={[t.wFull]}>
        {!shouldPay ? (
          <>
            <View style={[t.wFull]}>
              <Icon image={type} />
            </View>
            <CreditCardNumber number={lastFourDigits} />
            <View
              style={[
                t.wFull,
                {height: 44},
                t.flex1,
                t.itemsCenter,
                t.justifyBetween,
              ]}>
              <View style={[t.wFull, {height: 17}]}>
                <CreditCardHeading
                  headings={[{text: 'Name on Card'}, {text: 'Expires'}]}
                />
              </View>
              <View style={[t.wFull, {height: 30}]}>
                <CreditCardValueHeading
                  values={[{text: name}, {text: expires}]}
                />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={[t.flex]}>
              <View
                style={[
                  t.flexRow,
                  t.itemsCenter,
                  t.justifyCenter,
                  t.selfCenter,
                  t.wFull,
                  t.mT10,
                  {height: 50},
                ]}>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                  placeholder="Enter amount"
                  style={[t.borderB2, t.mR2]}
                />
                <Button title="Pay" onPress={handlePay} />
              </View>
              {error && <Text style={{color: 'red'}}>{error}</Text>}
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CreditCard;
