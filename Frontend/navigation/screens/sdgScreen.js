import * as React from "react";
import { View, Text } from "react-native"; 

export default function sdgScreen () {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "SDG" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>SDG Screen</Text>
        </View>
    );
}