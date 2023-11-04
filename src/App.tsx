import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Nav from './components/Nav';
import type {Cards} from '../types/Cards';
import CardsNotFound from './components/CardsNotFound';

function App(): JSX.Element {
  StatusBar.setHidden(true);
  const [cardsData, setCardsData] = useState<Cards[]>(null);
  const hasCardData = Array.isArray(cardsData) && cardsData?.length > 0;
  return (
    <View style={[t.bgWhite, t.wFull, t.hFull, t.flex1]}>
      <Nav />
      {!hasCardData && <CardsNotFound />}
    </View>
  );
}

export default App;
