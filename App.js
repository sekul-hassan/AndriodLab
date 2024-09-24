import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const lengthUnits = [
    { label: 'Meters', value: 'm' },
    { label: 'Kilometers', value: 'km' },
    { label: 'Centimeters', value: 'cm' },
    { label: 'Millimeters', value: 'mm' },
    { label: 'Feet', value: 'ft' },
    { label: 'Inches', value: 'in' },
    { label: 'Yards', value: 'yd' },
    { label: 'Miles', value: 'mi' },
];

const conversionFactors = {
    m: 1,
    km: 0.001,
    cm: 100,
    mm: 1000,
    ft: 3.28084,
    in: 39.3701,
    yd: 1.09361,
    mi: 0.000621371,
};

const convertLength = (value, fromUnit, toUnit) => {
    const valueInMeters = value / conversionFactors[fromUnit];
    return valueInMeters * conversionFactors[toUnit];
};

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('m');
    const [toUnit, setToUnit] = useState('km');
    const [result, setResult] = useState(null);

    const handleConversion = () => {
        const numericValue = parseFloat(inputValue);
        if (!isNaN(numericValue)) {
            const convertedValue = convertLength(numericValue, fromUnit, toUnit);
            setResult(convertedValue.toFixed(6));
        } else {
            setResult(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Length Converter</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter value"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Picker
                selectedValue={fromUnit}
                style={styles.picker}
                onValueChange={(itemValue) => setFromUnit(itemValue)}
            >
                {lengthUnits.map((unit) => (
                    <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
                ))}
            </Picker>
            <Picker
                selectedValue={toUnit}
                style={styles.picker}
                onValueChange={(itemValue) => setToUnit(itemValue)}
            >
                {lengthUnits.map((unit) => (
                    <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
                ))}
            </Picker>
            <Button title="Convert" onPress={handleConversion} />
            {result !== null && (
                <Text style={styles.result}>
                    Result: {result} {toUnit}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(3,127,250,0.41)',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: "#2052b1",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: "#2052b1",
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});
