import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Margin, Padding } from '../../utils/StyleUtil'
import ChipCustom from '../../components/ChipCustom'
import SeparatorComponent from '../../components/SeparatorComponent'
import { DummyChip } from '../../Data/DummyData'
import { ListTileCard } from '../../components/Cards/Cards'
import { Colors } from '../../utils/Colors'


const ListCard = () => {
    const [chip, setChip] = useState(0);
    return (
        <View style={[Styles.container, Padding.pd_horizontal_30]}>
            <View>
                <FlatList contentContainerStyle={[Padding.pd_vertical_5, Margin.mb_25, { paddingHorizontal: 2, height: 60 }]} ItemSeparatorComponent={SeparatorComponent({ width: 15 })} showsHorizontalScrollIndicator={false} data={DummyChip} horizontal={true} renderItem={({ item, index }) => (
                    <ChipCustom text={item.text} isChoose={chip == index} onPress={() => {
                        setChip(index);
                    }} />
                )} />
            </View>
            <View>
                <FlatList contentContainerStyle={[Padding.pd_vertical_5, Margin.mb_25, { paddingHorizontal: 2 }]} ItemSeparatorComponent={SeparatorComponent({ width: 15 })} showsVerticalScrollIndicator={false} data={DummyChip} renderItem={({ item, index }) => (
                    <ListTileCard />
                )} />
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingBottom: 100,
    },
});

export default ListCard