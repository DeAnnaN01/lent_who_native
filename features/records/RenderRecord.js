import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';


const RenderRecord = ({ record }) => {
    if (record) {
        return (
            <Card containerStyle={{ padding: 0 }} >
                <Card.Image source={record.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }} >
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }} >
                            {record.id}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }} >
                    {record.item}
                </Text>
                <Text style={{ margin: 20 }} >
                    {record.person}
                </Text>
                <Text style={{ margin: 20 }} >
                    {record.date}
                </Text>
            </Card>
        )
    }

    return <View />;

};


export default RenderRecord;