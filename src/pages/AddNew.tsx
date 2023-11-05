import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../components/shared/Container';
import {t} from 'react-native-tailwindcss';
import {TextInputMask} from 'react-native-masked-text';
import VerifiedIcons from '../components/shared/VerifiedIcons';
import InputContainer from '../components/shared/InputContainer';
import InlineInputImages from '../components/shared/InlineInputImages';
import * as Yup from 'yup';
import {normalizeMMYYFormat} from '../utils/DateFormat';
import {identifyCardType} from '../utils/IdentifyCard';

import {useNavigation} from '@react-navigation/native';
import {storeItems} from '../utils/Storage';
import {Cards} from '../../types/Cards';

function AddNew(): JSX.Element {
  const [creditCardValue, setCreditCardValue] = useState<string>();
  const [customerName, setCustomerName] = useState('');
  const [exp, setExp] = useState<string>('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [cardType, setCardType] = useState<'JCB' | 'master' | 'visa' | ''>('');
  const navigation: any = useNavigation();
  const schema = {
    name: Yup.string()
      .max(50, 'max name limit is 50')
      .min(3, 'name should be at least 3 characters')
      .required(),
    cvv: Yup.string()
      .min(3, 'cvv is at least 3 digits')
      .max(4, 'cvv can not be more than 4 digits')
      .required(),
    exp: Yup.string()
      .required('Expiry Date is required')
      .matches(
        /^(0[1-9]|1[0-2])\/(?!00)\d{2}$/,
        'Expiry date format is Invalid. Use MM/YY format.',
      ),
    creditCard: Yup.string()
      .required('Credit Card Info is required')
      .matches(/^\d{16}$/, 'Invalid credit card number'),
    type: Yup.string()
      .oneOf(['master', 'visa', 'JCB'], 'credit card number is wrong')
      .required('credit card number is wrong'),
  };

  const handleAdd = () => {
    setError('');
    const formatExp = normalizeMMYYFormat(exp);
    const formatCC = creditCardValue?.replace(/\s/gm, '');
    setExp(formatExp);
    const type = identifyCardType(formatCC);

    const payload: Cards = {
      number: Number(formatCC),
      exp: {
        expMonth: Number(formatExp.split('/')[0]),
        expYear: Number(formatExp.split('/')[1]),
      },
      cvv: Number(cvv),
      name: customerName,
      type,
    };
    // delay
    Promise.all([
      schema.creditCard.validate(formatCC),
      schema.type.validate(type),
      schema.name.validate(customerName),
      schema.exp.validate(formatExp),
      schema.cvv.validate(cvv),
    ])
      .then(async () => {
        //
        await storeItems(payload);
        navigation.navigate('Home');
      })
      .catch(error => setError(error.message));
  };
  return (
    <Container hideAdd={true} title="">
      <View
        style={[
          t.wFull,
          t.pX8,
          t.pT4,
          t.flex1,
          t.itemsCenter,
          t.justifyBetween,
        ]}>
        <View>
          {/* credit card */}
          <InputContainer label="ATM/Debit/Credit card number">
            <TextInputMask
              type="credit-card"
              placeholder="0000 0000 0000 0000"
              value={creditCardValue}
              onChangeText={(text: any) => {
                setCreditCardValue(text);
                const formatCC = (text ?? '')?.replace(/\s/gm, '');
                setCardType(identifyCardType(formatCC));
              }}
              keyboardType="numeric"
              style={[
                t.w8_12,
                {
                  fontSize: 21,
                  paddingLeft: 16,
                  paddingTop: 8,
                },
              ]}
            />
            <View
              style={[
                t.flexRow,
                t.pT4,
                t.pL1,
                t.hFull,
                {width: 120, resizeMode: 'contain'},
              ]}>
              <InlineInputImages type={cardType} />
            </View>
          </InputContainer>
          {/* name */}
          <InputContainer label="Name on Card">
            <TextInputMask
              type="custom"
              options={{mask: Array(50).fill('*').join('')}}
              style={[t.wFull, {fontSize: 21}]}
              placeholder="Ty Lee"
              value={customerName}
              onChangeText={(text: any) => {
                setCustomerName(text);
              }}
            />
          </InputContainer>
          {/* expiry & cvv  */}
          <View style={[t.flexRow, t.justifyBetween, t.wFull]}>
            <View style={[t.w6_12]}>
              <InputContainer label="Expiry Date" width={t.w11_12}>
                <TextInputMask
                  type="custom"
                  options={{mask: '99/99'}}
                  style={[t.wFull, {fontSize: 21}]}
                  placeholder="MM/YY"
                  value={exp}
                  onChangeText={(text: any) => {
                    setExp(text);
                  }}
                />
              </InputContainer>
            </View>
            <View style={[t.w6_12]}>
              <InputContainer label="CVV" width={t.wFull}>
                <TextInputMask
                  type="custom"
                  options={{mask: '9999'}}
                  style={[t.wFull, {fontSize: 21}]}
                  placeholder="1234"
                  value={cvv}
                  onChangeText={(text: any) => {
                    setCvv(text);
                  }}
                />
              </InputContainer>
            </View>
          </View>
          {error && <Text style={{color: 'red'}}>{error}</Text>}
          {/* verified icons  */}
          <VerifiedIcons />
        </View>
        {/* add button */}
        <View
          style={[t.mB4, t.wFull, t.itemsCenter, t.selfCenter, {height: 50}]}>
          <TouchableOpacity activeOpacity={1} onPress={handleAdd}>
            <View
              style={[
                t.roundedFull,
                {
                  backgroundColor: '#4AD8DA',
                  height: 45,
                  width: 331,
                },
              ]}>
              <Text
                style={[
                  t.pT1,
                  {fontSize: 24, color: '#fff', textAlign: 'center'},
                ]}>
                Add Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export default AddNew;
