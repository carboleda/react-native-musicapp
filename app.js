/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PlatziMusic extends Component {
    render() {
        const image = 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/26/5d/98/265d9849-40fb-34b6-3070-2c9447439164/source/313x0w.jpg';
        const name = 'Manolito y su trabujo';
        const likes = 200;
        const comments = 200;
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 20
    },
    artistBox: {
        backgroundColor: 'white',
        flexDirection: 'row'
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

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
