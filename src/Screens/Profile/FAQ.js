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
import { ButtonWithIcon } from "./ButtonProfile";

const FAQ = () => {
    const [questionStates, setQuestionStates] = useState({});
    const [textSearch, setTextSearch] = useState("");
    const [FAQ, setFAQ] = useState(0);
    const FAQItems = [
        { text: "General", source: "" },
        { text: "Account", source: "" },
        { text: "Service", source: "" },
        { text: "Payment", source: "" },
        { text: "All", source: "" },
        { text: "All", source: "" },
        { text: "All", source: "" },
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
        { id: 'Foodu', label: 'What is Foodu' },
        { id: 'makePay', label: 'How can I make a payment?' },
        { id: 'cancelOrder', label: 'How do I can cancel orders?' },
        { id: 'deleteAccount', label: 'How do I delete my account?' },
        { id: 'exit', label: 'How do I exit the app?' },
      ];
    return (
        <View>
            <View style={[Padding.pd_horizontal_30, Margin.mb_30]}>
            {/* {getHeaderHomeFragment({
            name: "Recommended For You",
            icon: "abc",
            onPress: () => redirectListCardScreen(Routers.Recommended),
            })} */}
            <FlatList 
            contentContainerStyle={[
                Padding.pd_vertical_10,
                Margin.mb_25,
                { paddingHorizontal: 2},
            ]}
            ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
            showsHorizontalScrollIndicator={false}
            data={FAQItems}
            horizontal={true}
            renderItem={({ item, index }) => (
                <ChipCustom
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
                <FlatList
                   contentContainerStyle={styles.flatListContainer}
                   data={questions}
                   renderItem={({ item }) => (
                        <ButtonWithIcon
                            id ={item.id}
                            label={item.label}
                            iconButton={require('../../../assets/Icons/sort-down.png')}
                            onPress={() => toggleContent(item.id)}

                        />
                   )}
                />
                    {Object.keys(questionStates).map((id) =>
                    questionStates[id] ? (
                    <View style={styles.buttonContent} key={id}>
                        <Text>content</Text>
                    </View>
                    ) : null
                )}
            </View>
        </View>
    </View>
    );
}

export default FAQ;