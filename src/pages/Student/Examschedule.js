import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const pdfFiles = [
  { id: '1', name: 'Document 1', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '2', name: 'Document 2', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
];

const Examschedule = () => {
  const handleDownload = async (file) => {
    try {
      const fileUri = FileSystem.documentDirectory + `${file.name}.pdf`;

      // Download the file
      const downloadResumable = FileSystem.createDownloadResumable(file.url, fileUri);
      const { uri } = await downloadResumable.downloadAsync();
      console.log(`File downloaded to: ${uri}`);
      Alert.alert('Download Successful', `File saved at: ${uri}`);

      // Share the file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        Alert.alert('Sharing Unavailable', 'Unable to share the downloaded file.');
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Download Failed', `Error: ${error.message}`);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.fileName}>{item.name}</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownload(item)}>
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam Schedule PDFs</Text>
      <FlatList
        data={pdfFiles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F4F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  fileName: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  downloadButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Examschedule;
