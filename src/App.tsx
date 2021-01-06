import React from 'react';
import { View, StyleSheet } from 'react-native';

import Tabbar from '~/components/tabbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ea3345',
  },
});
export const App: React.FC = () => (
  <View style={styles.container}>
    <Tabbar />
  </View>
);
