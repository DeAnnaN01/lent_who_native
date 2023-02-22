
import React, { Component } from 'react';
import { TextInput } from 'react-native';

import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';

const RecordInput = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        // Store data
        AsyncStorage.setItem('records', JSON.stringify(records));
    }, [text]);

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setText(text)}
            value={text}
        />
    );
}
export default RecordInput;