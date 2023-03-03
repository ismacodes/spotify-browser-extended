import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const PreviewScreen = ({route, navigation}) => {
    const { song } = route.params;
    return (
        <SafeAreaView>
            <WebView source={{ uri: song }} />
        </SafeAreaView>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({});
