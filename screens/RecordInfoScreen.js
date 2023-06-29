import React from 'react';
import RenderRecord from '../features/records/RenderRecord';
import { Button } from 'react-native-elements';


const RecordInfoScreen = ({ selectedRecordId }) => {
    return (
        <>
            <RenderRecord record={selectedRecordId} />
            <Button title="Example Button" />
        </>
    );
};

export default RecordInfoScreen;