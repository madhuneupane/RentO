import React, { useEffect, useState } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const addUser = (data) => {
  const apiClient = new ApiClient(`/addUser`);

  const saveUser = async () => {
    try {
      token = await AsyncStorage.getItem("token");
      console.log("data:::" + JSON.stringify(data));
      apiClient.newUser(data, token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saveUser();
  }, []);
};

export default addUser;
