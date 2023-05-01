import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import {launchImageLibrary} from 'react-native-image-picker';

export const SignupView = () => {
  const [filePath, setFilePath] = useState({});
  const [username, setUsername] = useState('');
  const [isSelectedSubscription, setSelectedSubscription] = useState(false);
  const [isSelectedPolicy, setSelectedPolicy] = useState(false);

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F0F3F8] dark:bg-black">
      <Text className="m-6 mb-0 font-semibold text-5xl text-black dark:text-white">
        Sign up
      </Text>
      <View className="flex flex-col items-center space-y-4 mt-8 px-6">
        <TouchableOpacity
          className="w-32 h-32 rounded-full bg-white border border-black/30 -mb-2"
          onPress={() => chooseFile('photo')}>
          {filePath.uri ? (
            <Image source={{uri: filePath.uri}} className="w-full h-full" />
          ) : (
            <Image
              className="w-7 h-6 m-auto"
              source={require('../../assets/icons/camera.png')}
            />
          )}
        </TouchableOpacity>
        <TextInput
          className="border border-black/30 rounded-full bg-white w-full px-6 py-2"
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <View className="flex flex-row justify-center items-center px-6 space-x-3">
          <CheckBox
            value={isSelectedSubscription}
            onValueChange={setSelectedSubscription}
            className="border border-black/30 rounded-lg w-7 h-7"
          />
          <Text className="text-black/70">
            I’d like to receive personalized offers and be the first to know
            about the latest updates to WTT via email.
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center px-6 space-x-3">
          <CheckBox
            value={isSelectedPolicy}
            onValueChange={setSelectedPolicy}
            className="border border-black/30 rounded-lg w-7 h-7"
          />
          <Text className="text-black/70">
            By registering, I confirm that I accept{' '}
            <Text className="text-[#933FE7] underline">
              WTT’s Terms & Conditions
            </Text>{' '}
            and
            <Text className="text-[#933FE7] underline">Pro terms of sale</Text>,
            have read the{' '}
            <Text className="text-[#933FE7] underline">Privacy policy</Text>,
            and I’m at least 18 years old.
          </Text>
        </View>
        <TouchableOpacity className="bg-[#933FE7] flex flex-row space-x-2 items-center justify-center py-3 rounded-3xl w-full">
          <View>
            <Text className="font-medium text-white">
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
