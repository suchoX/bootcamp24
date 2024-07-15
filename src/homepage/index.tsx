import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import {NAVIGATE_MESSAGE, WELCOME_MESSAGE} from '../stringliterals';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcomeMessage: {
    fontSize: 16,
    padding: 20,
  },
});

interface HomeProps {
  navigation: NativeStackScreenProps<RootStackParamList, 'home'>;
}

const Home = (props: HomeProps) => {
  const {navigation} = props;

  const onButtonPress = () => {
    navigation.navigate('list');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>{WELCOME_MESSAGE}</Text>
      <Button title={NAVIGATE_MESSAGE} onPress={onButtonPress} />
    </View>
  );
};

export default Home;
