import React from 'react';
import {Image, View} from 'react-native';
import {t} from 'react-native-tailwindcss';

const VerifiedIcons = () => {
  return (
    <View
      style={[
        t.flexRow,
        t.justifyBetween,
        t.itemsCenter,
        t.selfCenter,
        {width: 192, marginTop: 40},
      ]}>
      <Image source={require('../../../assets/images/verified-by-visa.png')} />
      <Image
        source={require('../../../assets/images/verified-by-master.png')}
      />
      <Image source={require('../../../assets/images/omise.png')} />
    </View>
  );
};

export default VerifiedIcons;
