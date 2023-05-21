import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import {useState} from 'react'; 

function GoalInput(props){
  const [enteredText, setEnteredText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredText(enteredText);
  }
  
  function onAddGoal(){
    props.onAddGoal(enteredText);
    setEnteredText('');
  };
    return  (
    <Modal visible = {props.visible} animationType='slide'>
    <View style = {styles.inputDirection}>
    <Image source={require('../assets/target.jpg')} style={styles.image}/>
    <TextInput  style = {styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredText}/>
    <View style = {styles.buttonContainer}>
      <View style = {styles.button}>
      <Button title='Cancel' color='red' onPress={props.onCancel}/>
      </View>
      <View style = {styles.button}>
      <Button title='Add a Goal!' onPress={onAddGoal}/>
      </View>
    </View>
  </View>
  </Modal>);

}
export default GoalInput;

const styles = StyleSheet.create({
  inputDirection : {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 8,
  },
  textInput : {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '90%',
  },
  buttonContainer:{
    flexDirection: 'row',
    margin: 8,
  },
  button:{
    marginHorizontal: 8,
    width: 100,
  },
  image:{
    width: 200,
    height: 200,
    margin:10
  }
});