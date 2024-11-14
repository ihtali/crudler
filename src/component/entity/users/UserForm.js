import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icons from '../../UI/Icons.js';
import Form from '../../UI/Form.js';

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserRegistered: false,
    UserLevel: null,
    UserUsertypeName: null,
    UserYearName: null,
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
        { value: 3, label: '3 ' },
        { value: 4, label: '4 ' },
        { value: 5, label: '5 ' },
        { value: 6, label: '6 ' },
        { value: 7, label: '7 ' },
    ];
    

    // State -------------------------------
    ////const yearsEndpoint ='https://softwarehub.uk/unibase/api/years';
    ///const staffEndpoint ='https://softwarehub.uk/unibase/api/usertype';
    const [user, setUser] = useState(originalUser || defaultUser);
    /*const [years , isYearLoading ] = useLoad(yearsEndpoint);

    const [leaders , isLeadersLoading ] = useLoad(staffEndpoint);*/



    // Handlers ----------------------------
    const handleChange = (field, value) => setUser({ ...user, [field]: value });
    const handleSubmit = () => onSubmit(user);

    // View --------------------------------
    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon =  originalUser ?  <Icons.Edit/> : <Icons.Add /> ;

   //// const cohorts = years.map((year) =>({ value: year.YearID, label: year.YearName}));

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitIcon={submitIcon}
            submitLabel={submitLabel}
        >

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

             <Form.InputSelect
                label="User Level"
                value={user.UserLevel}
                onChange={(value) => handleChange('UserLevel', value)}
                prompt="Select user level..."
                options={level}
            />


           <Form.InputText
                label="User Email"
                value={user.UserEmail}
                onChange={(value) => handleChange('UserEmail', value)}
            /> 

           
            <Form.InputText
                label="User Type"
                value={user.UserUsertypeName}
                onChange={(value) => handleChange('UserUsertypeName', value)}
                prompt="Select user type..."
                options={levels}
            />

            <Form.InputCheck
                label="User Registered"
                value={user.UserRegistered}
                onChange={(value) => handleChange('UserRegistered', value)}
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
