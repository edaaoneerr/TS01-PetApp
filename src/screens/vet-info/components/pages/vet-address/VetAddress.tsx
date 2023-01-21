import { ScrollView, View, Text, ImageBackground} from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPinIcon, PhoneIcon } from 'react-native-heroicons/outline';
import createStyles from "./VetAddress.style";
import { useTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface VetAddressProps {
  name: string;
  address: string;
  phone_number: string;
  email: string;
}
const VetAddress: React.FC<VetAddressProps> = () => {

 const theme = useTheme();
 const { colors } = theme;
 const styles = useMemo(() => createStyles(theme), [theme]);

  const img = {uri: 'https://static-maps.yandex.ru/1.x/?lang=tr_TR&l=map&pt=32.8382691246,39.8956271266,org&scale=1.5&size=650,350&z=13'};
  
  let clinicName,address,number,email;

  return (
    <SafeAreaView style={styles.safeView}>
    <ScrollView contentContainerStyle={styles.scrollableContentHome} showsVerticalScrollIndicator={false}>
    <View style={styles.vetAddressContainer}>
      <FontAwesome name="hospital-o" size={35} color="#00C2CB" style={styles.clinicIcon} />
      <Text style={styles.clinicInfoText}>Klinik Bilgisi</Text>
      <MapPinIcon style={styles.addressIcon} size={20} color="#0EBE7F" />
      <Text style={styles.addressTextGreen}>Açık Adres</Text>
      <Text style={styles.addressText}>{address}</Text>
      <Text style = {styles.clinicText}>{clinicName = "DORUKGİLLER VETERİNER KLİNİĞİ"}</Text>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={styles.mapContainer}
        source={img}
        resizeMode="cover"
      >
      </ImageBackground>
    </View>
    <View style={styles.vetContactContainer}>
      <Text style={styles.contactTitleText}>
        <FontAwesome name="address-card" size={17} color={colors.vetblue} />
        <Text style={styles.contactText}>  İletişim</Text>
      </Text>
      <PhoneIcon  style = {{left: 30, top:30}} size={15} color="#0EBE7F" />
      <Text style = {{left: 55, top:13}}>{number = "0532 633 04 87"}</Text>
      <FontAwesome style = {{left: 30, top:20}} name="envelope" size={15} color="#0EBE7F"/>
      <Text style = {{left: 55, top:2}}>{email = "dorukgiller@gmail.com"}</Text>
    </View>
  </ScrollView>
  </SafeAreaView>
  );
  };
  
  export default VetAddress;
  