import React from 'react';
import {Text, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

const InputContainer = ({
  children,
  label,
  width = t.wFull,
}: {
  children: any;
  label: string;
  width?: any;
}) => {
  return (
    <View style={[t.mY2]}>
      <Text
        style={[
          t.textBlack,
          {fontSize: 15, color: '#000', fontWeight: 'bold'},
        ]}>
        {label}
      </Text>
      <View
        style={[
          t.flexRow,
          width,
          t.roundedLg,
          t.justifyBetween,
          {
            borderWidth: 2,
            borderColor: '#E6E3E6',
            height: 56,
          },
        ]}>
        {children}
      </View>
    </View>
  );
};
export default InputContainer;
