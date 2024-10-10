import { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Camera, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library"; // salvar na galeria

export default function CameraComponent() {
    const [permissao, pedirPermissao] = useCameraPermissions(); // pedir permissão da camera
    const [foto, setFoto] = useState(null);
    const cameraRef = useRef(null);
    const [ladoCamera, setLadoCamera] = useState('back');
    const [escaneando, setEscaneando] = useState(false); // Controle do scanner de QR-Code

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textoPermissao}>
                    Você precisa dar permissão para utilizar a câmera
                </Text>
                <TouchableOpacity onPress={pedirPermissao} style={styles.button}>
                    <Text style={styles.buttonText}>Pedir Permissão</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoBase64 = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(fotoBase64);
    };

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera === 'back' ? 'front' : 'back');
    };

    const salvarFoto = async () => {
        await MediaLibrary.saveToLibraryAsync(foto.uri);
        setFoto(null);
    };

    const handleBarCodeScanned = ({ type, data }) => {
        setEscaneando(false); // Para quando escanear
        // Aqui você pode fazer algo com o QR Code, como navegar para uma URL
        Linking.openURL(data).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={styles.container}>
            {escaneando ? (
                <Camera
                    style={StyleSheet.absoluteFillObject}
                    type={ladoCamera}
                    onBarCodeScanned={handleBarCodeScanned}
                >
                    <View style={styles.scannerOverlay}>
                        <Text style={styles.textoPermissao}>Escaneando QR Code...</Text>
                    </View>
                </Camera>
            ) : foto ? (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => setFoto(null)} style={styles.button}>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/OIP.z-GQlISRSL6qWkAVU9wp8gHaHa?rs=1&pid=ImgDetMain' }}
                            style={styles.icon} />      
                    </TouchableOpacity>

                    <TouchableOpacity onPress={salvarFoto} style={styles.button}>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/OIP.z-GQlISRSL6qWkAVU9wp8gHaHa?rs=1&pid=ImgDetMain' }}
                            style={styles.icon} />
                    </TouchableOpacity>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                </View>
            ) : (
                <Camera style={styles.camera} type={ladoCamera} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={tirarFoto} style={styles.button}>
                            <Image
                                source={{ uri: 'https://img.freepik.com/premium-vector/illustrate-classic-camera-icon-with-shutter-button-icon_1076610-14230.jpg' }}
                                style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={inverterLadoCamera} style={styles.button}>
                            <Image
                                source={{ uri: 'https://th.bing.com/th/id/OIP.z-GQlISRSL6qWkAVU9wp8gHaHa?rs=1&pid=ImgDetMain' }}
                                style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setEscaneando(true)} style={styles.button}>
                            <Text style={styles.buttonText}>Escanear QR-Code</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
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
    scannerOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparente para ver o scanner
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: 'black', 
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    icon: {
        width: 40,  
        height: 40, 
        borderRadius: 100
    },
});
