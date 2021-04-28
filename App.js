import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import TodoItem from './components/TodoItem';
import ItemInput from './components/ItemInput';

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addItemHandler = (itemTitle) => {
    if(itemTitle.length === 0) {
      return;
    }
    setTodoItems(todoItems => [...todoItems, {id: Math.random().toString(), value: itemTitle}]);
    setIsAddMode(false);
  }

  const removeItemHandler = (itemId) => {
    setTodoItems(todoItems => {
      return todoItems.filter((item) => item.id !== itemId);
    });
  }
  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
}
  
  return (
    <View style={styles.screen}>
      <Button 
        title="Add new item"
        onPress={() => setIsAddMode(true)}
      />
      <ItemInput
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelItemAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoItems}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeItemHandler}
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: '5%',
    paddingTop: '20%'
  }
});