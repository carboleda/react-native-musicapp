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
    ScrollView,
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
            /*Forma 1: Resolver el problema del scroll de los items usando ScrollView.
            Es la forma mas facil pero no optima para nuestro caso ya que rederiza todos
            los items incluso aunque no se alcancen a mostrar en la pantalla.
            El ScrollView, es un buen componente cuando hablamos de pocos items o 
            contenido estatico como por ejemplo texto largo o un formulario,
            ya que dibuja todos los elementos al mismo tiempo en la pantalla.
            */
            <ScrollView style={styles.container}>
                {
                    Array(500).fill(artist).map((artist) => {
                        return <ArtistBox artist={artist} />
                    })
                }
            </ScrollView>
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
