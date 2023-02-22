
import { useState } from 'react';
import { RECORDS } from '../shared/records';
import DirectoryScreen from './DirectoryScreen.js';

import { View, Text } from 'react-native';
import RecordInfoScreen from './RecordInfoScreen';




const Main = () => {
    const [records, setRecords] = useState(RECORDS);

    const [selectedRecordId, setSelectedRecordId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <Text>
                <DirectoryScreen records={records} onPress={recordId => setSelectedRecordId(recordId)} />;
                <RecordInfoScreen record={records.filter(record => record.id === selectedRecordId)[0]} />;
            </Text>
        </View >
    )
};


export default Main;