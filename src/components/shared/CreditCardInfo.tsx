import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {CreditCardHeading, CreditCardValueHeading} from './CreditCardText';
import {t} from 'react-native-tailwindcss';
import CreditCardNumber from './CreditCardNumber';
import {Icon, ImageTypes} from './Icons';
import * as Yup from 'yup';
import {deleteItem} from '../../utils/Storage';
import makeTransaction from '../../utils/makePayment';

const CreditCard = ({
  name,
  expires,
  type = 'master',
  number,
  onPress,
  active = false,
  cvc,
}: {
  name: string;
  expires: string;
  type: ImageTypes;
  number: number;
  onPress: (e: number) => void;
  active?: boolean;
  cvc: number;
}) => {
  const lastFourDigits = number.toString().slice(-4);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [shouldPay, setShouldPay] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const schema = Yup.number()
    .required('Please enter an amount.')
    .typeError('Please enter a valid number.')
    .min(5, 'Minimum amount is 5.')
    .max(100, 'Maximum amount is 100.');

  const performPayment = async () => {
    // omise not reponding
    // return makeTransaction(
    //   name,
    //   number,
    //   Number(expires.split('/')[0]),
    //   Number(expires.split('/')[1]),
    //   cvc,
    //   Number(amount),
    // );
  };
  const handlePay = () => {
    setLoading(true);
    schema
      .validate(amount)
      .then(async () => {
        await performPayment()
          .then(() => {
            Alert.alert('success', 'payment was made');
            setShouldPay(false);
            onPress(0);
          })
          .catch(error => {
            Alert.alert('error', error.message);
          })
          .finally(() => {
            setLoading(false);
          });
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
          maxWidth: 420,
          shadowColor: '#000',
        },
      ]}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setShouldPay(true);
          onPress(number);
          setError('');
          setAmount(null);
        }}
        style={[t.wFull]}>
        {!active ? (
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
            <View style={[t.flex, t.wFull]}>
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
                <Button
                  title="Cancel"
                  color={'green'}
                  onPress={() => {
                    setShouldPay(false);
                    onPress(0);
                    setLoading(false);
                  }}
                />
                <Button
                  title="Delete"
                  color={'red'}
                  onPress={async () => {
                    await deleteItem(number);
                    onPress(0);
                    setLoading(false);
                  }}
                />
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
