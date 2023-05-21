import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import {useState} from 'react'; 

import GoalItem from './components/goalItem';
import GoalInput from './components/goalinput';
export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    setGoals(currentGoals => [...currentGoals, {
                                                  key:Math.random().toString()
                                                  ,text:enteredText
                                                  }
                              ]);
  }

  function onDeleteHandler(id){
    setGoals(currentGoals => {
       return currentGoals.filter((goal) => goal.key !== id)});
    }



  return (<View style = {styles.appContainer}>
      <Button title='Add a Goal!' color="#5e0acc" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible = {modalIsVisible} onCancel = {endAddGoalHandler} onAddGoal={addGoalHandler}/>}
      <View style = {styles.goalsContainer}>
        <FlatList data = {goals}
        renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id = {itemData.item.key} onDeleteItem = {onDeleteHandler}/>
        }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer : {
    flex:5
  }
});
