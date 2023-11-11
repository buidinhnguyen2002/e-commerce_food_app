import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Margin } from '../../utils/StyleUtil';

const LogoutDialog = forwardRef(({ visible, onCancel, onLogout }, ref) => {
  useImperativeHandle(ref,() => ({
    openDialog: () => {
      if(visible) return;
      onCancel();// đóng các dialog trước đó
      onLogout();//Thực hiện các hành động LogOut
    },
  }));
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <View style = {{height: 3,width:30,alignItems:'center',alignSelf:'center', backgroundColor: Colors.grey_01, marginBottom: 16,}}></View>
          <Text style={[styles.titleText, Margin.mb_20]}>Logout</Text>
          <Text style={[styles.messageText, Margin.mb_20]}>
            Are you sure you want to logout?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={{color:Colors.green, fontWeight:'bold'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onLogout}
              style={[styles.button, styles.logoutButton]}
            >
              <Text style={[styles.buttonText, styles.logoutButtonText]}>
                Yes, Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    padding: 20,
    borderRadius: 20,
    borderTopColor: 'green',
    height: 250
  },
  titleText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  messageText: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal:10
  },
  cancelButton: {
    backgroundColor: Colors.pastelGreen,
  },
  logoutButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButtonText: {
    backgroundColor: 'green',
  },
});

export default LogoutDialog;
