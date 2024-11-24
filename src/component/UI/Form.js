import { KeyboardAvoidingView,ScrollView,TextInput, StyleSheet, Text, View } from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";


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
    

// Compose Component
Form.InputText= InputText;
Form.InputSelect= InputSelect;

// Styles
const styles = StyleSheet.create({
    formContainer: {
      gap: 10,
    },
    formItems: {
      gap: 5,
    },
    itemLabel: {
      color: 'grey',
      fontSize: 16,
      marginBottom: 5,
    },
    itemTextInput: {
      height: 50,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: 'lightgrey',
    },
    selectListBoxStyle: {
      height: 50,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      paddingHorizontal: 10,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    selectListDropdownStyle: {
      borderRadius: 5,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'lightgray',
    },
  });
  

  export default Form;
  


