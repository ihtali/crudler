import { KeyboardAvoidingView,ScrollView,TextInput, StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";


import {Button,ButtonTray} from './Button.js';
import Icons from './Icons.js';


const Form = ({children,onSubmit,onCancel ,submitLabel,submitIcon}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
return (
    <KeyboardAvoidingView style={styles.formContainer}>
    <ScrollView contentContainerStyle={styles.formItems}>  
     {children}
     </ScrollView>   
     
     <ButtonTray>
      <Button label={submitLabel} icon={submitIcon} onClick={onSubmit}/>
      <Button label="Cancel" icon={<Icons.Cancel />}onClick={onCancel}/>

      </ButtonTray>

    </KeyboardAvoidingView>
);
};


const InputText = ({label,value,onChange})  => {
    // Initialisations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
    return (
        <View style={styles.item} >
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput 
      value={value} 
      onChangeText={onChange} 
      style={styles.itemTextInput}/>
     </View>
    );
    };

    const InputSelect = ({label ,prompt,options, value,onChange})  => {
        // Initialisations ---------------------
        // State -------------------------------
        // Handlers ----------------------------
        // View --------------------------------
        return (
       <View style={styles.item}> 
         <Text style={styles.itemLabel}>{label}</Text>
      
      <RNPickerSelect
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        placeholder={{ label: prompt, value: null, color: "whitesmoke" }}
        items={options.map((option) => ({
          label: option.label,
          value: option.value,
        }))}
        style={{
          inputIOS: styles.inputIOS,
          inputAndroid: styles.inputAndroid,
          placeholder: styles.placeholder,
        }}
        ></RNPickerSelect>
    </View>
  );
  };
         
       

// Compose Component
Form.InputText= InputText;
Form.InputSelect= InputSelect;


// Styles

const styles = StyleSheet.create({
    inputIOS: {
        height: 50,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
      },
      inputAndroid: {
        height: 50,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
      },
      placeholder: {
        color: 'gray',
        textAlign:'center',
      },
    formContainer:{
        gap:10,
    },
    formItems:{
        gap:5,
    },

    itemLabel:{
        color:'grey',
        fontSize:16,
        marginBottom:5,
      },
      itemTextInput:{
        height:50,
        paddingLeft:10,
        fontSize:16,
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        borderColor:'lightgrey',
    
      },
      itemPickerStyle: {
        height: 50,
        backgroundColor: 'whitesmoke',
      },
      itemPickerPromptStyle:{
       color:'gray',    
  },
});


export default Form;
