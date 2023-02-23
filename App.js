import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,TextInput,TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Ionicons from '@expo/vector-icons/Feather';

export default function App() {
  const [ aleatorio, setAleatorio ] = React.useState('5')
  const [ qnt, setQnt ] = React.useState(2) 
 
  const copyToClipboard = ()=>{
     Clipboard.setString(aleatorio);  
  }

  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getString();  
  //   setCopiedText(text); 
  // };  


  return (
    <View style={styles.container}>

      <View style={{  margin:5}}>
        <Text  style={{fontSize: 26,textAlign:"center",color:"#841584",marginBottom:20,fontWeight: "bold"}}  >Gerar número aleatório</Text> 
        <View style={{ flexDirection:"row", alignItems: 'center', backgroundColor:"grey",padding:10, borderRadius:10 ,marginBottom:10}} >
          <Text style={{color:"white",fontSize: 18}}>Qual a quantidade de dígitos? (0 - 20) </Text>
          <TextInput style={{
             height: 40,
             margin: 2,
             borderWidth: 1,
             padding: 10,
             paddingHorizontal:'auto',
             maxWidth:200,
             color:"white"
          }}
            value={qnt}
            onChangeText={(value)=> value <=20 ? setQnt(value):null}
          />
        </View>  
      </View> 
      <View style={{ flexDirection:"column",alignItems: 'center', justifyContent: 'center',   margin:3,width:"auto" }}>
      <View  style={{  flexDirection:"row", backgroundColor:"lightgrey",padding:5, borderRadius:10 ,marginBottom:20}} > 
        <View style={{alignSelf:"center",marginHorizontal:10}}>
          <TouchableOpacity onPress={  ()=> copyToClipboard } >     
              <Ionicons  name="copy" size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <Text  style={{fontSize: 50,textAlign:"center",color:"#841584",marginHorizontal:40 }}  >{aleatorio?aleatorio:"?"}</Text>
      </View> 
        <Button 
          onPress={  ()=>{
            const valor = Math.random(1).toFixed(qnt).slice(2).toString()
            setAleatorio(valor) 
          }}
          title="Gerar"
          color="#841584"  
          style={{
            fontSize: 26,
            bordeRadius:30
          }}       
        />   
      </View>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
    
  },
});
