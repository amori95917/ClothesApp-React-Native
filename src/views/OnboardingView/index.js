import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

export const OnboardingView = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 flex-col bg-[#F0F3F8] dark:bg-black justify-around">
      <View className="flex-col space-y-3">
        <View className="flex flex-row space-x-3 -mx-[10vw]">
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img1.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img2.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img3.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img4.png')}
          />
        </View>
        <View className="flex flex-row space-x-3 ml-2">
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img5.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img6.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img7.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img8.png')}
          />
        </View>
        <View className="flex flex-row space-x-3 -mx-[10vw]">
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img9.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img10.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img11.png')}
          />
          <Image
            className="w-[25vw] h-[25vw] rounded-xl"
            source={require('../../assets/images/onboarding/onboarding-img12.png')}
          />
        </View>
        <View className="pt-2">
          <Text className="font-semibold text-3xl text-black dark:text-white text-center">
            Sell pre-loved clothes
          </Text>
          <Text className="font-semibold text-3xl text-[#933FE7] text-center">
            completely free!
          </Text>
        </View>
      </View>
      <View className="flex-col space-y-4 px-6">
        <TouchableOpacity
          className="bg-[#933FE7] flex flex-row space-x-2 items-center justify-center py-3 rounded-3xl"
          onPress={() => navigation.navigate('LoginSignup')}>
          <View>
            <Text className="font-medium text-white">
              Sign Up
            </Text>
          </View>
          <Image
            className="w-[14px] h-[10px]"
            source={require('../../assets/icons/arrow-right.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginSignup')}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
          <Text className="text-black text-center dark:text-white font-medium">
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
