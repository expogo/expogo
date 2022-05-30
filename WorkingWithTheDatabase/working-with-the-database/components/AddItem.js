import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const AddItem = ({title, addItem}) => {
const [text, setText] = useState('');

const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput 
            placeholder="Добавить продукт..." 
            style={styles.input} 
            onChangeText={onChange} />
                <TouchableOpacity 
                style={styles.btn} 
                onPress={() => addItem(text)}>
                    <Text style={styles.btnText}><Ionicons style={styles.plus} name="ios-add-circle" 
                size={28} 
                color="green"
                />Добавить продукт</Text>
                </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
    plus: {
        
    }

});

export default AddItem;