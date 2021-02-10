import React from "react";
import {
  TouchableHighlight,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { UserInfo } from "../redux/user/type";

type UserProps = UserInfo & {
  userIndex: number;
};

export function UserCard(user: UserProps) {
  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#b5b3b3",
    onPress: () => console.log("HELLO"),
  };

  return (
    <TouchableHighlight {...touchProps}>
      <View style={styles.card}>
        <Text style={styles.userId}>{user.userIndex + 1}</Text>
        <View style={styles.content}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>
            {user.first_name} {user.last_name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e0e0",
    padding: 10,
  },
  userId: {
    width: 40,
    fontSize: 15,
    fontWeight: "800",
    color: "#000",
    paddingLeft: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    marginLeft: 30,
  },
});
