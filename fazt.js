// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Platform,
// } from "react-native";
// import logo from "./images/avatar.png";
// import * as ImagePicker from "expo-image-picker";
// import * as Sharing from "expo-sharing";
// import uploadToAnonymousFilesAsync from "anonymous-files";

// export default function App() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   async function openImagePickerAsync() {
//     let permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       alert("El permiso es requerido ");
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync(); // imagen seleccionada de la galeria
//     // console.log(pickerResult);

//     if (pickerResult.cancelled === false && Platform.OS === "web") {
//       const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
//       console.log(remoteUri);
//       setSelectedImage({ localUri: pickerResult.uri, remoteUri });
//       console.log("chau");
//     } else {
//       console.log("hola");
//       setSelectedImage({ localUri: pickerResult.uri });
//     }
//   }

//   async function openShareDialog() {
//     if (!(await Sharing.isAvailableAsync())) {
//       alert(`La imagen esta disponible en ${selectedImage.remoteUri} `);
//       return;
//     }
//     await Sharing.shareAsync(selectedImage.localUri);
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Pick an Image!</Text>
//       <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
//         <Image
//           source={{
//             uri:
//               selectedImage !== null
//                 ? selectedImage.localUri
//                 : "https://picsum.photos/200/200",
//           }}
//           style={styles.logo}
//         />
//       </TouchableOpacity>
//       {selectedImage ? (
//         <TouchableOpacity style={styles.button} onPress={openShareDialog}>
//           <Text style={styles.buttonText}>Sharing</Text>
//         </TouchableOpacity>
//       ) : (
//         <View />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECECEC",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     height: 80,
//     width: 80,
//     borderRadius: 4,
//     resizeMode: "contain",
//   },
//   button: {
//     borderRadius: 16,
//     padding: 16,
//     margin: 16,
//     backgroundColor: "#031A6E",
//   },
//   buttonText: {
//     color: "#fff",
//   },
// });
