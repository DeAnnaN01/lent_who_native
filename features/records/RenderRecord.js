import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import RecordInfoScreen, { selectedRecordId } from '../../screens/RecordInfoScreen';



const RenderRecord = () => {
    const record = selectedRecordId;
    if (record) {
        return (
            <Card containerStyle={{ padding: 10 }}>
                <Card.Title style={{ padding: 5 }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, backgroundColor: 'purple' }}>
                            {record.id}
                        </Text>
                    </View>
                </Card.Title>
                <Text style={{ margin: 5 }}>
                    {record.item}
                </Text>
                <Text style={{ margin: 5 }}>
                    {record.person}
                </Text>
                <Text style={{ margin: 5 }}>
                    {record.date}
                </Text>
            </Card>
        );
    }
    return <View />;
};
export default RenderRecord;