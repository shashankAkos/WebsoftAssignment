import { Circle, Path, Polyline, Svg } from "react-native-svg";

export const LeftLineArrow: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
    return (
        <Svg width="11" height="18" viewBox="0 0 11 18">
            <Path d="M10.8 1.60909L9.1527 0L0 9L9.16195 18L10.8 16.3909L3.27609 9L10.8 1.60909Z" fill="black" />
        </Svg>
    );
};
export const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = 24, color = 'black', ...props }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={width} fill={color}>
            <Path d="M12 7C8.686 7 6 9.686 6 13s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10a4 4 0 110-8 4 4 0 010 8z" />
            <Path d="M20 5h-3.586l-1.707-1.707A.997.997 0 0014 3H10a.997.997 0 00-.707.293L7.586 5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h3.586l2-2h4.828l2 2H20l.002 12H4z" />
        </Svg>
    );
};
export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ color = "black", ...props }) => {
    return (
        <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
            <Path d="M12.1719 10.0629H11.4492L11.1931 9.81589C12.0896 8.77301 12.6293 7.4191 12.6293 5.94625C12.6293 2.66209 9.96723 0 6.68307 0C3.39891 0 0.736816 2.66209 0.736816 5.94625C0.736816 9.23042 3.39891 11.8925 6.68307 11.8925C8.15591 11.8925 9.50983 11.3528 10.5527 10.4563L10.7997 10.7124V11.4351L15.3738 16L16.7368 14.6369L12.1719 10.0629ZM6.68307 10.0629C4.4052 10.0629 2.56643 8.22413 2.56643 5.94625C2.56643 3.66838 4.4052 1.82962 6.68307 1.82962C8.96094 1.82962 10.7997 3.66838 10.7997 5.94625C10.7997 8.22413 8.96094 10.0629 6.68307 10.0629Z" fill={color} />
        </Svg>
    );
};
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "20", ...props }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={width}>
            <Circle cx="12" cy="5" r="2" />
            <Circle cx="12" cy="12" r="2" />
            <Circle cx="12" cy="19" r="2" />
        </Svg>
    );
};
export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "24", color = 'black', ...props }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={width}>
            <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={color} />
        </Svg>
    );
};
export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "12", ...props }) => {
    return (
        <Svg
            viewBox="0 0 24 24" width={width} height={width} fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Circle cx="12" cy="12" r="10" />
            <Path d="M2 12h20" />
            <Path d="M12 2a15 15 0 0 1 0 20" />
            <Path d="M12 2a15 15 0 0 0 0 20" />
        </Svg>
    );
};
export const ReplyIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "20", color = 'black', ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
            <Path d="M14 9V5L21 12L14 19V15C8 15 4 17 2 22C2 15 6 10 14 9Z" fill={color} />
        </Svg>
    );
};
export const FeedIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "24", color = 'black', ...props }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={width} fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M12 22c-4 0-7-3-7-7 0-5 5-8 4-13 5 3 9 7 6 13 1 0 3-2 3-5 2 3 2 6 0 9s-4 3-6 3z" />
        </Svg>
    );
};
export const FriendsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "24", color = 'black', ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" >
            <Circle cx="6" cy="7" r="3" stroke={color} stroke-width="2" />
            <Circle cx="18" cy="7" r="3" stroke={color} stroke-width="2" />
            <Path d="M2 21V18C2 16.34 3.34 15 5 15H9C10.66 15 12 16.34 12 18V21" stroke={color} stroke-width="2" />
            <Path d="M12 21V18C12 16.34 13.34 15 15 15H19C20.66 15 22 16.34 22 18V21" stroke={color} stroke-width="2" />
        </Svg>

    );
};
export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '24', color = 'black', ...props }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={width} fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4v-18a2 2 0 0 1 2-2z" />
            <Path d="M8 10h8" />
            <Path d="M8 14h6" />
        </Svg>
    );
};
export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "24", color = 'black', ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="8" r="4" stroke={color} stroke-width="2" />
            <Path d="M4 21V19C4 16.24 6.24 14 9 14H15C17.76 14 20 16.24 20 19V21" stroke={color} stroke-width="2" />
        </Svg>
    );
};
export const SettingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "24", color = "black", ...props }) => {
    return (
        <Svg viewBox="0 0 50 50" width={width} height={width}>
            <Path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z " fill={color} />
        </Svg>
    );
}
export const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = ({ color = '#1D2225', ...props }) => {
    return (
        <Svg width="16" height="9" viewBox="0 0 18 11" fill="none">
            <Path d="M1.60909 0L0 1.6473L9 10.8L18 1.63805L16.3909 0L9 7.52391L1.60909 0Z" fill={color} />
        </Svg>
    );
};



