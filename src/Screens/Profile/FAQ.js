import { useState } from "react";
import { Margin, Padding } from "../../utils/StyleUtil";
import { FlatList, View } from "react-native";
import ChipCustom from "../../components/ChipCustom";
import SeparatorComponent from "../../components/SeparatorComponent";
import { SearchInput } from "../../components/Inputs/CustomTextInput";
import styles from "./Profile.Styles";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { ButtonWithIcon, ShowDropDown, TabCustom } from "./ButtonProfile";
// import CustomDropdown from "./Demo";

const FAQ = () => {
    const [questionStates, setQuestionStates] = useState({});
    const [textSearch, setTextSearch] = useState("");
    const [FAQ, setFAQ] = useState(0);
    const FAQItems = [
        { text: "General", source: "" },
        { text: "Account", source: "" },
        { text: "Service", source: "" },
        { text: "Payment", source: "" },
      ];
    const redirectListCardScreen = (name) => {
    navigation.navigate(name);
    };
    const [isContentVisible, setContentVisible] = useState(false);
    const toggleContent = (id) => {
        setQuestionStates((prevState) => ({
          ...prevState,
          [id]: !prevState[id] || false,
        }));
      };
    
    const questions = [
        { id: "foodu", label: "What is Foodu", content:'' },
        { id: "makePay", label: "How can I make a payment?", content:'' },
        { id: "cancelOrder", label: "How do I can cancel orders?", content:'' },
        { id: "deleteAccount", label: "How do I delete my account?", content:'' },
        { id: "exit", label: "How do I exit the app?", content:'' },
      ];
    return (
        <View style = {styles.page}>
             {/* <View>
                <Text>{props.navigation.route.title}</Text>
            </View> */}
            <View>
                <FlatList 
                contentContainerStyle={[
                    Padding.pd_vertical_10,
                    { paddingHorizontal: 2},
                ]}
                ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
                showsHorizontalScrollIndicator={false}
                data={FAQItems}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <TabCustom
                        text={item.text}
                        source={null}
                        isChoose={FAQ == index}
                        onPress={() => {
                            setFAQ(index);
                        }}
                    />
                )}
                />
                <View style={Margin.mb_25}>
                    <SearchInput
                    value={textSearch}
                    onChangeText={(text) => {
                        setTextSearch(text);
                    }}
                    placeholder={"Search"}
                    />
                </View>
                <View style={styles.contentProfileDetail}>
                            {/* {questions.map((item) => (
                                <ShowDropDown
                                    key={item.id}
                                    label={item.label}
                                    content={`Content for ${item.label}`}  
                                />
                            ))}
                        */}
                        <ShowDropDown
                            label = {"what?"}
                            content={"content"}
                        />
                        {/* {Object.keys(questionStates).map((id) =>
                        questionStates[id] ? (
                        <View style={styles.buttonContent} key={id}>
                            <Text>content</Text>
                        </View>
                        ) : null
                    )} */}
                
                </View>
            </View>
    </View>
    );
}

export default FAQ;