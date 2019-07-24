import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = props => {
  const { isLoading, children } = props;
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return children;
};

export default Loading;
