



// importa as bibliotecas necessarias
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import ImagePickerComponent from './ImagePickerComponent';



const App = () => {

  return(

    //SafeArea garante que o conteudo nao ultrapasse areas seguras do dispositivo
    <SafeAreaView style={styles.container}>
      {/*renderiza o componente de seleção de imagens */}
    <ImagePickerComponent/>



    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});


//Exporta o component Principal
export default App;