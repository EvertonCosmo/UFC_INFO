import {Icon} from 'react-native-vector-icons/FontAwesome'

const tabBarIcon = name => ({tintColor}) => (
    <Icon 
        style={{backgroundColor:'transparent'}}
        name={name}
        color={tintColor}
        size={24} />

);

export default tabBarIcon;