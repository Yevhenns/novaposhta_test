import axios from 'axios';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = '05ef6fbc86d958f0211779c2ad06c4a9';

export const getInfo = async number => {
  try {
    const responce = await axios({
      method: 'post',
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
    console.log(error.message);
  }
};

export const getDepartments = async query => {
  try {
    const responce = await axios({
      method: 'post',
      data: {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: query,
          Language: 'UA',
        },
      },
    });
    return responce.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCitiesAll = async() => {
  try {const responce = await axios({
    method: "post",
    data:{
      apiKey: API_KEY,
      modelName: 'Address',
      calledMethod: 'getCities',
   }   
  });
return responce.data.data[0]} catch(error) {
  console.log(error.message);
}
}
