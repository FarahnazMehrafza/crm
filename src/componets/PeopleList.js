import React,{Component} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from 'react-redux';
import PagerItem from "./PeopleItem";
import PeopleDetail from './PeopleDetail';
import { loadInitialContacts } from "../actions";
import { Container } from "react-bootstrap/lib/Tab";
import { Item } from "react-bootstrap/lib/Breadcrumb";
const style = StyleSheet.create() ({
    Container: {
        padding: 80,
    }
});
class Peoplelist extends Component {
    componentDidMount(){
        this.props.loadInitialContacts();
    }

    renderInitialView() {
          if(  this.props.detailView === true) {
                return (
                    <PeopleDetail/>   
                )
            } else{
                return (
                    <FlatList
                    data={this.props.people}
                    renderItem={(Item) => <popleItem people={Item} />}
                    keyExtractor={(Item, index) => index.toString()}
             />
        )
   }
 }

    render() {
        return (
            <View style={style.Container}>
               {this.renderInitialView()}
               </View>

           
        )
    }
}

const mapStatToProps = state => { 
    return {    
        people: state.people,
        detailView: state.detailView,
    
    }
}


export default connect(mapStatToProps,{loadInitialContacts})(Peoplelist);