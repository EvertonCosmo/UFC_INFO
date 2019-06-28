import HomeScreen from '../Pages/HomeScreen'
import PostViewScreen from '../Pages/PostViewData'

export default StackNavigator = createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: HomeScreen
            },
            PostView: {
                screen: PostViewScreen
            },

        }
    ));