import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {t} from 'react-native-tailwindcss';
import type {Cards} from '../../types/Cards';
import CardsNotFound from '../components/CardsNotFound';
import CreditCardInfo from '../components/shared/CreditCardInfo';
import Container from '../components/shared/Container';

const Home = () => {
  const [cardsData, setCardsData] = useState<Cards[]>(null);
  const hasCardData = Array.isArray(cardsData) && cardsData?.length > 0;

  return (
    <Container>
      {!hasCardData && <CardsNotFound />}
      {hasCardData && (
        <ScrollView style={[t.flex1, t.hScreen, t.flexGrow]}>
          {cardsData.map(card => (
            <View style={[t.flex1, t.hFull, t.mX4, t.mT4, t.itemsCenter]}>
              <CreditCardInfo
                type={card.type}
                name={card.name}
                expires={`${card.exp.expMonth}/${card.exp.expYear}`}
                lastFourDigits={card.number.toString().slice(-4)}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
