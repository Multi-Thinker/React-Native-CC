import React from 'react';
import {Image} from 'react-native';

export type ImageTypes =
  | 'add'
  | 'back'
  | 'card-placeholder'
  | 'JCB'
  | 'master'
  | 'omise'
  | 'verified-by-master'
  | 'verified-by-visa'
  | 'visa';

export const Icon = ({
  width = 66,
  height = 50,
  style = {},
  image = 'master',
}: {
  width?: number;
  height?: number;
  image?: ImageTypes;
  style?: {[k: string]: string};
}) => {
  let baseURL = '../../../assets/images/';
  const imageMethods = {
    add: () => require(`${baseURL}add.png`),
    back: () => require(`${baseURL}back.png`),
    'card-placeholder': () => require(`${baseURL}card-placeholder.png`),
    JCB: () => require(`${baseURL}JCB.png`),
    master: () => require(`${baseURL}master.png`),
    omise: () => require(`${baseURL}omise.png`),
    'verified-by-master': () => require(`${baseURL}verified-by-master.png`),
    'verified-by-visa': () => require(`${baseURL}verified-by-visa.png`),
    visa: () => require(`${baseURL}visa.png`),
  };

  return (
    <Image
      source={imageMethods[image]()}
      style={{width, height, objectFit: 'scale-down', ...style}}
    />
  );
};
