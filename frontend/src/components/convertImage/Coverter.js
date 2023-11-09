import SvgXml from "react-native-svg";
import image from "../../../assets/MyListings.js";
Converter = () => {
  return (
    <View>
      <SvgXml xml={image} />
    </View>
  );
};
export default Converter;
