/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends Component {
    render() {
        //Destructing EMC6
        const { image, name, likes, comments } = this.props.artist;
        
        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-heart-outline" size={30} color="gray" />
                            <Text style={styles.counter}>{likes}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                            <Text style={styles.counter}>{comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {//solo para funciona en ios
            height: 1,
            width: -2,//al poner un valor negativo la sombra se muestra del lado izquierdo
        },
        elevation: 2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        backgroundColor: '#fff',
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 15,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    counter: {
        color: 'gray'
    }
});
