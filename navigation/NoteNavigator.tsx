import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Addscreen, EditNoteScreen, ListScreen } from '../screens/Note/Index';
import { createStackNavigator } from '@react-navigation/stack';
import { NoteStackParamList } from '../types';

const Stack = createStackNavigator<NoteStackParamList>();

export default function NoteNavigator() {
    return (
      <Stack.Navigator  
      
      >
    <Stack.Screen name="List" component={ListScreen} 
    options={{headerShown:false, 
    headerTitleAlign:'left', 
    headerMode:"float",
    title:"Note App", 
    headerTitleStyle:{fontSize:28},
    headerTintColor:"white",
    headerStyle: {
    backgroundColor:"#0066ff", 
  }
    
    }} />
    <Stack.Screen name="Add" component={Addscreen}  
    options={{headerShown:false, 
    headerTitleAlign:'center', 
    title:"Add Note", 
    headerMode:"float",
    headerTitleStyle:{fontSize:28},
    headerTintColor:"white",
    headerStyle: {
    backgroundColor:"#0066ff", 
  }
    
    }}/>

<Stack.Screen name="EditNote" 
      component={EditNoteScreen}  
      options={{headerTitleAlign:'center', 
      headerShown:false, 
      title:"Edit note",
      headerTintColor:"white",
      headerTitleStyle:{fontSize:28},
      headerStyle: {
      backgroundColor:"#0066ff", 
    }
    }}/>
  </Stack.Navigator>

    )
    }




    