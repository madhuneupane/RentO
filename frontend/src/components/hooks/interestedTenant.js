import React, { useEffect } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const interestedTenant = (setTenants) => {
  const api = new ApiClient("/fetchAllUser");
  const getTenant = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      const response = await api.getInterestedTenant(token);
      console.log("response::" + JSON.stringify(response));
      setTenants(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("getTenant  effect");
    getTenant();
  }, []);
};

export default interestedTenant;
