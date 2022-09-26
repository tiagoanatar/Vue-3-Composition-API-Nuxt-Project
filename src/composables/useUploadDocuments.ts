import { DocType, DocTypeFile } from '@/constants/docType';
const { getUserdocuments, postUploadUserDocuments } = useComposite();

export default (docType: DocTypeFile = DocType.OTHER) => {
  let cancelTokenRef = null;

  const uploadDocument = async (file, onUploadProgress) => {
    const data = new FormData();
    data.append('docType', docType);
    data.append('file', file);
    const { cancelToken, uploadFile } = await postUploadUserDocuments();

    // Token used to cancel the file upload
    cancelTokenRef = cancelToken;

    const respose = await uploadFile(
      data,
      (progressEvent = { loaded: 0, total: 0 }) => {
        if (progressEvent.total !== 0) {
          onUploadProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        }
      }
    );

    return respose;
  };

  const cancelUploadDocument = (reason = 'Operation canceled by the user.') => {
    if (cancelTokenRef) {
      cancelTokenRef.cancel(reason);
    }
  };

  const getDocuments = async () => {
    const documents = await getUserdocuments();
    return documents.filter((v) => v?.documentType === docType);
  };

  return {
    cancelUploadDocument,
    getDocuments,
    uploadDocument,
  };
};
