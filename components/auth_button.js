import { Pressable, Text, Image, StyleSheet, Dimensions, View } from "react-native";
import { Images, Themes } from "../assets/Themes"

const { height, width } = Dimensions.get('window');
let AuthButton = ({authFunc}) => {
    return (
        <Pressable
            onPress={authFunc}
            style={styles.authButton}
        >
            <Image
                style={styles.logo}
                source={Images.spotify}
            />
            <Text style={styles.authButtonText}>CONNECT WITH SPOTIFY</Text>

        </Pressable>
    );
}
const styles = StyleSheet.create({
    authButton: {
        borderRadius: '100%',
        backgroundColor: Themes.colors.spotify,
        paddingHorizontal: height * .03,
        paddingVertical: height * .02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    authButtonText: {
        color: 'white',
        paddingHorizontal: height * .01,
        fontSize: height * .016,
    },
    logo: {
        height: height * .03,
        width: height * .03,
    }  
});

export default AuthButton