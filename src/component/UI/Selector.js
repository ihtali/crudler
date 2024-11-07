import { Pressable,Vibration } from 'react-native';

const Selector = ({children,onPress,style,pressedStyle}) => {
////////Initalization-------
////////State-------
////////Handlers--------
const handlePress =() =>{
    Vibration.vibrate(5);
    onPress();
}
////////View-------
return(
    <Pressable 
    onPress={handlePress}
     style ={ ({pressed}) => [style,pressed && pressedStyle]}
     >
    {children}
    </Pressable>
);
};

export default Selector;