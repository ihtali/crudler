import { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import Icons from '../../UI/Icons.js';
import Form from '../../UI/Form.js';


const defaultModule = {
    ModuleID: null,
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
};

const ModuleForm = ({ onSubmit, onCancel }) => {
    // Initialisations ---------------------
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Final Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    // State -------------------------------
    const [module, setModule] = useState(defaultModule);

    // Handlers ----------------------------
    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => onSubmit(module);

    // View --------------------------------
    const submitLabel = 'Add';
    const submitIcon = <Icons.Add />;

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitIcon={submitIcon}
            submitLabel={submitLabel}
        >
            <Form.InputText
                label="Module Code"
                value={module.ModuleCode}
                onChange={(value) => handleChange('ModuleCode', value)}
            />

            <Form.InputText
                label="Module Name"
                value={module.ModuleName}
                onChange={(value) => handleChange('ModuleName', value)}
            />

            <Form.InputSelect
                label="Module Level"
                prompt="Select module level..."
                options={levels}
                value={module.ModuleLevel}
                onChange={(value) => handleChange('ModuleLevel', value)}
            />

            <Form.InputText
                label="Module Leader"
                value={module.ModuleLeaderName}
                onChange={(value) => handleChange('ModuleLeaderName', value)}
            />

            <Form.InputText
                label="Module Image URL"
                value={module.ModuleImage}
                onChange={(value) => handleChange('ModuleImage', value)}
            />
        </Form>
    );
};

const styles = StyleSheet.create({
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
});

export default ModuleForm;
