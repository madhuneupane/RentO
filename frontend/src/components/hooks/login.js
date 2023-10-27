import React, { useEffect, useState } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = ({ email, password }) => {
  const apiClient = new ApiClient(`/fetchSingleUser/${email}/${password}`);

  const getToken = async () => {
    try {
      apiClient.loginUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
};

export default login;
