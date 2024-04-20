import { createMaterialBottomTabNavigator } from "domain";
import { Icon } from "react-native-vector-icons/EvilIcons";
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () =>{
    return(
        <Tab.Navigation
            inialRoutName='People'
            activeColor='#FF7043'
            barStyle={{ backgroundColor:'#4DB6AC'}}
        >
            <Tab.Screen name='People' component={Peoplelist}
              options= {{
                   tabBarLabel: 'People',
                   tabBarIcon: ({ color }) => (
                    <Icon name={'user'} size={30} color={color} />
                   ),
              }}/>
              
            <Tab.Screen name='Add' component={AddPerson}
              options= {{
                   tabBarLabel: 'Add',
                   tabBarIcon: ({ color }) => (
                    <Icon name={'plus'} size={30} color={color} />
                   ),
              }}/>

            <Tab.Screen name='Company' component={Companylist}
              options= {{
                   tabBarLabel: 'Company',
                   tabBarIcon: ({ color }) => (
                    <Icon name={'archive'} size={30} color={color} />
                   ),
              }}/>
           </Tab.Navigation>    
    )
}

export default Navigation;
