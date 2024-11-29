/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { openPolygonActivity } from './PolygonMod';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ScrollView contentInsetAdjustmentBehavior="automatic" >
    <Header />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>React Native Challenge</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.descriptionText}>
                    One small challenge for you: find the applied logic here in the React Native codebase! ;-)
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Open Polygon Activity"
                        onPress={openPolygonActivity} // Replace with your function
                        color="#6200EE" // Customize button color
                    />
                </View>
            </View>
        </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#6200EE',
    alignItems: 'center',
},
headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
},
contentContainer: {
    padding: 20,
},
descriptionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
},
buttonContainer: {
    marginTop: 20,
    backgroundColor: '#6200EE',
    borderRadius: 8,
    overflow: 'hidden',
},
});

export default App;
