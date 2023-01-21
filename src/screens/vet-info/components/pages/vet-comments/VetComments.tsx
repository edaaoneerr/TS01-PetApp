import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from "./VetComments.style";
import { useTheme } from "@react-navigation/native";

interface VetCommentsProps {
}
const VetComments: React.FC<VetCommentsProps> = () => {

 const theme = useTheme();
 const { colors } = theme;
 const styles = useMemo(() => createStyles(theme), [theme]);

  const img = {uri: 'https://static-maps.yandex.ru/1.x/?lang=tr_TR&l=map&pt=32.8382691246,39.8956271266,org&scale=1.5&size=650,350&z=13'};
  
  return (
    <View style={styles.container}>
      <Text>
        Notification
      </Text>
    </View>
  );
  };
  
  export default VetComments;
  