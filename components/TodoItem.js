import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = props => {
   return(
       <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onDelete.bind(this, props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    listItem: {
        padding: '4%',
        marginTop: '4%',
        backgroundColor: '#EFEEEE',
    }
});

export default TodoItem;