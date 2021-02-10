import React, { useState, useEffect, Fragment, useCallback } from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-simple-toast";
import { UserCard } from "../components/UserCard";
import { getUsersRequest } from "../redux/user/actions";
import { getUserState } from "../redux/user/selectors";
import { UserState } from "../redux/user/type";

export default function UserList() {
  const dispatch = useDispatch();
  const { entities: userList, isLast }: UserState = useSelector(getUserState);
  const [pageNum, setPageNumber] = useState<number>(1);

  const loadMore = useCallback(() => {
    if (!isLast) {
      setPageNumber(pageNum + 1);
    }
  }, [pageNum]);

  useEffect(() => {
    if (!isLast) dispatch(getUsersRequest(pageNum));
  }, [dispatch, pageNum]);

  useEffect(() => {
    if (isLast) {
      Toast.show("All user was loaded!");
    } else if (userList && userList.length < 10) {
      loadMore();
    }
  }, [isLast, userList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listView}>
        <FlatList
          data={userList || []}
          keyExtractor={(item) => item.email}
          renderItem={({ item, index }) => (
            <UserCard {...item} userIndex={index} />
          )}
          onEndReachedThreshold={0.9}
          onEndReached={loadMore}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  listView: {
    marginBottom: 20,
  },
});
