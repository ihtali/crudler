import { StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/users/UserView";

const UserViewScreen =({navigation,route}) => {

const {user,onDelete,onModify }= route.params;
////handler
const gotoUserScreen =() => navigation.navigate('UserModifyScreen',{user,onModify});
    return(
<Screen>
    <UserView user={user} onDelete={onDelete} onModify={gotoUserScreen}/>
</Screen>
    );
};

const styles =StyleSheet.create({
});
export default UserViewScreen;