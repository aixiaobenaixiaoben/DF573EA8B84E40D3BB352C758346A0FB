import React, {Component} from "react"
import {CameraRoll, ScrollView, Text, TouchableOpacity} from "react-native"
import ImagePicker from 'react-native-image-crop-picker'
import style from "./style"
import ImagePickerIOS from 'react-native-image-picker'


class Menu extends Component<any, any> {

  photo = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperChooseText: '完成',
      cropperCancelText: '取消',
      cropperToolbarTitle: '裁剪图片',
      smartAlbums: ['UserLibrary'],
      mediaType: 'photo',
      hideBottomControls: true,
    }).then(image => {
      console.log(image)
    }).catch(e => {
      alert('没有访问照片权限')
      console.log(e)
    })
  }

  camera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      cropperChooseText: '完成',
      cropperCancelText: '取消',
      cropperToolbarTitle: '裁剪图片',
      hideBottomControls: true,
    }).then(image => {
      console.log(image)
      this.savePhoto(image)
    }).catch(e => {
      alert('没有使用相机权限')
      console.log(e)
    })
  }

  savePhoto = (image: Object) => {
    CameraRoll.saveToCameraRoll(image.path, 'photo')
  }

  photoSelect = () => {
    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'imagePicker',
      },
    }
    ImagePickerIOS.launchImageLibrary(options, (response) => {
      if (response.uri) {
        console.log(response.uri)
      } else if (response.error) {
        console.log('error')
      }
    })
  }

  cameraSelect = () => {
    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'imagePicker',
      },
    }
    ImagePickerIOS.launchCamera(options, (response) => {
      if (response.uri) {
        console.log(response.uri)
      } else if (response.error) {
        console.log('error')
      }
    })
  }

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={style.scrollView} style={style.view}>

        <TouchableOpacity style={style.button} onPress={this.photo}>
          <Text>获取照片</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={this.camera}>
          <Text>拍摄照片</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={this.photoSelect}>
          <Text>获取照片2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={this.cameraSelect}>
          <Text>拍摄照片2</Text>
        </TouchableOpacity>


      </ScrollView>
    )
  }
}

export default Menu