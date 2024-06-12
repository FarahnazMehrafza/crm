import React,{Component} from "react";
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';
import { MaterialBottomTabView } from "@react-navigation/material-bottom-tabs";
import { getRightStyles } from "react-native-paper";
import { stat } from "fs";

const Styles= StyleSheet.create({
    title: {
        top: -75,
        left: 100,
        fontSize: 24,
    },
    title2: {
        top: -70,
        left: 100,
        fontSize: 24,
    },
    image: {
        height: 100,
        backgroundColor: 'transparent',
    },
    closeIcon: {
        position: 'absolute' ,
        top: 10,
        right: 5,
        color: 'red',
    },
    closeIcon: {
        position: 'absolute' ,
        top: 15,
        left:0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        FlexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 5,
    },

    finalText: {
        FlexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
    },
    textIcons:{
        color: '#26a69',
    },
    actionArea: {
        paddingTop:10,
        FlexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    editIcon: {
        color:'#26a6e4'
    },
    sections: {
        flexDirection: 'row',
        paddingLeft:10,
        paddingTop: 10,
        width: 100,
    },
    deletIcon: {
        color: '#e9a69a',
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddinButtom: 10,
        justifyContent: 'space-around',
        alignItems: 10,
        MarginBottom: 10,
        marginTop: 20,
    },   
    actionImage: {
        width: 100,
        height: 100,
    }
});
class DetailView extends Component {
   updateTest() {
    this.props.updateContact( this.props.person);
   }
    render() {
        return (
            <View style={Style.container} > 
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={require=('../images/background.jpg')}
                    style={Style.image}
                />
                <EvilIcon name={'user'} size={100} style={Style.icon}/>
                <SimpleIcon name={'close'} size={30} style={Style.closeIcon}
                    onpress={() => this.props.noneSelected()}
                />
                <Text style={Style.title1}>{this.props.person.firstName} {this.props.person.LasttName} </Text>
                <Text style={Style.title2}>{this.props.person.company} </Text>
                <View style={Style.textArea}>
                    <MaterialIcon name={'phone'} size={40} style={Style.textIcons}/>
                    <Text style={Style.finalText}>{this.props.person.phone} </Text>
                </View>
               
                <View style={getRightStyles.textArea}>
                    <MaterialIcon name={'email'} size={40} style={Style.textIcons}/>
                    <Text style={Style.finalText}>{this.props.person.email} </Text>
                </View>
                <View style={Styles.textArea}>
                    <MaterialIcon name={'assignment'} size={40} style={Style.textIcons}/>
                    <Text style={Style.finalText}>{this.props.person.project} </Text>
                </View>
                <View style={Styles.textArea}>
                    <MaterialIcon name={'mode-edit'} size={40} style={Style.textIcons}/>
                    <Text style={Style.finalText}>{this.props.person.notes} </Text>
                </View >
                <View style={Styles.editDeleteArea}>
                    <TouchableOpacity style= {style.sections}
                        onPress={()=> {this.updateTest();}}
                    >
                    <MaterialIcon name={"autorenew" } size={40} style={style.editIcon}/>
                    <text style={Styles.finalText}> EDIT</text>
                   </TouchableOpacity>
                   <TouchableOpacity style= {Styles.sections}
                         onPress={()=> {this.props.deleteContact(this.props.person._id);}}
                    >
                    <MaterialIcon name={"delet-forever" } size={40} style={style.editIcon}/>
                    <text style={Styles.finalText}> DELETE</text>
                   </TouchableOpacity>

                   <View style={Styles.actionArea}>
                     <TouchableOpacity>
                       <image
                         source={require('../images/call.png')}
                         style={Styles.actionImage}
                       />
                     </TouchableOpacity>
                     <TouchableOpacity>
                       < Image
                         source={require('../images/email.png')}
                         style={Styles.actionImage}
                       />
                     </TouchableOpacity>
                     <TouchableOpacity>
                       <Image
                         source={require('../images/sms.png')}
                         style={Styles.actionImage}
                       />
                     </TouchableOpacity>
                   </View>
                   <View style={Styles.actionArea}>
                    <Text>call</Text>
                    <Text>email</Text>
                    <Text>SMS</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const mapStarToProps = state => {
   return {
     person: state.personSelected,
     toUpdate: state.toUpdate,
   }
 }

export default connect(mapStarToProps,actions) (DetailView);