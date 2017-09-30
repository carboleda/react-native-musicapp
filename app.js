/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import ArtistBox from './ArtistBox';

export default class PlatziMusic extends Component {
    render() {
        const artist = {
            image: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/26/5d/98/265d9849-40fb-34b6-3070-2c9447439164/source/313x0w.jpg',
            name: 'Manolito y su trabuco',
            likes: 200,
            comments: 200
        };

        return (
            <View style={styles.container}>
                <ArtistBox artist={artist} />
                <ArtistBox artist={artist} />
                <ArtistBox artist={artist} />
                <ArtistBox artist={artist} />
                <ArtistBox artist={artist} />
                <ArtistBox artist={artist} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 20
    }
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
