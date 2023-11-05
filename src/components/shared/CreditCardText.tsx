import {Text, View} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import {JSONObject} from '../../../types/Cards';

type TextProps = {
  text: string;
  containerWidth?: number;
  textStyle?: JSONObject;
  fontSize?: number;
  color?: string;
};

export const TextContainer = ({
  text,
  containerWidth = 100,
  textStyle,
  fontSize = 17,
  color = '#000',
}: TextProps) => {
  return (
    <View style={[t.hFull, {width: containerWidth}]}>
      <Text style={{fontSize, color, ...textStyle}}>{text}</Text>
    </View>
  );
};

export const CreditCardHeading = ({headings = []}: {headings: TextProps[]}) => {
  return (
    <View style={[t.wFull, t.flex, t.justifyBetween, t.flexRow]}>
      {headings.map((heading, k) => {
        return (
          <TextContainer
            color={'#8F8F8F'}
            fontSize={14}
            {...heading}
            key={`${k}_heading`}
          />
        );
      })}
    </View>
  );
};

export const CreditCardValueHeading = ({
  values = [],
}: {
  values: TextProps[];
}) => {
  return (
    <View style={[t.wFull, t.flex, t.justifyBetween, t.flexRow]}>
      {values.map((value, k) => {
        return <TextContainer {...value} key={`${k}_values`} />;
      })}
    </View>
  );
};
