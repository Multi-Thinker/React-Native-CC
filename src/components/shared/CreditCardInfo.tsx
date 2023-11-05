import React from 'react';
import {View} from 'react-native';
import {CreditCardHeading, CreditCardValueHeading} from './CreditCardText';
import {t} from 'react-native-tailwindcss';
import CreditCardNumber from './CreditCardNumber';
import {Icon, ImageTypes} from './Icons';

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
          <CreditCardValueHeading values={[{text: name}, {text: expires}]} />
        </View>
      </View>
    </View>
  );
};

export default CreditCard;
