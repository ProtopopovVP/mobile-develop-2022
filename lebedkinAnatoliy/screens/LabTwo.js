/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const LabTwo = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const count = useSelector(state => state.counter.value);
    useEffect(() => {
        axios
            .get('https://reqres.in/api/users/1')
            .then((response) => {
                 setName(response.data.data.first_name + ' ' + response.data.data.last_name);
                 setEmail(response.data.data.email);
            });
    },[]);

    return (
        <View>
            <Text>Full Name:{name}, Email:{email}</Text>
            <Text>{count}</Text>
        </View>
    );
};
