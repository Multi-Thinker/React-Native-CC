import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {textStyle} from './CardsNotFound';

export const navStyle = [
  t.wFull,
  t.justifyBetween,
  t.flexRow,
  t.pX4,
  t.pB2,
  t.pT4,
  {
    height: '47px',
  },
];

const imageDimensios = {width: 10, height: 17};
function Nav({title = 'Cards'}: {title?: string}): JSX.Element {
  const handleBack = () => {};
  const addNew = () => {};

  return (
    <View style={navStyle}>
      <TouchableOpacity onPress={handleBack}>
        <Image
          source={require('../../assets/images/back.png')}
          {...imageDimensios}
        />
      </TouchableOpacity>
      <Text style={{...textStyle, fontWeight: 'bold', fontSize: 17}}>
        {title}
      </Text>
      <TouchableOpacity onPress={addNew}>
        <Image
          source={require('../../assets/images/add.png')}
          {...imageDimensios}
        />
      </TouchableOpacity>
    </View>
  );
}
export default Nav;
