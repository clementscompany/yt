import { StatusBar } from 'expo-status-bar';
import { Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './theme/theme';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import Animated, { BounceInDown, BounceInLeft, FadeInDown, FadeInRight } from 'react-native-reanimated';

export default function App() {
  const dimencions = Dimensions.get("window")
  const [isVisible, setIsVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme(null).colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      position: "relative",
      width: dimencions.width,
    },
    loginText: {
      color: theme().colors.primary,
      fontSize: 33,
      fontWeight: "700",
      textAlign: "left",
    },
    headerLoginScreen: {
      alignSelf: "flex-start",
    },
    textInput: {
      height: 50,
      borderWidth: 1,
      borderColor: theme().colors.border,
      backgroundColor: theme().colors.card,
      borderRadius: 6,
      padding: 12,
      paddingLeft: 44,
    },
    inputBox: {
      width: "100%",
      marginVertical: 8,
      position: "relative",
    },
    icon: {
      position: "absolute",
      top: "53%",
      left: 8,
      height: 50,
      zIndex: 12,
      elevation: 5
    },
    label: {
      color: theme().colors.primary,
      marginBottom: 6,
      fontWeight: "600"
    },
    scrollview: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: dimencions.width - 33
    },
    eyeButton: {
      position: "absolute",
      top: "49%",
      right: 12,
      height: 50,
      zIndex: 12,
      elevation: 5,
      padding: 3,
    },
    forgotContainer: {
      alignSelf: "flex-end",
    },
    forgotText: {
      color: theme().colors.primary
    },
    button: {
      borderRadius: 50,
      marginTop: 12,
      backgroundColor: theme().colors.primary,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: 55,
    },
    textButton: {
      fontWeight: "700",
      color: '#ffff'
    },
    containerMideas: {
      flexDirection: 'row',
      gap: 12,
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 50,
    },
    mediaContant: {
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      borderWidth: 1,
      borderColor: theme().colors.border,
      padding: 12,
      borderRadius: 12,
      flex: 1,
    },
    textMidea: {
      fontWeight: "500",
      color: theme().colors.text2,
    }
  });

  const mideas = [
    {
      name: "Facebook",
      icon: <Feather name="facebook" size={24} color={theme().colors.primary} />
    },
    {
      name: "LinkedIn",
      icon: <Feather name="linkedin" size={24} color={"blue"} />
    },
    {
      name: "GitHub",
      icon: <Feather name="github" size={24} color={theme().colors.text2} />
    }
  ];

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior='padding'
      >
        <ScrollView contentContainerStyle={styles.scrollview}
          keyboardShouldPersistTaps="handled"
        >
          <StatusBar style="light" />
          <View style={styles.headerLoginScreen}>
            <Text style={styles.loginText}>Login</Text>
          </View>

          <Animated.View style={styles.inputBox}
            entering={BounceInDown.duration(1000)}
          >
            <Fontisto name="email" size={22} color={theme().colors.primary} style={styles.icon} />
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Digite o seu email...'
              keyboardType='email-address'
              placeholderTextColor={theme("ligth").colors.text}
            />
          </Animated.View>

          <Animated.View style={styles.inputBox}
            entering={FadeInDown.duration(1500)}
          >
            <AntDesign name="lock" size={22} color={theme().colors.primary} style={styles.icon} />
            <Text style={styles.label}>Password:</Text>
            <TouchableOpacity style={styles.eyeButton}
              onPress={() => setIsVisible(before => !before)}
            >
              <Feather name={isVisible === true ? "eye-off" : "eye"} size={24} color={theme().colors.text2} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder='Digite a sua senha...'
              secureTextEntry={!isVisible}
              placeholderTextColor={theme("ligth").colors.text}
            />
          </Animated.View>

          <Animated.View style={styles.forgotContainer}
            entering={BounceInLeft.duration(1500)}
          >
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </Animated.View>


          <Animated.View style={{ width: "100%" }}
            entering={FadeInDown.duration(1800)}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.containerMideas}>
            {mideas.map((item, index) => (
              <Animated.View style={styles.mediaContant} key={index.toString()}
                entering={BounceInDown.delay(index * 40).duration(1000)}
              >
                {
                  item.icon
                }
                <Text style={styles.textMidea}>{item.name}</Text>
              </Animated.View>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

