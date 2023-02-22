import React, { Component } from 'react';
import { FlatList } from 'react-native';

class RecordList extends Component {
    constructor(props) {
        super(props);
        const ds = new FlatList.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.records)
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(record) => <Record record={record} />}
            />
        );
    }
}
export default RecordList;