import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleCotizar = () => {
        setMensaje('Formulario creado');
    };

    return (
        <View style={styles.formulario}>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(valor) => setMoneda(valor)}
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dólar USD" value="USD" />
                <Picker.Item label="Peso Mexicano MXN" value="MXN" />
                <Picker.Item label="Euro EUR" value="EUR" />
                <Picker.Item label="Libra Esterlina GBP" value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={(valor) => setCriptomoneda(valor)}
            >
                <Picker.Item label="- Seleccione -" value="" />
            </Picker>

            <TouchableOpacity style={styles.btnCotizar} onPress={handleCotizar}>
                <Text style={styles.textoBtnCotizar}>Cotizar</Text>
            </TouchableOpacity>

            {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    formulario: {
        padding: 20,
    },
    label: {
        color: '#6D28D9',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    btnCotizar: {
        backgroundColor: '#6D28D9',
        padding: 15,
        borderRadius: 8,
        marginTop: 30,
    },
    textoBtnCotizar: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    mensaje: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default Formulario;