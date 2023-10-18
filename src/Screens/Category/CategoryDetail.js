import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Padding, Margin } from '../../utils/StyleUtil';
import SeparatorComponent from '../../components/SeparatorComponent';
import ChipCustom from '../../components/ChipCustom';
import { DummyChipFilter } from '../../Data/DummyData';
import { StyleSheet } from 'react-native';
import { ListTileCard } from '../../components/Cards/Cards';
import { Colors } from '../../utils/Colors';

const CategoryDetail = ({ navigation, route }) => {
    const { titleHeader } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: titleHeader === '' ? navigation.title : titleHeader,
        });
    }, []);
    return (
        <View style={[Padding.pd_horizontal_30, Styles.container]}>
            <View>
                <FlatList contentContainerStyle={[Padding.pd_vertical_5, Margin.mb_25, { paddingHorizontal: 2, height: 60 }]} ItemSeparatorComponent={SeparatorComponent({ width: 15 })} showsHorizontalScrollIndicator={false} data={DummyChipFilter} horizontal={true} renderItem={({ item, index }) => (
                    <ChipCustom text={item.text} isChoose={false} onPress={() => {
                        setChip(index);
                    }} />
                )} />
            </View>
            <View style={[{ flex: 1 }]}>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ paddingHorizontal: 10 }}>
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                    <ListTileCard />
                </ScrollView>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    }
});

export default CategoryDetail