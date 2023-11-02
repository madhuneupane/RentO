import React, { useEffect, useState } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Postdata = (ownerData, setResponse, setLoading) => {
  const api1 = new ApiClient("/addProperty");

  const postData = async () => {
    try {
      setLoading(true);
      token = await AsyncStorage.getItem("token");
      const response = await api1.postOwnerData(token, ownerData);
      if (response) {
        // setLoading(false);
        setResponse(response);
        console.log("response" + JSON.stringify(response));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("in effect");
    if (ownerData.imageUploaded) postData();
  }, [ownerData.imageUploaded]);
};

export default Postdata;
