import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = '05ef6fbc86d958f0211779c2ad06c4a9';

export const getInfo = async number => {
  try {
    const responce = await axios({
      method: 'post',
      url: 'https://api.novaposhta.ua/v2.0/json/',
      data: {
        apiKey: API_KEY,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: number,
            },
          ],
        },
      },
    });
    return responce.data.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const getDepartments = async query => {
  try {
    const responce = await axios({
      method: 'post',
      url: 'https://api.novaposhta.ua/v2.0/json/',
      data: {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: query,
          // TypeOfWarehouseRef: '9a68df70-0267-42a8-bb5c-37f427e36ee4',
          Page: '1',
          Limit: '20',
          Language: 'UA',
        },
      },
    });
    return responce.data.data;
  } catch (error) {
    console.log(error);
  }
};
