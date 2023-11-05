import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {textStyle} from './CardsNotFound';
import {useNavigation} from '@react-navigation/native';

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
function Nav({
  title = 'Cards',
  hideAdd = false,
}: {
  title?: string;
  hideAdd?: boolean;
}): JSX.Element {
  const navigation: any = useNavigation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert('Confirm', 'Do you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBack,
    );

    return () => backHandler.remove();
  }, [handleBack, navigation]);

  const addNew = () => {
    if (hideAdd) return;
    navigation.navigate('NativeAddNew');
  };

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
        {!hideAdd && (
          <Image
            source={require('../../assets/images/add.png')}
            {...imageDimensios}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
export default Nav;
