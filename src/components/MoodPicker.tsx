import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {moodOptions} from '../constants/moodOptions';
import {MoodOptionType} from '../types/index';
import {theme} from '../theme/index';

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}
              onPress={() => setSelectedMood(option)}>
              <Text key={option.emoji} style={styles.moodText}>
                {option.emoji}
              </Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {option.emoji === selectedMood?.emoji && selectedMood.description}
            </Text>
          </View>
        ))}
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  moodText: {
    fontSize: 30,
  },
  moodItem: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 22,
    marginTop: 20,
    alignSelf: 'center',
    padding: 12,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
