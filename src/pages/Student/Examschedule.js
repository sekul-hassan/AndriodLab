import React from 'react';
import { View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const Examschedule = () => {
  const pdfSource = {
    uri: 'https://www.example.https://www.pdffiller.com/jsfiller-desk13/?flat_pdf_quality=high&requestHash=f24e4c0ba8800c82c167a9ed03fd0cc4ef41e56b41754817523f6ecb10070733&projectId=1684585658&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=true&jsf-fake-edit-embedded=true&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-probability-70=true&jsf-socket-io=false&routeId=20c93ca708b52d498b340aed5e3d3a14#72f5ea01e09743fdbf16825033c500bb/sample.pdf', // Replace with the PDF URL
    cache: true
  };

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={pdfSource}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
      />
    </View>
  );
};

export default Examschedule;
