// ./screens/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import BackButton from '../components/BackButton';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToJoinNow = () => {
    navigation.navigate('JoinNow');
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };
  const navigateToProfileDetail = () => {
    navigation.navigate('ProfileDetail');
  };

  const navigateToChangePassword = () => {
    navigation.navigate('SetPassword');
  };
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>

      {/* Profile editing form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        {/* Add your profile editing form components here */}

        {/* Join Now button */}
        <TouchableOpacity style={styles.joinNowButton} onPress={navigateToJoinNow}>
          <Text style={styles.buttonTextjoinNow}>Join Now</Text>
        </TouchableOpacity>

        {/* Sign In button */}
        <TouchableOpacity style={styles.signInButton} onPress={navigateToSignIn}>
          <Text style={styles.buttonTextsignIn}>Sign In</Text>
        </TouchableOpacity>
         {/* Profile button */}
         <TouchableOpacity style={styles.profileButton} onPress={navigateToProfileDetail}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        {/* Change Password button */}
        <TouchableOpacity style={styles.changePasswordButton} onPress={navigateToChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        {/* Log Out button */}
        <TouchableOpacity style={styles.logOutButton} onPress={navigateToSignIn}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  joinNowButton: {
    backgroundColor: '#05A762',
    paddingVertical: 12,
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  signInButton: {
    backgroundColor: 'white',
    borderColor: '#05A762',
    borderWidth: 1,
    paddingVertical: 12,
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonTextjoinNow: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextsignIn: {
    color: '#05A762',
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#3498db',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  changePasswordButton: {
    backgroundColor: '#e74c3c',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  logOutButton: {
    backgroundColor: '#2ecc71',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
