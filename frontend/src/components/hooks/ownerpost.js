import React, { useEffect, useState } from "react";
import ApiClient from "../service/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ownerpost = (setOwnerPosts, refreshing) => {
  const api1 = new ApiClient("/fetchPropertiesByOwner");
  const getPosts = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      const id = await AsyncStorage.getItem("id");
      const response = await api1.getOwnerPosts(token, id);
      console.log("response::" + JSON.stringify(response));
      setOwnerPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("owner post effect");
    getPosts();
  }, [refreshing]);
};

export default ownerpost;
