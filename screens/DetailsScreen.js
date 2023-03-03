import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview";

const DetailsScreen = ({route, navigation}) => {
  const { page } = route.params;
  console.log("song in details", page);
  return (
    <WebView source={{ uri: page }}/>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})