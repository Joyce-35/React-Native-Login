import React from 'react';
import { FlatList, View } from 'react-native';
import Contact from './componet/contact';

const ContactsScreen = () => {
    const contacts =[
        {name: 'Joyce Dzigbordi Adzokatse', number:'023-254-0782'},
        {name: 'Joyce Adzokatse', number:'024-119-6369'},
        {name: 'Adzokatse Mavis', number:'054-194-0789'},
        {name: 'Rejoyce Kumi', number:'024-294-0789'},
        {name: 'Regina Ama Johnson', number:'0241-940-783'},
        {name: 'Saraphine Adzo', number:'023-254-0782'},
        {name: 'Emmanuella Adjie', number:'024-119-6369'},
    ]
    return (
        <View>
            <FlatList
            data = {contacts}
            renderItem={({item}) =>{
                return <Contact name={item.name} phone={item.number} />
            }}
            keyExtractor={(item)=> item.number}
            />
                
           
        </View>
    );
}

export default ContactsScreen;
