import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
    CommonStyles,
    Margin,
    Padding,
    TypographyStyles,
} from "../../utils/StyleUtil";
import { Colors } from '../../utils/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const UpdateCustomer = () => {
    const [id, setId] = useState('');
    const [role, setRole] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [isActive, setIsActive] = useState('');
    const [cartId, setCartId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [avatar, setAvatar] = useState('');
    const route = useRoute();
    const { customerId } = route.params; 

    useEffect(() => {
        // Truy cập dữ liệu khách hàng dựa trên customerId
        // Ví dụ: Gọi API hoặc truy cập Redux state để lấy thông tin khách hàng
        // Sau đó, cập nhật các state để hiển thị trên giao diện
      }, [customerId]);
    const handleUpdateCustomer = () => {
        // Thực hiện xử lý khi người dùng nhấn nút cập nhật khách hàng
        // Ví dụ: Gửi dữ liệu cập nhật lên server, lưu vào cơ sở dữ liệu, ...
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={TypographyStyles.medium}>Update Customer Information</Text>

                {/* Form input */}
                <TextInput
                    style={styles.input}
                    placeholder="ID"
                    value={id}
                    onChangeText={setId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Role"
                    value={role}
                    onChangeText={setRole}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Fullname"
                    value={fullname}
                    onChangeText={setFullname}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Gender"
                    value={gender}
                    onChangeText={setGender}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date of Birth"
                    value={dob}
                    onChangeText={setDob}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Is Active"
                    value={isActive}
                    onChangeText={setIsActive}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cart ID"
                    value={cartId}
                    onChangeText={setCartId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Avatar"
                    value={avatar}
                    onChangeText={setAvatar}
                />

                {/* Nút cập nhật thông tin khách hàng */}
                <TouchableOpacity style={styles.button} onPress={handleUpdateCustomer}>
                    <Text>Update </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 8,
        marginVertical: 8,
    },
    button: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 16,
    },
});

export default UpdateCustomer;
