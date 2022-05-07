import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, StatusBar, Alert } from 'react-native';
import { FAB, TextInput } from 'react-native-paper';

import EditScreenInfo from '../../components/EditScreenInfo';
import RoundButton from '../../components/Note/Addbutton';
import { getData, storeData } from '../../Database/Storeddata';


export default function Addscreen() {
    const  navigation=useNavigation()
    const [Title,setTitle] = useState<string>("");
    const [Description,setDescription] = useState<string>("");
    const [Datetime,setDate] = useState<string>("");
    const submit = async (index:number) => {
        if (!Title){
            Alert.alert("Error", "Please Input a title")
        }else{
            const addnote = await getData ('addnote');
            const data ={
                
                Title: Title,
                Description:Description,
                Datetime:Datetime
                
            }
            if (addnote){
         const json = JSON.parse(addnote)
        
            if (json){
            
                const jsonvalue = JSON.stringify([...json, data]);
                await storeData('addnote', jsonvalue )
                navigation.goBack('List')
              console.log(json)
            }
    
            }else{
                const jsonvalue = JSON.stringify([data]);
               await storeData('addnote', jsonvalue) 
            }
        }
    }
    
      useEffect(() => {
        var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = new Date().getDate()
        let Datemonth = monthNames[new Date().getMonth() + 1]
        let Dateyear = new Date().getFullYear()
        let Htime = new Date().getHours()  
        let Mtime = new Date().getMinutes()
        let prepend = Htime >= 12? "PM":"AM" 
        setDate( date + " " + Datemonth + ' ' + Dateyear + ' ' + Htime + ':' + Mtime + ' ' + prepend  )
      },[])

  return (
    <View style={styles.container } >
      <View style={styles.header}>
       
       <AntDesign name="arrowleft" color={"white"} size={28} style={{marginTop:54, marginLeft:18}} onPress={() => {navigation.goBack()}} />
       <Text style={styles.titlestyle}>Add Note</Text>  
       <View style={{width:50, padding:0, backgroundColor:"#0066ff",}}>
      {Title.length > 0  || Description.length > 0 ? (<Ionicons name="checkmark-outline" size={29} color={"white"} style={{ alignSelf:"center",  marginTop:54, marginRight:18}} onPress={submit} />  ) : null }
       </View>
     </View>
    <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0066ff" translucent = {true}/>
  

      <ScrollView>
 
    <View style={{  paddingLeft: 20, paddingRight: 20, backgroundColor:"lightblue", paddingBottom:30, borderColor:"black", zIndex:-1}}>
          <TextInput
            mode="flat"
            numberOfLines={2}
            style={styles.textinputTitle}
            placeholder="Title"
            placeholderTextColor="#AFAFB0"
            theme={{
              roundness: 20,
            }}
            value={Title}
            onChangeText={setTitle}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            selectionColor="lightblue"
      
          />

<View style={{ }}></View>
          <TextInput
            mode="flat"
            multiline={true}
            numberOfLines={5}
            style={styles.textinputdesc}
            placeholder="Type here....."
            placeholderTextColor="#AFAFB0"
            theme={{
              roundness: 9,
            }}
            value={Description}
            onChangeText={setDescription}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            selectionColor="#005CEA"
            textAlignVertical="top"
          />
        </View>

      
    </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    backgroundColor:"lightblue", 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header:{
    height:95, 
    backgroundColor:"#0066ff", 
    flexDirection:"row", 
    justifyContent:"space-between",
  },
  titlestyle:{
    color:"white", 
    fontSize:25, 
    fontWeight:"bold", 
    alignSelf:"center", 
    marginTop:40,  
    marginLeft:7,
  },
  textinputTitle:{
    height: 50,
    fontSize: 19,
    borderColor: "black",
    borderRadius: 20,
    marginVertical:20,
    marginTop:30,
    borderWidth: 1,
    backgroundColor:"ivory", 
    textAlign: "left",
  },
  textinputdesc:{
    minHeight:500 ,
    fontSize: 19,
    borderColor:"black",
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor:"ivory", 
  },
  button:{
    position:"absolute" , 
    alignSelf:"center", 
    bottom:20, 
    backgroundColor:"#0066ff", 
 
  },
});

