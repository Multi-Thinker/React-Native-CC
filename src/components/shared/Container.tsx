import React from 'react';
import {View} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Nav from '../Nav';

const Container = ({
  children,
  hideAdd = false,
  title = 'Cards',
}: {
  children: any;
  hideAdd?: boolean;
  title?: string;
}) => {
  return (
    <View style={[t.bgWhite, t.wFull, t.hScreen, t.flex1, t.itemsCenter]}>
      <Nav hideAdd={hideAdd} title={title} />
      {children}
    </View>
  );
};

export default Container;
