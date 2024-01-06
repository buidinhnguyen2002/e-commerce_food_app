import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const UserListItem = ({ avatar, name, phone, invited, onInvite }) => {
  return (
    <View style={styles.userItem}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userPhone}>{phone}</Text>
      </View>
      <TouchableOpacity
        style={[styles.inviteButton, invited && styles.invitedButton]}
        onPress={onInvite}
        disabled={invited}
      >
        <Text style={[styles.inviteButtonText, invited && styles.invitedText]}>{invited ? 'Invited' : 'Invite'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const InviteFriends = () => {
  const [users, setUsers] = useState([
    { id: 1, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 1', phone: '123-456-7890', invited: false },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 2', phone: '123-456-7890', invited: false },
    { id: 3, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 3', phone: '123-456-7890', invited: false },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 4', phone: '123-456-7890', invited: false },
    { id: 5, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 5', phone: '123-456-7890', invited: false },
    { id: 6, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 6', phone: '123-456-7890', invited: false },
    { id: 7, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 7', phone: '123-456-7890', invited: false },
    { id: 8, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 8', phone: '123-456-7890', invited: false },
    { id: 9, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 9', phone: '123-456-7890', invited: false },
    { id: 10, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 10', phone: '123-456-7890', invited: false },
    { id: 11, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 11', phone: '123-456-7890', invited: false },
    { id: 12, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 12', phone: '123-456-7890', invited: false },
    { id: 13, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 13', phone: '123-456-7890', invited: false },
    { id: 14, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 14', phone: '123-456-7890', invited: false },
    { id: 15, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 15', phone: '123-456-7890', invited: false },
    { id: 16, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'User 16', phone: '123-456-7890', invited: false },
   
    // Add more users as needed
  ]);

  const handleInvite = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, invited: true };
        }
        return user;
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source = {require('../../../assets/Icons/arrowBack.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite Friend</Text>
      </View> */}
      <ScrollView contentContainerStyle={styles.content}>
        {users.map((user) => (
          <UserListItem
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            phone={user.phone}
            invited={user.invited}
            onInvite={() => handleInvite(user.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  content: {
    padding: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
  },
  inviteButton: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 8,
    width: 80,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'green'
  },
  invitedButton: {
    borderColor:'green',
    backgroundColor:'white',
    borderWidth: 2
},
  inviteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
  invitedText: {
    color: 'green', 
    fontWeight: 'bold',
  },
  
});

export default InviteFriends;
