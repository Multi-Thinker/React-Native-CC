import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {t} from 'react-native-tailwindcss';
import type {Cards} from '../../types/Cards';
import CardsNotFound from '../components/CardsNotFound';
import CreditCardInfo from '../components/shared/CreditCardInfo';
import Container from '../components/shared/Container';
import {getItems} from '../utils/Storage';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState<Cards[]>(null);
  const hasCardData = Array.isArray(cardsData) && cardsData?.length > 0;
  const [active, setActive] = useState<number>();
  useEffect(() => {
    getItems()
      .then(data => {
        setCardsData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return (
    <Container>
      {!hasCardData && <CardsNotFound />}
      {hasCardData && !loading && (
        <ScrollView style={[t.flex1, t.hScreen, t.flexGrow]}>
          {cardsData.map((card, k) => (
            <View
              key={`${k}_card_view`}
              style={[t.flex1, t.hFull, t.mX8, t.mT4, t.itemsCenter]}>
              <CreditCardInfo
                active={card.number === active}
                onPress={setActive}
                key={`${k}_card`}
                type={card.type}
                name={card.name}
                cvc={card.cvv}
                expires={`${card.exp.expMonth}/${card.exp.expYear}`}
                number={card.number}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
