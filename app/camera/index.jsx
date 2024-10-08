import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button, Linking } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
// import * as MediaLibrary from "expo-media-library" //salvar na galeria

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions(); // pedir permissão da camera
    const [foto, setFoto] = useState(null); 
    const [codigoBarra, setCodigoBarra] = useState(null); // Estado para armazenar o código de barras
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');
    // const [permissaoSalvar, setPermissaoSalvar] = MediaLibrary.usePermissions() //CASO peça permissão para salvar

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textoPermissao}>
                    Você precisa dar permissão para utilizar a câmera
                </Text>
                <Button title='Pedir Permissão' onPress={pedirPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(fotoBase64);
        console.log(fotoBase64);
    };

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const onBarCodeScanned = ({ type, data }) => {
        setCodigoBarra(`Tipo: ${type}\nDados: ${data}`); // Armazena os dados lidos
        console.log(`Código de barras lido: ${data}`);
        
        // Aqui você pode usar o Linking para abrir uma URL
        if (data.startsWith('http')) { // Verifica se é uma URL
            Linking.openURL(data).catch(err => console.error("Error opening URL:", err));
        }
    };
    
    const salvarFoto = async () => {
        // MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null);
    }

    /*const salvarFoto = async () => {
        console.log(permissaoSalvar.status == 'granted'){
        await pedirPermissaoSalvar()
        }
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
        }
    */

    return (
        <View style={styles.container}>
            {codigoBarra ? ( // Exibe o código de barras se foi lido
                <View style={styles.container}>
                    <Text>{codigoBarra}</Text>
                    <Button title='Descartar' onPress={() => setCodigoBarra(null)} />
                </View>
            ) : foto ? 
                <View style={styles.container}>
                    <Button title='Descartar imagem' onPress={() => setFoto(null)} />
                    <Button title='Salvar foto' onPress={salvarFoto} />
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                </View>
             : 
                 <CameraView 
                    style={styles.camera} 
                    facing={ladoCamera} 
                    ref={cameraRef} 
                    onBarCodeScanned={onBarCodeScanned} // Adicionando a função de escaneamento
                    barcodeScannerSettings={{ barcodeTypes: ["qr", "ean13", "ean8", "upc", "code39", "code128"] }} // Tipos de código de barras
                >
                    <View style={styles.buttonContainer}>
                        <Button title='Tirar Foto' onPress={tirarFoto} />
                        <Button title='Troca Lado' onPress={inverterLadoCamera} />
                    </View>
                </CameraView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textoPermissao: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
