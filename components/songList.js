import { FlatList, Text, View, StyleSheet } from "react-native";
import Song from "./song"

let SongList = ({tracks}) => {
    return (
        <FlatList
            data={tracks}
            renderItem={
                ({ item, index }) => {
                    // console.log("yoo", index + 1);
                    return (
                        <View>
                            <Song song={item} index={index + 1}/>
                        </View>
                    );
                }
            }
            style={styles.list}

        />


    );
};

const styles = StyleSheet.create({
    list: {
        alignContent: 'center'
    }
});

export default SongList;