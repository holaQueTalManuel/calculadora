import { Pressable, Text, StyleSheet, Vibration } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStyles';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    tipo: 'botonOperador' | 'botonNumeros' | 'botonDemas',
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, tipo='botonNumeros', onPress}:Props) => {
const handlePress = () => {
    if (onPress){
        onPress();
        Haptics.selectionAsync();

    }
}

    return (
        <Pressable>
            <Text 
                style={[
                    tipo === 'botonNumeros' ? GlobalStyles.botonNumeros : null, 
                    tipo === 'botonOperador' ? GlobalStyles.botonOperador : null, 
                    tipo === 'botonDemas' ? GlobalStyles.botonDemas : null, 
                    {width}
                ]
            }
                onPress={handlePress}>{label}</Text>
        </Pressable>
    )
};


