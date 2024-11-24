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
  UserUsertypeID: null,
  UserYearID: null,
  UserImageURL:null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  // Initializations ---------------------
  const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';
  const userTypesEndpoint = 'https://softwarehub.uk/unibase/api/usertypes';
  defaultUser.UserImageURL = "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  // State -------------------------------
  const [user, setUser] = useState(originalUser || defaultUser);
  const [years, isYearLoading] = useLoad(yearsEndpoint);
  const [userTypes, isUserTypesLoading] = useLoad(userTypesEndpoint);

  // Handlers ----------------------------
  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  // Dropdown Options --------------------
  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  const userTypeOptions = userTypes.map((type) => ({
    value: type.UsertypeID,
    label: type.UsertypeName,
  }));

const UserLEVEL = [
    { value: 0, label: '0 (Tutor)'},
    { value: 3, label: "3 (Foundation Year)" },
    { value: 4, label: "4 (First Year)" },
    { value: 5, label: "5 (Second year)" },
    { value: 6, label: "6 (Final Year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  const UserRegister = [
    { value: 0, label: 'Not Registered' },
    { value: 1, label: 'Registered' },

  ];
  
/// View --------------------------------
  const submitLabel = originalUser ? 'Modify' : 'Add';
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitIcon={submitIcon}
      submitLabel={submitLabel}
    >
      <Form.InputText
        label="User First Name"
        value={user.UserFirstname}
        onChange={(value) => handleChange('UserFirstname', value)}
      />

      <Form.InputText
        label="User Last Name"
        value={user.UserLastname}
        onChange={(value) => handleChange('UserLastname', value)}
      />

      <Form.InputText
        label="User Email"
        value={user.UserEmail}
        onChange={(value) => handleChange('UserEmail', value)}
      />

      <Form.InputSelect
        label="User Type"
        value={user.UserUsertypeID}
        onChange={(value) => handleChange('UserUsertypeID', value)}
        prompt="Select user type..."
        options={userTypeOptions}
        isLoading={isUserTypesLoading}
      />

      <Form.InputSelect
        label="User Year (Cohort)"
        value={user.UserYearID}
        onChange={(value) => handleChange('UserYearID', value)}
        prompt="Select user year..."
        options={cohorts}
        isLoading={isYearLoading}
      />

      <Form.InputSelect
        label="User Level"
        value={user.UserLevel}
        onChange={(value) => handleChange('UserLevel', value)}
        prompt="Select user level..."
        options={UserLEVEL}
      />

      <Form.InputSelect
        label="User Registered"
        value={user.UserRegistered}
        onChange={(value) => handleChange('UserRegistered', value)}
        options={UserRegister}
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
