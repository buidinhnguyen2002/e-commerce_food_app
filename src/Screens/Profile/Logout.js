import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutDialog = ({ visible, onCancel, onLogout }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.titleText}>Logout</Text>
          <Text style={styles.messageText}>
            Are you sure you want to logout?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
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
};

const Logout = () => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây
    // Sau khi đăng xuất, có thể đóng dialog và overlay
    setShowLogoutDialog(false);
    setShowOverlay(false);
  };
 
  const openDialog = () => {
    setShowLogoutDialog(true);
    setShowOverlay(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={openDialog}
        style={styles.logoutButton}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      {showOverlay && (
        <View style={styles.overlay}>
          <LogoutDialog
            visible={showLogoutDialog}
            onCancel={() => {
              setShowLogoutDialog(false);
              setShowOverlay(false);
            }}
            onLogout={handleLogout}
          />
        </View>
      )}
    </View>
  );
};

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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderRadius: 20,
    borderTopColor: 'green',
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
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'lightgreen',
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

export default Logout;
