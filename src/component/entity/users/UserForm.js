import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icons from '../../UI/Icons.js';
import Form from '../../UI/Form.js';
import useLoad from '../../API/useLoad.js';

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserRegistered: false,
    UserLevel: null,
    UserType: null,
    UserYear: null,
};

const UserForm = ({ originalUser,onSubmit, onCancel }) => {
    // Initialisations ---------------------
    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg';

    const yearsEndpoint ='https://softwarehub.uk/unibase/api/years';
    const staffEndpoint ='https://softwarehub.uk/unibase/api/usertype';

    const levels = [
        { value: 3, label: ' Staff ' },
        { value: 4, label: ' Student ' },
        
    ];

    const level = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Final Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    const userRegisteredOptions = [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
    ];
    
    

    // State -------------------------------
    const [user, setUser] = useState(originalUser || defaultUser);
    const [years , isYearLoading ] = useLoad(yearsEndpoint);

    const [leaders , isLeadersLoading ] = useLoad(staffEndpoint);



    // Handlers ----------------------------
    const handleChange = (field, value) => setUser({ ...user, [field]: value });
    const handleSubmit = () => onSubmit(user);

    // View --------------------------------
    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon =  originalUser ?  <Icons.Edit/> : <Icons.Add /> ;

    const cohorts = years.map((year) =>({ value: year.YearID, label: year.YearName}));


    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitIcon={submitIcon}
            submitLabel={submitLabel}
        >
            <Form.InputText
                label="User ID"
                value={user.UserID}
                onChange={(value) => handleChange('User ID', value)}
            />

            <Form.InputText
                label="User first Name"
                value={user.UserFirstname}
                onChange={(value) => handleChange('UserFirstname', value)}
            />

            <Form.InputText
                label="User last Name"
                value={user.UserLastname}
                onChange={(value) => handleChange('UserLastname', value)}
            />

           <Form.InputText
                label="User Email"
                value={user.UserEmail}
                onChange={(value) => handleChange('UserEmail', value)}
            /> 

           <Form.InputSelect
                label="User Level"
                value={user.UserLevel}
                onChange={(value) => handleChange('UserLevel', value)}
                prompt="Select user level..."
                options={levels}
            />

            <Form.InputSelect
                label="User Type"
                value={user.UserType}
                onChange={(value) => handleChange('UserType', value)}
                prompt="Select user level..."
                options={level}
            />

            <Form.InputSelect
            label="Is User Registered?"
            value={user.UserRegistered}
            onChange={(value) => handleChange('UserRegistered', value)}
            options={userRegisteredOptions}
            />



            <Form.InputSelect
                label="User cohort"
                value={user.UserYear}
                onChange={(value) => handleChange('UserYear', value)}
                prompt="Select module cohort..."
                options={cohorts}
                isLoading={isYearLoading}
            />

            <Form.InputText
                label="User Image URL"
                value={user.UserImageURL}
                onChange={(value) => handleChange('UserImageURL', value)}
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

export default UserForm;
