import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import { Styles } from "./Login.style";
import { Margin, TypographyStyles } from "../../utils/StyleUtil";
import CommonButton from "../../components/Buttons/CommonButton";
import { Colors } from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import ApiUrlConstants from "../../utils/api_constants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/actions/userAction";

const Login = () => {
  const navigation = useNavigation();
  const dispath = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [page, setPage] = useState("Login");
  const [notifyMess, setnotifyMess] = useState(null);

  const validate = () => {
    let validate = true;
    if (username == "") return false;
    if (password == "") return false;
  };
  const changePage = () => {
    if (page === "") {
      setPage("Login");
    } else {
      setPage("Signup");
    }
  };
  const goToSignIn = () => {
    setPage("Login");
  };
  const signIn = async () => {
    try {
      const response = await fetch(ApiUrlConstants.signIn, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] !== "success") {
        setnotifyMess("User or password invalid. Please check again");
      } else {
        // Đăng nhập thành công
        const dataUser = data["data"];
        dispath(
          loginSuccess({
            id: dataUser["id"],
            avatar: dataUser["avatar"],
            cartId: dataUser["cart_id"],
            phoneNumber: dataUser["phone_number"],
            userName: dataUser["user_name"],
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async () => {
    if (password !== confirmPassword) {
      setnotifyMess("Password mismatch");
      return;
    }

    try {
      const response = await fetch(ApiUrlConstants.signUp, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        setPage("Login");
        setnotifyMess("");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../../assets/Images/foodu.png")}
        style={[Styles.logo, Margin.mb_15]}
      />
      <Text style={[TypographyStyles.big, Margin.mb_10]}>
        Login to Your Account
      </Text>
      <CustomTextInput
        placeholder={"Enter Username"}
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <CustomTextInput
        placeholder={"Enter Password"}
        type={"password"}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      {page == "Signup" && (
        <CustomTextInput
          placeholder={"Confirm Password"}
          type={"Confirm password"}
          onChangeText={(password) => {
            setConfirmPassword(password);
          }}
        />
      )}

      <CommonButton
        title={page === "Login" ? "Sign in" : "Sign up"}
        bgColor={Colors.primaryColor}
        textColor={Colors.white}
        onPress={page == "Login" ? signIn : signUp}
        height={50}
        borderRadius={30}
        width={"100%"}
      />
      {notifyMess && (
        <Text
          style={[{ color: Colors.red, marginTop: 10, fontWeight: "bold" }]}
        >
          {notifyMess}
        </Text>
      )}

      <TouchableOpacity onPress={changePage}>
        <Text style={[Margin.mt_15]}>
          {page == "Login" ? "If i don't have a account. Please sign up" : ""}
        </Text>
      </TouchableOpacity>
      {page === "Signup" && (
        <TouchableOpacity onPress={goToSignIn}>
          <Text style={{ marginTop: -20 }}>
            If I have an account. Please sign in
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
