import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OwnerOnboarding1 from "../container/OwnerOnboarding1";
import OwnerOnboarding2 from "../container/OwnerOnboarding2";
import OwnerOnboarding3 from "../container/OwnerOnBoarding3";
import OwnerOnboarding4 from "../container/OwnerOnBoarding4";
import OwnerOnBoarding5 from "../container/OwnerOnBoarding5";
import OwnerOnBoarding6 from "../container/OwnerOnBoarding6";
import { OwnerNewPost } from "../container/OwnerNewPost";
import SelectImageOption from "../container/SelectImageOption";
import ImageSelector from "../container/ImageSelector";
import CameraSelector from "../container/CameraSelector";
import PropertyDescription from "../container/PropertyDescription";
import OwnerOnboarding7 from "../container/OwnerOnBoarding7";

const OwnerStack = createNativeStackNavigator();
const OwnerOnboardingStack = () => {
  return (
    <OwnerStack.Navigator>
      <OwnerStack.Screen
        name="owner_onboarding1"
        component={OwnerOnboarding1}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding2"
        component={OwnerOnboarding2}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding3"
        component={OwnerOnboarding3}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding4"
        component={OwnerOnboarding4}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding5"
        component={OwnerOnBoarding5}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding6"
        component={OwnerOnBoarding6}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_onboarding7"
        component={OwnerOnboarding7}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="ower_new_post"
        component={OwnerNewPost}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen name="upload_options" component={SelectImageOption} />
      <OwnerStack.Screen
        name="image_select"
        component={ImageSelector}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="camera_select"
        component={CameraSelector}
        options={{ headerShown: false }}
      />
      <OwnerStack.Screen
        name="owner_property_desc"
        component={PropertyDescription}
        options={{ headerShown: false }}
      />
    </OwnerStack.Navigator>
  );
};

export default OwnerOnboardingStack;
