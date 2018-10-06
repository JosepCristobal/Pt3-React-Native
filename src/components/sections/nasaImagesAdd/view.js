import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, TextInput} from 'react-native'
import { Button } from '../../../widgets'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'
import * as Colors from '../../../commons/colors'
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux'

export default class extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            location: '',
            date_creation: '',
            center: '',
            image: null,
            date: "2018-10-06"
        }
    }

    _onDatePickerTapped(){
        return(
        <DatePicker
            style={{width: 200,  borderColor: 'green'}}
            date={this.state.date_creation}
            mode="date"
            placeholder="Select date format YYYY-MM-DD"
            format="YYYY-MM-DD"
            minDate="2018-01-01"
            maxDate="2018-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
            },
            dateInput: {
                marginLeft: 36,
                borderWidth: 1, 
                borderColor: Colors.main,
                borderRadius: 20,
                
            }, 
            dateText:{
                color: 'white',
                fontWeight: 'bold',
            }
            // ... You can check the source to find the other keys.
            }}
        onDateChange={(date_creation) => {this.setState({date_creation: date_creation})}}
      />)
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
              let preview = { uri: response.uri };
              let data = 'data:image/jpeg;base64,' + response.data 
              this.setState({
                image: { preview, data }
              });
            }
          });
    }

    _onSubmit() {
        
        if(this._validateForm()) {
            const {description, location, date_creation,center,image} = this.state 
            const data = {
                description: description,
                location: location,
                date_creation: date_creation,
                center: center,
                image: image.data,
            }
            
            const content = `Description: ` + description + `\n  Location: ` + location + `\n Center: ` + center
                            + `\n Date: ` + date_creation
            alert('Save data: \n ' + content)
            Actions.pop()
            //this.props.onSubmitCharacter(data)
        } else {
           
            Alert.alert('Atención', 'Complete todos los campos')
           
        }
    }

    _validateForm() {
    
        const {description, location, date_creation,center,image} = this.state 
        if(description && location && date_creation && center && image) {
            return true
        } else {
            return false
        }
    }

    _renderImageInput() {
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Pulsa para escoger otra imagen' : 'Pulsa para elegir imagen *'
        return (
            <View style={{marginTop: 5}}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    render(){
        return (
    <View style={styles.container}>
       <ScrollView>
            <View style={{paddingTop: 5, padding: 10, height: 160}}>
                <Text style={[styles.label]}>Description: *</Text>
                <TextInput style={styles.textInputMulti}
                            multiline = {true}
                            numberOfLines = {10}
                            value={this.state.description}
                            onChangeText={ description => this.setState({ description }) }
                            placeholder={'Use su imaginación para realizar un buen reportaje'}
                            placeholderTextColor={Colors.main}
                            maxLength = {140}
                />
            </View>
            <View style={{paddingHorizontal: 10, paddingBottom: 3, marginTop: 20}}>
                <Text style={[styles.label]}>Location: *</Text>
                        <TextInput style={styles.textInput}
                            value={this.state.location}
                            onChangeText={ location => this.setState({ location }) }
                            placeholder={'Barbera del Valles'}
                            placeholderTextColor={Colors.main}
                        />
            </View>
            <View style={{paddingHorizontal: 10, paddingBottom: 5}}>    
                    <Text style={[styles.label]}>Center: *</Text>
                <View>
                        <TextInput style={styles.textInput}
                            value={this.state.center}
                            onChangeText={ center => this.setState({ center }) }
                            placeholder={'TSB08'}
                            placeholderTextColor={Colors.main}
                        />
                </View>
            </View>

            <View style={{paddingHorizontal: 10, paddingBottom: 1}}>  
                        <Text style={[styles.label]}>Date: *</Text>   
                        <View>
                            {this._onDatePickerTapped()}
                        </View>  
                    
                <View>
                        
                           
                    <View style={{ paddingHorizontal: 20, paddingBottom: 10}}>
                            { this._renderImageInput() }
                    </View>
                    <View style={{paddingHorizontal: 20, paddingBottom: 10}}>
                            <Button label={'SAVE'} onPress={() => this._onSubmit()}/>
                            
                    </View>
                </View>         
            </View>
        </ScrollView>     
    </View>
    )
}
}