import React from 'react';
import {Text, View} from 'react-native';
import {JSONObject} from '../../../types/Cards';
import {t} from 'react-native-tailwindcss';

export const CreditCardText = ({
  style = {},
  text = '••••',
}: {
  style?: JSONObject;
  text?: string;
}) => {
  return (
    <Text style={{marginRight: 10, fontSize: 23, color: '#000', ...style}}>
      {text}
    </Text>
  );
};

const CreditCardNumber = ({
  number = '0000',
  style = {},
}: {
  number?: string;
  style?: JSONObject;
}) => {
  return (
    <View style={[t.wFull, {height: 30}]}>
      <View style={[t.flexRow, t.wFull]}>
        {Object.keys(Array(3).fill('')).map(k => (
          <CreditCardText key={k} />
        ))}
        <CreditCardText text={number} style={style} />
      </View>
    </View>
  );
};

export default CreditCardNumber;
