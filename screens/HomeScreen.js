import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import AuthButton from "../components/auth_button";
import Header from "../components/header";
import SongList from "../components/songList";
import 'react-native-gesture-handler';


export default function HomeScreen() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;
  
  if (token) {
    contentDisplayed = (
      <View style={styles.containerAuthed}>
        <Header />
        <SongList tracks={tracks}/>
      </View>
    ); 

    console.log("trackssss", tracks[0]);

  } else {
    contentDisplayed = (
      <View style={styles.container}>
        <AuthButton authFunc={getSpotifyAuth}/>
      </View>
    ); 
  }

  console.log("Token", token);
  console.log("tracks", tracks[1]);


  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerAuthed: {
    backgroundColor: Themes.colors.background,
    alignItems: "center",
    flex: 1,
  },
});