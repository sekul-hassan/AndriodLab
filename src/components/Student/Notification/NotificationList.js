import { FlatList, View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

const NotificationList = () => {
  const notifications = [
    {
      id: "1",
      title: "1-1 Semester",
      message: "Please wait for all the green signals.",
      date: "2024-10-25",
      department: true,
      hall: true,
      register: true,
    },
    {
      id: "2",
      title: "1-2 Semester",
      message: "Please wait for all the green signals.",
      date: "2024-10-25",
      department: true,
      hall: false,
      register: true,
    },
    {
      id: "3",
      title: "Retake 1-2",
      message: "Please wait for all the green signals.",
      date: "2024-10-25",
      department: false,
      hall: true,
      register: false,
    },
  ];

  const calculateProgress = (item) => {
    const total = 3; // Total statuses
    const completed = [item.department, item.hall, item.register].filter(Boolean).length;
    return completed / total;
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.message}>{item.message}</Text>
      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <Text style={styles.statusText}>Department</Text>
          <AntDesign
            name={item.department ? "checkcircle" : "closecircle"}
            size={16}
            color={item.department ? "green" : "red"}
          />
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusText}>Hall</Text>
          <AntDesign
            name={item.hall ? "checkcircle" : "closecircle"}
            size={16}
            color={item.hall ? "green" : "red"}
          />
        </View>
        <View style={styles.statusItem}>
          <Text style={styles.statusText}>Exam Office</Text>
          <AntDesign
            name={item.register ? "checkcircle" : "closecircle"}
            size={16}
            color={item.register ? "green" : "red"}
          />
        </View>
      </View>
      {/* Progress Bar */}
      <ProgressBar
        progress={calculateProgress(item)}
        color="green"
        style={styles.progressBar}
      />
      <Text style={styles.progressText}>
        {Math.round(calculateProgress(item) * 100)}% Complete
      </Text>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  list: {
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  message: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    marginTop: 10,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },
});
