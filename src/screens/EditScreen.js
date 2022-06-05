import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blosPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return <BlogPostForm />;
  
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 22,
    marginBottom: 10,
    paddingLeft: 5,
  },
});

export default EditScreen;
