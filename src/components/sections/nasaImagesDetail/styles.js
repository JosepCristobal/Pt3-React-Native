import { StyleSheet } from 'react-native' 
import * as Colors from '../../../commons/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)'
    },
    imageContainer: {
        borderWidth: 1, 
        borderColor: Colors.main,
        borderRadius: 20,
        height: 300,
        width: '100%'
    },
    image: {
        width: '100%',
        height: 200
    },
    dataContainer: {
        padding: 5,
        flexDirection: 'row'
    },
    textTitle: {
        padding: 3,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        padding: 3,
        color: 'white',
    },
})