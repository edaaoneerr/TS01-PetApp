import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import Header from "@shared-components/header/Header";
import {View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { City, District, Street, getCities, getDistricts, getStreets } from "@services/address-service/AddressService";


interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState();
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [streets, setStreets] = useState<Street[]>([]);
  const [selectedStreet, setSelectedStreet] = useState();
    
 
    useEffect(() => {
      const fetchCities = async () => {
        const cities = await getCities();
        setCities(cities);
      };
      fetchCities();
    }, []);
    useEffect(() => {
      const fetchDistricts = async () => {
        const districts = await getDistricts();
        setDistricts(districts);
      };
      fetchDistricts();
    }, []);

    useEffect(() => {
      const fetchStreets = async () => {
        const streets = await getStreets();
        setStreets(streets);
      };
      fetchStreets();
    }, []);


 return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View>
            <Picker  
                mode= "dropdown"
                style={{ height: 50, width: 250}}
                selectedValue={selectedCity}
                onValueChange={(itemValue) => setSelectedCity(itemValue)}>
                {cities.map((city) => (
                    <Picker.Item key={city.city_id} label={city.city_name} value={city.city_name} />
                ))}
            </Picker>
        </View>

        <View style={{ height: 50, width: 250, backgroundColor: 'red', top: 10}}>
        <Picker
         mode= "dropdown"
         style={{ height: 50, width: 250, backgroundColor: colors.red}}
         selectedValue={selectedDistrict}
         onValueChange={itemValue => [setSelectedDistrict(itemValue)]}>
         { districts.filter(district => district.city_id === cities.find(city => city.city_name === selectedCity)?.city_id )
         .map((district) => { 
          return (
             <Picker.Item key={district.district_id} label={district.district_name} value={district.district_name} />
          );
          })}
         
       </Picker>
        </View>



        <View style={{ height: 50, width: 250, backgroundColor: 'green', top: 10}}>
        <Picker
         mode="dropdown"
        style={{ height: 55, width: 255, backgroundColor: colors.red }}
        selectedValue={selectedStreet}
        onValueChange={(itemValue) => [setSelectedStreet(itemValue)]}>
        {streets.filter(street => street.district_id === districts.find(district => district.district_name === selectedDistrict)?.district_id).map(street => { 
          console.log(selectedDistrict);
          return (
             <Picker.Item key={street.street_id} label={street.street_name} value={street.street_name} />
          );
          })}
      </Picker>


        </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
