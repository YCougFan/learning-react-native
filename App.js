import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas';
import Greetings from './Greetings';
import Blink  from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionBasics from './FixedDimensionBasics';
import FlexDirectionBasics from './FlexDirectionBasics';
import JustifyContentBasics from './JustifyContentBasics';
import AlignItemsBasics from './AlignItemsBasics';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasics from './ButtonBasics';
import Touchables from './Touchables';
import ScrollyViewing from './ScrollView';
import FlatListBasics from './FlatListBasics';
import SectionListBasics from './SectionListBasics';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greetings />
        <Bananas />
        <Text>Bananas!!!</Text>
        <Blink />
        <LotsOfStyles />
        {/* <FixedDimensionBasics /> */}
        {/* <FlexDirectionBasics /> */}
        {/* <JustifyContentBasics /> */}
        {/* <AlignItemsBasics /> */}
        {/* <PizzaTranslator /> */}
        {/* <ButtonBasics /> */}
        {/* <Touchables /> */}
        {/* <ScrollyViewing /> */}
        {/* <FlatListBasics /> */}
        {/* <SectionListBasics /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
