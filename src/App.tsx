import React, {useState} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Nav from './components/Nav';
import type {Cards} from '../types/Cards';
import CardsNotFound from './components/CardsNotFound';
import CreditCardInfo from './components/shared/CreditCardInfo';

function App(): JSX.Element {
  StatusBar.setHidden(true);
  const [cardsData, setCardsData] = useState<Cards[]>(null);
  const hasCardData = Array.isArray(cardsData) && cardsData?.length > 0;
  return (
    <View style={[t.bgWhite, t.wFull, t.hFull, t.flex1]}>
      <Nav />
      {/* {!hasCardData && <CardsNotFound />} */}
      <ScrollView style={[t.flex1, t.hScreen, t.flexGrow]}>
        <View style={[t.flex1, t.hFull, t.mX4, t.mT4, t.itemsCenter]}>
          <CreditCardInfo
            type="master"
            name="Ty Lee"
            expires="12/24"
            lastFourDigits="1234"
          />
          <CreditCardInfo
            type="master"
            name="Ty Lee"
            expires="12/24"
            lastFourDigits="1234"
          />
          <CreditCardInfo
            type="master"
            name="Ty Lee"
            expires="12/24"
            lastFourDigits="1234"
          />
          <CreditCardInfo
            type="master"
            name="Ty Lee"
            expires="12/24"
            lastFourDigits="1234"
          />
          <CreditCardInfo
            type="master"
            name="Ty Lee"
            expires="12/24"
            lastFourDigits="1234"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
