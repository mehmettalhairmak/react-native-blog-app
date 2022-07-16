import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
	const { state } = useContext(Context);
	const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={()=>navigation.navigate("Edit", {id:route.params.id})}>
				  <EvilIcons name="pencil" size={35} />
				</TouchableOpacity>
			  ),
		});
	}, [navigation]);

	return (
		<View>
			<Text>{blogPost.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShowScreen;