import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { Button } from 'react-native-paper';

const VetMedia = () => {

  function choosePhotoFromGallery() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  function chooseMultiplePhotosFromGallery() {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }

  function takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);

    });
  }

  const [image, setImage] = useState('https://images.pexels.com/photos/5487067/pexels-photo-5487067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

  return (
    <View style= {{top: 300, marginHorizontal: 25}}>
    <Button mode= "contained" onPress={() => takePhotoFromCamera()}>Galeriden Fotoğraf Seç</Button>
     <Image source={{uri: image}} style = {{width: 200, height: 200, bottom: 250}}/>

    </View>
  )
}

export default VetMedia

