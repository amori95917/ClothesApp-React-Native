import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';

export const LoginSignupView = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F0F3F8] dark:bg-black">
      <Text className="m-6 mb-0 font-semibold text-5xl text-black dark:text-white">
        Welcome!
      </Text>
      <View className="flex flex-col justify-center items-center my-auto px-6">
        <View className="flex flex-row justify-center items-center space-x-4">
          <TouchableOpacity className="w-14 h-14 bg-white dark:bg-[#262626] rounded-full p-4 pt-3">
            <Image
              className="w-full"
              source={require('../../assets/icons/apple.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-14 h-14 bg-white dark:bg-[#262626] rounded-full p-4 pt-2">
            <Image
              className="w-full"
              source={require('../../assets/icons/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-14 h-14 bg-white dark:bg-[#262626] rounded-full p-3 pt-2">
            <Image
              className="w-full"
              source={require('../../assets/icons/facebook.png')}
            />
          </TouchableOpacity>
        </View>
        <Text className="mt-8 mb-2">External wallet</Text>
        <TouchableOpacity
          className="bg-[#933FE7] flex flex-row space-x-2 items-center justify-center py-3 rounded-3xl w-full"
          activeOpacity={0.5}>
          <Image
            className="w-6 h-6"
            source={require('../../assets/icons/wallet.png')}
          />
          <View>
            <Text className="font-medium text-white">
              Connect wallet
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
