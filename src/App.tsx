import React from 'react';
import {Text, View, Image} from 'react-native';
import {t} from 'react-native-tailwindcss';

function App(): JSX.Element {
  return (
    <View
      style={[t.bgWhite, t.shadowLg, t.roundedFull, t.wFull, t.hFull, t.flex]}>
      <Text style={[(t as any).fcRoundedBold]}>Test</Text>
      <Image alt="master" source={require('../assets/images/master.png')} />
    </View>
  );
}

export default App;
