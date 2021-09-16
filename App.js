import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [userName, setuserName] = useState('');

  // const toggleDarkMode = () => {
  //   setDarkMode(!isDarkMode);
  // };

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
      {/* <View
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
      </View> */}

      {/* Form Section */}
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
