/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [isDarkMode, setDarkMode] = useState(true);
  const [userName, setuserName] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleTextChange = name => {
    setuserName(name);
  };

  const handleClear = () => {
    setuserName('');
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.rootViewDark : styles.rootViewLight}>
      {/* Dark Mode */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 20,
          paddingHorizontal: 20,
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'flex-end',
          alignContent: 'center',
        }}>
        <Text
          style={{
            color: isDarkMode ? '#fff' : '#000',
          }}>
          Dark Mode
        </Text>
        <Switch
          title="Dark Mode"
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            color: isDarkMode ? '#fff' : '#000',
            fontSize: 20,
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          Hi {userName}
        </Text>

        <TextInput
          style={{
            color: isDarkMode ? '#fff' : '#000',
            borderColor: isDarkMode ? '#fff' : '#000',
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 10,
          }}
          value={userName}
          placeholder="Enter your Name"
          onChangeText={handleTextChange}
        />
        <Button title="Clear" onPress={handleClear} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootViewDark: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  rootViewLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
});

export default App;
