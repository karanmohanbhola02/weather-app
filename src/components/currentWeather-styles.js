import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather: {
        fontSize: 64,
        fontWeight: '600',
        marginBottom: 15
    },
    city: {
        fontSize: 18,
        fontWeight: '600'
    }
});

export default styles;