                {/*                 <Modal
                    animationType='slide'
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => setShowModal(!showModal)}
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>
                            Search Campsite Reservations
                        </Text>
                        <Text style={styles.modalText}>
                            Number of Campers: {campers}
                        </Text>
                        <Text style={styles.modalText}>
                            Hike-In?: {hikeIn ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {date.toLocaleDateString('en-US')}
                        </Text>
                        <Button
                            onPress={() => {
                                setShowModal(!showModal);
                                resetForm();
                            }}
                            color='#5637DD'
                            title='Close'
                        />
                    </View>
                </Modal>
                */}



                <View style={styles.formButton} >
                <Button  
                    onPress={() => navigation.navigate('Register')}
                    title='Register'
                    type='clear'
                    icon={<Icon  
                        name='user-plus'
                        type='font-awesome'
                        color='blue'
                        iconStyle={{marginRight: 10}}
                    />}
                    titleStyle={{color: 'blue'}}
                />
            </View>


