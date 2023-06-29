import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { RECORDS } from '../shared/records';
 const DirectoryScreen = () => {
    const [records, setRecords] = useState(RECORDS);
    const [selectedRecordId, setSelectedRecordId] = useState();
     const recordsArray = records.map((record, i) => {
        return { ...record, id: i + 1 };
    });
     const renderDirectoryItem = ({ item: record }) => {
        return (
            <ListItem onPress={() => setSelectedRecordId(record.id)}>
                <ListItem.Content>
                    <ListItem.Title>
                        Record #: {record.id}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        Item: {record.item}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                        Lent to: {record.person}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                        Date: {record.date}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
     return (
        <FlatList
            data={recordsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(record) => record.id.toString()}
        />
    );
};
 export default DirectoryScreen;