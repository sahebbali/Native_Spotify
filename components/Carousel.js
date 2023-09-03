// import React from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import Carousel, { Pagination } from "react-native-snap-carousel";

// const images = [
//   "https://source.unsplash.com/1024x768/?nature",
//   "https://source.unsplash.com/1024x768/?water",
//   "https://source.unsplash.com/1024x768/?girl",
//   "https://source.unsplash.com/1024x768/?tree",
// ];

// const CarouselComponent = () => {
//   const [activeSlide, setActiveSlide] = React.useState(0);

//   const renderItem = ({ item }) => (
//     <View style={styles.slide}>
//       <Image source={{ uri: item }} style={styles.image} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <SliderBox images={images} dotColor="red" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   slide: {
//     width: 300,
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   pagination: {
//     marginTop: 10,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#888",
//   },
// });

// export default CarouselComponent;
