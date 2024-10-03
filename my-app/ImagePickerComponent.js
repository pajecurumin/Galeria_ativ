
//Importando as Bibliotecas Necessarias
import React, {useState} from 'react';
import { StyleSheet,View,Image, Alert, Button } from 'react-native/types';
import * as ImagePicker from 'expo-image-picker';

// define o componente inicial
const ImagePickerComponent = () =>{


    //estado para armazenar a URI da imagem selecionada
    const[imageUri, setImageUri] = useState(null);
    //Função para solicitar permissão e abrir galeria
   
     
    const selectImage = async() => {

            const status = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if(status != 'granted'){

                Alert.alert("Permissão negada", "Permissão para acessar a galeria foi negada.");
                return;

            }
            //abre a galeria para seleção de imagems
            const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,// APENAS IMAGENS
            allowsEditing: true, //Permite edição basica
                quality: 1 // maior qualidade possivel
            });

            //verifica se o usuario cancelou a operação
            if(result.canceled){

                Alert.alert("Operação cancelada", "Você cancelou a seleção de imagem.");
                return;
            }
                //define a uri da imagem selecionada no estado
                setImageUri(result.uri);


    };

    return(
        <View style={styles.container}>
            <Button title='selecionar imagem' onPress={selectImage}/>
            {imageUri && (

                <Image 
                
                source={{uri: imageUri}}  
                   style={styles.image} 
                />


            )};
        </View>



    );
};



 const styles = StyleSheet.create({
container: {
    flex: 1, //ocupa todo o espaço disponivel
    justifyContent: 'center', // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
    padding: 20, // espaçamento interno
    backgroundColor: '#fff',


},
image:{
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
},





 });

 //Exporta o component para o uso externo

export default ImagePickerComponent;