import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    loader: { 
        width: 200, 
        height: 200 
    }
});

export default styles;