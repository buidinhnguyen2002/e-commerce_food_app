import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Menu, IconButton, Provider } from 'react-native-paper';

const CustomDropdown = ({ title, items }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    closeMenu();
  };

  return (
    <Provider>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{title}</Text>
        <IconButton icon="menu-down" onPress={openMenu} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="menu-down" onPress={openMenu} />}
        >
          {items.map((item) => (
            <Menu.Item key={item} title={item} onPress={() => handleItemPress(item)} />
          ))}
        </Menu>
      </View>
      {selectedItem && (
        <View>
          <Text>Selected: {selectedItem}</Text>
          {/* Render additional content based on the selected item */}
        </View>
      )}
    </Provider>
  );
};

export default CustomDropdown;
