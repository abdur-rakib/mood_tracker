import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useAppContext} from '../AppProvider';

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <Text>{appContext.greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
