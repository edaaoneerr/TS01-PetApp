import { View, Pressable, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import createStyles from "./ServiceCard.style";
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ServiceCardProps {
}
const ServiceCard: React.FC<ServiceCardProps> = () => {

 const theme = useTheme();
 const { colors } = theme;
 const styles = useMemo(() => createStyles(theme), [theme]);
 let clinicName = "";
  const img = {uri: 'https://static-maps.yandex.ru/1.x/?lang=tr_TR&l=map&pt=32.8382691246,39.8956271266,org&scale=1.5&size=650,350&z=13'};
  let [clinicData, setClinicData] = useState([]);
  let content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
  const contentShort = content.slice(0,350);
  const [cExpanded, setCExpanded] = useState(false);
  return (
    <View style={styles.serviceContainer}>
        <FontAwesome name="hospital-o" size={35} color="#00C2CB" style={styles.clinicIcon} />
        <Text style={styles.clinicInfoText}>Klinik Bilgisi</Text>
        <Text style={styles.clinicText}>{clinicName = "DORUKGİLLER VETERİNER KLİNİĞİ"}</Text>
        <Text style={{color: '#3F434A'}}>
          {cExpanded ? content : contentShort}
        </Text>
        <Pressable onPress={() => setCExpanded(!cExpanded)}>
          <Text>Daha fazlasını göster</Text>
        </Pressable>
      </View>
  );
  };
  
  export default ServiceCard;
  