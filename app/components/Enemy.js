import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

export default class Enemy extends Component {
    render() {
        return (
            <Animated.Image source={this.props.enemyImg}
                style={styles.animatedImage}
            ></Animated.Image>
        );
    }
}

const styles = StyleSheet.create({
    animatedImage : {
        height: 100,
        width: 100,
        position: 'absolute',
        bottom: 50,
        resizeMode: 'stretch',
        left: this.props.enemyStartposX,
        transform: [
            {
                translateY: this.props.moveEnemyval
            },
        ]
    }
});