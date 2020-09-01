import { StyleSheet } from 'react-native';
import { palette } from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: palette.white,
        borderColor: palette.black
    }
});

export default styles;