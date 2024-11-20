import { KeyboardAvoidingView,ScrollView,TextInput, StyleSheet, Text, View } from 'react-native';
//import RNPickerSelect from "react-native-picker-select";
import { SelectList } from "react-native-dropdown-select-list";


import {Button,ButtonTray} from './Button.js';
import Icons from './Icons.js';
import { Switch } from 'react-native-gesture-handler';


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

    const InputSelect = ({ label, prompt, options, value, onChange }) => {
      const selectListData = options.map((option) => ({
        key: option.value,
        value: option.label,
      }));
    
      return (
        <View style={styles.item}>
          <Text style={styles.itemLabel}>{label}</Text>
          <SelectList
            setSelected={onChange}
            data={selectListData}
            placeholder={prompt}
            defaultOption={selectListData.find((item) => item.key === value)}
            boxStyles={styles.selectListBoxStyle}
            dropdownStyles={styles.selectListDropdownStyle}
          />
        </View>
      );
    };
    
    
         
  const InputCheck = ({ label,value,onChange}) => (
    <View style={styles.item}>
    <Text style={styles.itemLabel}>{label}</Text>
    <Switch
    value={value}
    onValueChange={onChange}
    trackColor={{false: "black", true: " black" }}
    thumbColor={value ? "white " : "white " }
    />

    </View>
  )
       

// Compose Component
Form.InputText= InputText;
Form.InputSelect= InputSelect;
Form.InputCheck= InputCheck;

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
  selectListBoxStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  selectListDropdownStyle: {
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgray",
  },
});


export default Form;
