import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {useState} from 'react'; 
export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [goals, setGoals] = useState([]);
  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, {
                                                  key:Math.random().toString()
                                                  ,text:enteredText}
                              ]);
    setEnteredText('');
  }

  function goalInputHandler(enteredText){
    setEnteredText(enteredText);
  }

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputDirection}>
        <TextInput  style = {styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add a Goal!' onPress={addGoalHandler}/>
      </View>
      <View style = {styles.goalsContainer}>
        <FlatList data = {goals}
        renderItem={itemData => {
          return <View style={styles.goalItem}>
          <Text style= {styles.goalTextColor}>{itemData.item.text}</Text>
          </View>
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
  inputDirection : {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput : {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '70%',
    marginRight:8,
  },
  goalsContainer : {
    flex:5
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor: '#5e0acc'
  },
  goalTextColor:{
    color: 'white'
  }
});
