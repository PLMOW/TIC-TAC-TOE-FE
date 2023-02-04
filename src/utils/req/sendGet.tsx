import axios from 'axios';
import API from '../constants/apiConstant';

interface sendGetRequestParams {
  endPoint: string;
  query: string;
}

const sendGetRequest = async ({ endPoint, query }: sendGetRequestParams) => {
  const { ERROR } = API;

  try {
    const searchResponse = await axios.get(endPoint, { params: query });
    const { data } = searchResponse;

    return data;
  } catch (error) {
    const ErrorType = error as protocolError;

    if (ErrorType.code === ERROR.ENONT) throw new Error(ERROR.ENONT_MESSAGE);
    throw new Error(ERROR.PROTOCOL_MESSAGE);
  }
};

export default sendGetRequest;

interface protocolError {
  code: string;
  message: string;
}
