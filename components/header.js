import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import { Themes, Images } from "../assets/Themes";

const { height, width } = Dimensions.get('window');

let Header = () => {
    // console.log("song in header: ", song);

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={Images.spotify}
            />
            <Text style={styles.text}>My Top Tracks</Text>            
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: height * .015,
    },
    text: {
        color: 'white',
        fontSize: height * .02,
        padding: height * .01,
    },
    image: {
        height: height * .03,
        width: height * .03,
    }
});

export default Header;