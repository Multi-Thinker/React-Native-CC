import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {useNavigation} from '@react-navigation/native';

export const textStyle = {
  fontSize: 18,
  fontFamily: 'fcRounded',
  color: '#000',
  textAlign: 'center',
};
const CardsNotFound = () => {
  const navigation = useNavigation();
  return (
    <View style={[t.flex1, t.flexRow, t.itemsCenter, t.selfCenter]}>
      <View
        style={[
          t.bgWhite,
          t.p0,
          t.pX1,
          t.selfCenter,
          t.itemsCenter,
          t.textCenter,
          {width: 244, height: 184},
        ]}>
        <Image
          source={require('../../assets/images/card-placeholder.png')}
          width={40}
          height={40}
        />
        <View style={[t.flex1, t.justifyBetween, t.selfCenter, t.itemsCenter]}>
          <Text style={textStyle}>No Cards Found</Text>
          <Text style={textStyle}>
            We recommend adding a cardfor easy payment
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('NativeAddNew')}>
            <Text style={{...textStyle, color: '#4AD8DA'}}>Add New Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardsNotFound;
