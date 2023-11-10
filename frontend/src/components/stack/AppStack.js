import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  HeaderBackButton,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import CameraSelector from "../container/CameraSelector";
import EnterContainer from "../container/EnterContainer";
import ImageSelector from "../container/ImageSelector";
import ListingDetails from "../container/ListingDetails";
import Listings from "../container/Listings";
import Login from "../container/Login";
import LoginRentor from "../container/LoginRentor";
import OwnerNewPost from "../container/OwnerNewPost";
import OwnerOnboarding3 from "../container/OwnerOnBoarding3";
import OwnerOnboarding4 from "../container/OwnerOnBoarding4";
import OwnerOnBoarding5 from "../container/OwnerOnBoarding5";
import OwnerOnBoarding6 from "../container/OwnerOnBoarding6";
import OwnerOnboarding7 from "../container/OwnerOnBoarding7";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerOnboarding2 from "../container/OwnerOnboarding2";
import PropertyDescription from "../container/PropertyDescription";
import SelectImageOption from "../container/SelectImageOption";
import Title from "../container/Title";
import WelcomeScreen from "../container/WelcomeScreen";
import OwnerTabs from "./OwnerTabs";
import RentorTabs from "./RentorTabs";
import PostCreated from "../container/postCreated";
import PanaromaView from "../container/PanaromaView";
import TenantInterested from "../container/TenantInterested";
import UserShownInterest from "../container/UserShownInterest";
import SingUp from "../container/SinUp";
import SingUp2 from "../container/SignUp2";
import SingUp3 from "../container/SignUp3";
import OwnerNewListingStart from "../container/OwnerNewListingStart";

const Stack = createStackNavigator();

const AppStack = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#36827F",
      background: "white",
      // height:"100%"
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="entercontainer"
          component={EnterContainer}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login_rentor"
          component={LoginRentor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SingUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup2"
          component={SingUp2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup3"
          component={SingUp3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen name="list_view" component={Listings} />
        <Stack.Screen
          name="rentor"
          component={RentorTabs}
          options={{
            headerBackground: () => <Title />,
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner"
          component={OwnerTabs}
          options={{
            headerBackground: () => <Title />,
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "white",
            headerBackTitle: false,
            // headerLeft: () => {
            //   navigation.pop(); // The B screen will delete
            //   navigation.navigate("welcome");
            // },
          }}
        />
        {/* <Stack.Screen
          name="owner_welcome"
          component={OwnerTabs}
          options={{
            headerTitle: "",
            headerBackTitle: "",
            headerTintColor: "black",
          }}
        /> */}
        <Stack.Screen
          name="owner_onboarding_start"
          component={OwnerNewListingStart}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding1"
          component={OwnerOnboarding1}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding2"
          component={OwnerOnboarding2}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding3"
          component={OwnerOnboarding3}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding4"
          component={OwnerOnboarding4}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding5"
          component={OwnerOnBoarding5}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding6"
          component={OwnerOnBoarding6}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="ower_new_post"
          component={OwnerNewPost}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_property_desc"
          component={PropertyDescription}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="owner_onboarding7"
          component={OwnerOnboarding7}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="upload_options"
          component={SelectImageOption}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="image_select"
          component={ImageSelector}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="camera_select"
          component={CameraSelector}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="listing_details"
          component={ListingDetails}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="post_created"
          component={PostCreated}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />

        <Stack.Screen name="panaroma_view" component={PanaromaView} />
        <Stack.Screen
          name="tenant_interested"
          component={TenantInterested}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
        <Stack.Screen
          name="show_interest"
          component={UserShownInterest}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "",
            headerTintColor: "black",
            headerBackTitle: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
