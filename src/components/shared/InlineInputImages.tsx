import React from 'react';
import {Image} from 'react-native';

const InlineInputImages = ({type}: {type: 'master' | 'visa' | 'JCB' | ''}) => {
  const imageStyle: any = {
    width: 25,
    height: 15,
    marginRight: 15,
    objectFit: 'contain',
  };
  const visaTint = type !== 'visa' ? {tintColor: 'gray'} : {};
  const masterTint = type !== 'master' ? {tintColor: 'gray'} : {};
  const JCBTint = type !== 'JCB' ? {tintColor: 'gray'} : {};
  return (
    <>
      <Image
        source={require('../../../assets/images/visa.png')}
        style={imageStyle}
        {...visaTint}
      />
      <Image
        source={require('../../../assets/images/master.png')}
        style={imageStyle}
        {...masterTint}
      />
      <Image
        source={require('../../../assets/images/JCB.png')}
        style={{...imageStyle, marginRight: 0}}
        {...JCBTint}
      />
    </>
  );
};

export default InlineInputImages;
