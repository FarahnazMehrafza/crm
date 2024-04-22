import React,{Component} from "react";
import { View,StyleSheet, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import { Button, ThemeContext } from "@react-native-material/core";
import * as action from '../actions';
import { TextInput } from "react-native-paper";
import { stat } from "fs";

const styles = StyleSheet.create ({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 20, 
        paddingLeft: 20 ,
        justi3fyContent: 'space-between',
    },
    fieldStyles:{
        height:70,
        color:'#f47100'
    },
    addButton:{
        marginTop:20,
    }
})

class UpdatePerson extends Component {
    onUpdatePress() {
        const {FirstName, lastName, phone, email, company, project, notes,_id} = this.props;

        this.props.saveNewContact ({FirstName, lastName, phone, email, company, project, notes,_id})

        this.props.navigation.navigate('people');
    }
    render(){
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text> Add a new contact</Text>
                    <TextInput
                       lable='First name...'
                       style={styles.fieldStyles}
                       value={this.props.FirstName}
                       onChageText={value => this.props.formUpdate({ prop: 'firstName', value})}
                    />
                    <TextInput
                       lable='Last name...'
                       style={styles.fieldStyles}
                       value={this.props.lastName}
                       onChageText={value => this.props.formUpdate({ prop: 'lastName', value})}
                    />
                    <TextInput
                       lable='Phone number...'
                       style={styles.fieldStyles}
                       value={this.props.phone}
                       onChageText={value => this.props.formUpdate({ prop: 'phone', value})}
                    />
                     <TextInput
                       lable='Email...'
                       style={styles.fieldStyles}
                       value={this.props.email}
                       onChageText={vemailalue => this.props.formUpdate({ prop: 'email', value})}
                    />
                     <TextInput
                       lable='Company...'
                       style={styles.fieldStyles}
                       value={this.props.company}
                       onChageText={value => this.props.formUpdate({ prop: 'company', value})}
                    />
                     <TextInput
                       lable='Project...'
                       style={styles.fieldStyles}
                       value={this.props.project}
                       onChageText={value => this.props.formUpdate({ prop: 'project', value})}
                    />
                     <TextInput
                       lable='Notes...'
                       style={styles.fieldStyles}
                       value={this.props.notes}
                       onChageText={value => this.props.formUpdate({ prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <Button title='Add' color="4db6ac" onPress={this.UpdatePress.bind(this)}/>
                </View>
            </View>
        </ScrollView>
       )
     }
    }
    const mapStateToProps = state => {
        const { FirstName, lastName, phone, email, company, project, notes, _id}= state;
        return { FirstName, lastName, phone, email, company, project, notes, _id} ;
    }

    export default connect (mapStateToProps, action) (UpdatePerson);
        
