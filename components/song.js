import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds"
import { Themes } from "../assets/Themes";

const { height, width } = Dimensions.get('window');

let Song = ({song, index}) => {
    // console.log("song", song);
    let albumnImage = song.imageUrl;

    return (
        <View style={styles.view}>
            <Text style={[styles.text, styles.index]}>{index}</Text>
            <View style={styles.albumnImageSection}>
                <Image 
                    style={styles.image}
                    source={{uri: albumnImage}}
                />
            </View>

            <View style={styles.songAndArtistSection}>
                <Text style={styles.text} numberOfLines={1}>{song.songTitle}</Text>
                {/* <View style={styles.artistList}>
                    {song.songArtists.map(
                        (artist, index) => {
                            return <Text numberOfLines={1} key={index} style={styles.text}>{artist.name}</Text>
                        }
                    )}
                </View> */}
                <Text numberOfLines={1} style={styles.textForArtist}>{song.songArtists[0].name}</Text>
            </View>

            <Text numberOfLines={1} style={[styles.text, styles.albumnNameSection]}>{song.albumName}</Text>
            <Text style={[styles.text, styles.duration]}>{millisToMinutesAndSeconds(song.duration)}</Text>
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
    index: {
        width: width * .07,
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
        // paddingLeft: height * .035,
        // backgroundColor: 'red',
    },
});

export default Song;