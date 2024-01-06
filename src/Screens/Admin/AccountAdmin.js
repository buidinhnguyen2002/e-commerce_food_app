import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TypographyStyles, CommonStyles } from "../../utils/StyleUtil";
import { useNavigation } from "@react-navigation/native";

const AccountAdmin = () => {
  const data = [
    {
      id: "1",
      fullname: "John Doe",
      gender: "Male",
      phoneNumber: "123-456-7890",
    },
    {
      id: "2",
      fullname: "John Doe",
      gender: "Male",
      phoneNumber: "123-456-7890",
    },
    {
      id: "3",
      fullname: "John Doe",
      gender: "Male",
      phoneNumber: "123-456-7890",
    },
    {
      id: "4",
      fullname: "John Doe",
      gender: "Male",
      phoneNumber: "123-456-7890",
    },
  ];
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Account</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.actionCell}>ID</Text>
          <Text style={styles.headerCell}>Fullname</Text>
          <Text style={styles.headerCell}>Gender</Text>
          <Text style={styles.headerCell}>Phone </Text>
          <Text style={styles.actionCell}>Action</Text>
        </View>

        {data.map((item) => (
          <View key={item.id} style={styles.dataRow}>
            <Text style={styles.actionCell}>{item.id}</Text>
            <Text style={styles.dataCell}>{item.fullname}</Text>
            <Text style={styles.dataCell}>{item.gender}</Text>
            <Text style={styles.dataCell}>{item.phoneNumber}</Text>
            <Text style={styles.actionCell}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateProductsAdmin")}
              >
                <Image
                  style={[CommonStyles.iconSizeSmall, { marginLeft: 10 }]}
                  source={require("../../../assets/Icons/bx-user-x.png")}
                ></Image>
              </TouchableOpacity>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 16,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "#2E8B57",
  },
  dataCell: {
    flex: 1,
  },
  actionCell: {
    flex: 0.5,
    alignItems: "center", // Căn giữa theo chiều ngang
    justifyContent: "space-between", // Căn giữa theo chiều dọc
    color: "#2E8B57",
    fontWeight: "bold",
  },
});

export default AccountAdmin;
