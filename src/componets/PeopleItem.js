import React,{Component} from "react";
import {Text, View, StyleSheet, FlatList,Image, TouchableWithoutFeedbackBase } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as action from '../actions';
import { Left } from "react-bootstrap";
const style = StyleSheet.create({
    title: {
        top: -60,
        Left:100,
        fontSize:24,
    },
    image: {
        height: 100,
    },
    action: {
        top: -30,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 24,
    },
    icon:{
        position:'absolute',
        top:15,
        left:0,
        color: 'white',
        backgroundColor: 'rbga(255,255,255,0',
    },
})

const PeopleItem = (props) => {
    return (
        <TouchableWithoutFeedbackBase onPress={() => props.selectPerson(props.people)} >
            <View>
                <image
                source={require('../images/background.jpg')}
                style={style.image}
                />
                <Icon
                name={'user'}
                size={100}
                style={StyleSheet.icon}
                />
                <Text style={style.title}>{props.people.firstname}{props.people.firstname}</Text>
                <text style={style.action}>{props.people.company}</text>
            </View>
        </TouchableWithoutFeedbackBase>
    )
}

export default connect(null, action)(PeopleItem);