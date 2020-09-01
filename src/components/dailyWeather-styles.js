import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor: palette.white,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    weekDay: {
        fontSize: 16
    },
    weather: {
        fontSize: 14,
        fontWeight: '600'
    }
});

export default styles;