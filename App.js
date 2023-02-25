import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/auth_button";
import Header from "./components/header";
import SongList from "./components/songList";


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = (
      <SafeAreaView style={styles.containerAuthed}>
        <Header />
        <SongList tracks={tracks}/>
      </SafeAreaView>
    ); 
    console.log("trackssss", tracks[0]);

  } else {
    contentDisplayed = (
      <SafeAreaView style={styles.container}>
        <AuthButton authFunc={getSpotifyAuth}/>
      </SafeAreaView>
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
