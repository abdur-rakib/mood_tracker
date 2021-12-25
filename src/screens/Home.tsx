import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MoodPicker} from '../components/MoodPicker';
import {MoodOptionType, MoodOptionWithTimestamp} from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);
  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);
  console.log({moodList});
  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
