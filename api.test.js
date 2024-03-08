// const axios = require('axios')

//  async function Api(){
//     const response = await axios.get('https://api.chucknorris.io/jokes/random')
    
//     return response.data
// }
// test('Verifica dados obtidos da API', async ()=>{
//     const dados = await Api()
//     expect(dados).toBeDefined();
// })
const axios = require('axios');


async function getApiData() {
  try {
    const response = await axios.get(' https://rickandmortyapi.com/api');
    return response.data; 
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
}

module.exports = { getApiData };
