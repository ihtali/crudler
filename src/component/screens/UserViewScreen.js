import { StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import UserView from "../entity/users/UserView";

const UserViewScreen =({route}) => {

    const {user}= route.params;
    return(
<Screen>
    <UserView user={user}/>
</Screen>
    );
};

const styles =StyleSheet.create({
});
export default UserViewScreen;