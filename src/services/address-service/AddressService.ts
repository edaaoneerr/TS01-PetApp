import axios from "axios";

export interface City {
    city_id: number;
    city_name: string;
}
export interface District {
    district_id: number;
    district_name: string;
    city_id: number;
    city_name: string;
}
export interface Street {
    street_id: number;
    street_name: string;
    district_id: number;
    district_name: string;
    city_id: number;
    city_name: string;
    zip_code: string;
    districts: District[];
}

const API_URL = 'http://10.0.2.2:5000';

export async function getCities(): Promise<City[]> {
    try {
      const response = await axios.get(API_URL + "/city");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  export async function getDistricts(): Promise<District[]> {
    try {
      const response = await axios.get(API_URL + "/district");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  export async function getStreets(): Promise<Street[]> {
    try {
      const response = await axios.get(API_URL + "/street");
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }