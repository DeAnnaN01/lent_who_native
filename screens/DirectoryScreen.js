
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {

    const renderDirectoryItem = ({ item: record }) => {
        return (
            <ListItem onPress={() => props.onPress(record.id)}>
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
            </ListItem >
        );
    };

    return (
        <FlatList
            data={props.records}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};


export default DirectoryScreen;