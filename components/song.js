import { View, Image, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"
import { Themes } from "../assets/Themes";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

let Song = ({song, index}) => {
    let albumnImage = song.imageUrl;
    const navigation = useNavigation();

    return (
        <View 
            style={styles.view}
        >
            <Pressable 
                style={styles.play}
                onPress={(e) => {
                    e.stopPropagation();
                    navigation.navigate('PreviewScreen', { song: song.previewUrl });
                }}
            >
                <AntDesign name="play" size={20} styles={styles.play} color={Themes.colors.spotify} />
            </Pressable>

            <Pressable 
                style={styles.view} 
                onPress={() => {
                    navigation.navigate('DetailsScreen', { page: song.externalUrl });
                }}
            >
                <View style={styles.albumnImageSection}>
                    <Image 
                        style={styles.image}
                        source={{uri: albumnImage}}
                    />
                </View>

                <View style={styles.songAndArtistSection}>
                    <Text style={styles.text} numberOfLines={1}>{song.songTitle}</Text>
                    <Text numberOfLines={1} style={styles.textForArtist}>{song.songArtists[0].name}</Text>
                </View>

                <Text numberOfLines={1} style={[styles.text, styles.albumnNameSection]}>{song.albumName}</Text>
                <Text style={[styles.text, styles.duration]}>{millisToMinutesAndSeconds(song.duration)}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    textForArtist: {
        color: Themes.colors.gray,
    },
    view: {
        // backgroundColor: 'red',
        width: width * .95,
        flexDirection:'row',
        alignItems: 'center',
        // margin: height * .01,
    },
    image: {
        height: height * .05,
        width: height * .05,
    },
    artistList: {
        flexDirection: 'row',
    },
    play: {
        width: width * .09,
        paddingLeft: width * .01,
    },
    albumnImageSection: {
        width: width * .112,
    },
    songAndArtistSection: {
        flexDirection: 'column',
        width: width * .35,
        padding: height * .015,
    },
    albumnNameSection: {
        width: width * .32,
        padding: height * .015,
    },
    duration: {
        width: width * .1,
    },
});

export default Song;