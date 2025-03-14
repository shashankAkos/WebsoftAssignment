import Chats from "../screens/Chats";
import Feeds from "../screens/Feeds";
import Friends from "../screens/Friends";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";


export type RootStackParamList = {
    Main: {
        screen: string
    } | undefined;
}
export type MainStackParamList = {
    Feeds: undefined;
    Friends: undefined;
    Chats: undefined;
    Setting: undefined;
    Profile: undefined;
};

export const MainRoutes: {
    [key in keyof MainStackParamList]: React.ComponentType<any>;
} = {
    Feeds: Feeds,
    Friends: Friends,
    Chats: Chats,
    Setting: Setting,
    Profile: Profile,
};