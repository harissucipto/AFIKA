import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Flex, WingBlank } from 'antd-mobile-rn';

const Header = ({ children, navigation }) => {
  return (
    <View style={{ height: 181 }}>
      <WingBlank style={{ marginTop: 30 }}>
        <Flex>
          <Flex.Item>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <Text>Kembali</Text>
            </TouchableOpacity>
          </Flex.Item>
          <Flex.Item>
            <Text>Tambah Surah</Text>
          </Flex.Item>
        </Flex>
      </WingBlank>

      {children}
    </View>
  );
};

export default Header;
