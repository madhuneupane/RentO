import { useEffect } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const addInterested = (propertyId, interestedId, setTenants) => {
  const api = new ApiClient("/addInterested");
  const addTenant = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      const response = await api.updateInteredtedList(
        propertyId,
        interestedId,
        token
      );
      // console.log("response::" + JSON.stringify(response));
      setTenants(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("addInterested  effect");
    addTenant();
  }, []);
};

export default addInterested;
