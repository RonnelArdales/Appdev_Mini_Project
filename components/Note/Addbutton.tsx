import { View, StyleSheet,  } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const RoundButton = ({onPress, anticonname, size, color, style}) => {
    return(
<AntDesign

name={anticonname}
onPress={onPress}
color="white"
size={size || 30}
style={[styles.icon, {...style}]}
    
/>
    )
}
export default RoundButton

const styles = StyleSheet.create({
icon:{
padding:15,
borderRadius:50,
position:"absolute" ,
right:20,
zIndex:1,
bottom:40, 
backgroundColor:"#0066ff",
}

})