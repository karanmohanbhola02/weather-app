import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    errorText: {
        fontSize: 64,
        fontWeight: '600'
    },
    button: {
        marginTop: 30,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderColor: 'black',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600'
    }
});

export default styles;