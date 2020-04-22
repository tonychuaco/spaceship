import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const SpaceImages = [
  {
    url: "https://i.imgur.com/9p4VsBw.jpg",
    caption: "When Galaxeys Collide"
  },
  {
    url: "https://i.imgur.com/dggemYH.jpg",
    caption: "Florida, from above."
  },
  {
    url: "https://i.imgur.com/deI932c.jpg",
    caption: "LEGO Spaceman"
  },
  {
    url: "https://i.imgur.com/j69hRu8.jpg",
    caption: "Star Wars with the crew"
  },
  {
    url: "https://i.imgur.com/YUipl9m.jpg",
    caption: "Japanese drone aboard the ISS"
  },
  {
    url: "https://i.imgur.com/VcCPjaV.jpg",
    caption: "Not the ISS ..."
  }
 ];

export default class App extends Component {

  state = {
    index: 0,
  }

  render() {

    const { index } = this.state;
    const { container, empty, image, imageCaption } = styles;

    const img = SpaceImages[index];
    const { url, caption } = img;

    return (
      <View style={container}>
        <View style={empty} />
        <ImageBackground
          source={{uri: url}} 
          style={image}
        >
          <Text style={imageCaption}>
            {caption}
          </Text>
        </ImageBackground>
        <View style={empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D4BDE',
  },
  image: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 320,
  },
  imageCaption: {
    textAlign: 'center',
    width: 320,
    backgroundColor: 'rgba(100, 100, 100, .5)',
    color: 'white',
  },
  empty: {
    flex: 1,
  }
})