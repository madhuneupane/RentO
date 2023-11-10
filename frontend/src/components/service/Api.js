import qs from "qs";
import axios from "axios";
import { BASE_URL } from "../static/ApiConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
let testtoken;
const url = BASE_URL;
const apiInstance = axios.create({
  baseURL: url,
  params: {},
});
class ApiClient {
  constructor(endpoint) {
    console.log("en:" + endpoint);
    this.endpoint = endpoint;
  }
  loginUser = async () => {
    console.log("endpoint:" + this.endpoint);
    await apiInstance
      .get(this.endpoint)
      .then((response) => {
        console.log("id:" + JSON.stringify(response.data));
        AsyncStorage.setItem("token", response.data.token);
        AsyncStorage.setItem("id", response.data.id);
      })
      .then((testtoken = await AsyncStorage.getItem("token")));
  };
  getSingleProperty = async (id) => {
    apiInstance.defaults.headers.common["Authorization"] =
      await AsyncStorage.getItem("token");
    const response = await apiInstance.get(
      `http://3.232.202.158/api/fetchPropertyById/${id}`
    );
    return response;
  };
  newUser = async (data, headers) => {
    apiInstance.defaults.headers.common["Authorization"] = headers;
    console.log("toke:" + JSON.stringify(headers));
    console.log("data:" + JSON.stringify(data));
    const response = await apiInstance.post(this.endpoint, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      phonenumber: data.contactNumber,
      isOwner: data.owner == "Yes" ? "true" : false,
    });
    console.log(response.data);
  };
  getAllData = async (headers) => {
    apiInstance.defaults.headers.common["Authorization"] = headers;
    console.log("toke:" + JSON.stringify(headers));
    const response = await apiInstance.get(this.endpoint);
    return response.data;
  };
  getDescription = async (token, ownerSelections) => {
    console.log("t: " + token);
    apiInstance.defaults.headers.common["Authorization"] = token;
    const response = await apiInstance.post(this.endpoint, {
      content: ownerSelections,
    });
    console.log("description: " + JSON.stringify(response.data));
    return response.data;
  };
  getOwnerPosts = async (token, id) => {
    apiInstance.defaults.headers.common["Authorization"] = token;
    console.log("token in post" + token);
    console.log("id of owner:" + id);
    const response = await apiInstance.get(this.endpoint + `/${id}`);
    console.log("onwer posts: " + JSON.stringify(response.data));
    return response.data;
  };
  getInterestedTenant = async (token) => {
    apiInstance.defaults.headers.common["Authorization"] = token;
    const response = await apiInstance.get(this.endpoint);
    console.log("InterestedTenant: " + JSON.stringify(response.data));
    return response.data;
  };
  updateInteredtedList = async (propertyId, interestedId, token) => {
    apiInstance.defaults.headers.common["Authorization"] = token;
    const response = await apiInstance.post(this.endpoint, {
      propertyId: propertyId,
      interestedId: interestedId,
    });
    console.log("InterestedList: " + JSON.stringify(response.data));
    return response.data;
  };
  postOwnerData = async (token, ownerData) => {
    apiInstance.defaults.headers.common["Authorization"] = token;
    const id = await AsyncStorage.getItem("id");
    console.log("owner data:" + JSON.stringify(ownerData));
    const response = await apiInstance.post(this.endpoint, {
      type: ownerData.ownerData.propertyType,
      title: ownerData.ownerData.placeType,
      location: ownerData.ownerData.address,
      rent: ownerData.ownerData.amount,
      roomNumbers: ownerData.ownerData.room,
      bathRoomNumbers: ownerData.ownerData.bathroom,
      ownerID: id,
      amenities: {
        pet: ownerData.ownerData.amenities.petfriendly,
        parkingSpace: ownerData.ownerData.amenities.parking,
        heating: ownerData.ownerData.amenities.heating,
        airConditioning: ownerData.ownerData.amenities.air_conditioning,
        washerDryer: ownerData.ownerData.amenities.washer_dryer,
        wifi: ownerData.ownerData.amenities.wifi,
      },
      images: {
        bedrooms: {
          left: ownerData.ownerData.images.image1,
          right: ownerData.ownerData.images.image2,
          top: ownerData.ownerData.images.image3,
          bottom: ownerData.ownerData.images.image4,
          front: ownerData.ownerData.images.image5,
          back: ownerData.ownerData.images.image6,
        },
      },
      description: ownerData.ownerData.description,
    });
    console.log("owner response:" + JSON.stringify(response.data));
    return response.data;
  };
}
export default ApiClient;
