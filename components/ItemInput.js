import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ItemInput = props => {
    const [enteredItem, setEnteredItem] = useState('');
    
    const itemInputHandler= (enteredItem) => {
        setEnteredItem(enteredItem);
    };

    const addItemHandler = () => {
        props.onAddItem(enteredItem);
        setEnteredItem('');
    };
    
    return (
        <Modal 
            visible={props.visible} 
            animationType="slide"
        >
        <View style={styles.inputContainer}>
         <TextInput
            placeholder="Enter todo item"
            style={styles.inputTextField}
            onChangeText={itemInputHandler}
            value={enteredItem}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button
                title="CANCEL"
                color="red"
                onPress={props.onCancel}
            />
            </View>
            <View style={styles.button}>
            <Button
                title="ADD"
                onPress={addItemHandler}
            />
            </View>
          </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
      inputTextField: {
        width: '80%',
        padding: '3%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: '2%'
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%'
      },
      button: {
          width: '40%'
      }
});

export default ItemInput;