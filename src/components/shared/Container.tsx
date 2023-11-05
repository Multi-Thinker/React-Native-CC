import React from 'react';
import {View} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Nav from '../Nav';

const Container = ({
  children,
  hideAdd = false,
}: {
  children: any;
  hideAdd?: boolean;
}) => {
  return (
    <View style={[t.bgWhite, t.wFull, t.hScreen, t.flex1]}>
      <Nav hideAdd={hideAdd} />
      {children}
    </View>
  );
};

export default Container;
