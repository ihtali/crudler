import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icons from '../../UI/Icons.js';
import Form from '../../UI/Form.js';
import useLoad from '../../API/useLoad.js';

const defaultModule = {
    ModuleID: null,
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: null,
};

const ModuleForm = ({ originalModule,onSubmit, onCancel }) => {
    // Initialisations ---------------------
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL = 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg';

    const yearsEndpoint ='https://softwarehub.uk/unibase/api/years';
    const staffEndpoint ='https://softwarehub.uk/unibase/api/users/staff';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Final Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    // State -------------------------------
    const [module, setModule] = useState(originalModule || defaultModule);
    const [years , isYearLoading ] = useLoad(yearsEndpoint);

    const [leaders , isLeadersLoading ] = useLoad(staffEndpoint);



    // Handlers ----------------------------
    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => onSubmit(module);

    // View --------------------------------
    const submitLabel = originalModule ? 'Modify' : 'Add';
    const submitIcon =  originalModule ?  <Icons.Edit/> : <Icons.Add /> ;

    const cohorts = years.map((year) =>({ value: year.YearID, label: year.YearName}));

    const staff = leaders.map((leader) => ({value:leader.UserID, label:`${leader.UserFirstname} ${leader.UserLastname}` }));

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
                value={module.ModuleLevel}
                onChange={(value) => handleChange('ModuleLevel', value)}
                prompt="Select module level..."
                options={levels}
            />
           
           
            <Form.InputSelect
                label="Module cohort"
                value={module.ModuleYearID}
                onChange={(value) => handleChange('ModuleYearID', value)}
                prompt="Select module cohort..."
                options={cohorts}
                isLoading={isYearLoading}
            />
            
            <Form.InputSelect
                label="Module Leader"
                value={module.ModuleLeaderID}
                onChange={(value) => handleChange('ModuleLeaderID', value)}
                prompt="Select module leader..."
                options={staff}
                isLoading={isLeadersLoading}
            />
           

            <Form.InputText
                label="Module Image URL"
                value={module.ModuleImageURL}
                onChange={(value) => handleChange('ModuleImageURL', value)}
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
