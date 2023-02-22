
/*
import { AsyncStorage } from 'react-native';

// Store data
AsyncStorage.setItem('records', JSON.stringify(records));

// Retrieve data
AsyncStorage.getItem('records').then((records) => {
  // Do something with the retrieved data
});
*/


import { AsyncStorage } from 'react-native';

// Store array
AsyncStorage.setItem('records', JSON.stringify(records));

// Retrieve array
AsyncStorage.getItem('records').then((records) => {
    // Do something with the retrieved array
});
