import React from 'react'
import { View } from 'react-native';
import { Caption, Title, Avatar } from 'react-native-paper';




export const RightHeader = ({ navigation }) => (
  <View
    style={{
      flexDirection: 'row'
    }}
  >
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }}
    >
      <Caption style={{ margin: 0 }}>Welcome Back,</Caption>
      <Title style={{ margin: 0 }}>Mehdi Karim</Title>
    </View>
    <Avatar.Text
      style={{
        margin: 8
      }}
      size={52}
      label="MK"
    />
  </View>
)

export default RightHeader