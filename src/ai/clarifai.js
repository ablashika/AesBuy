// import axios from 'axios';

// const performImageSearch = async (imageData) => {
//   try {
//     const apiKey = '';
//     const endpoint = 'https://api.clarifai.com/v2/users/ablashika/apps/AESBUY/workflows/general-image-recognition/results';

//     const response = await axios.post(endpoint, {
//       inputs: [
//         {
//           data: {
//             image: {
//               base64: imageData,
//             },
//           },
//         },
//       ],
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Key ${apiKey}`,
//       },
//     });

//     // Process the response and extract relevant information
//     const searchResults = response.data.outputs[0].data.concepts.map(concept => concept.name);

//     return searchResults;
//   } catch (error) {
//     console.error('Error performing image search:', error);
//     throw error;
//   }
// };

// export { performImageSearch };


import axios from 'axios';

const USER_ID = 'ablashika';
const PAT = 'b9ecc148f12142128ef4de37f57b1a46';
const APP_ID = 'AESBUY';
const WORKFLOW_ID = 'general-image-recognition';


export const performImageSearch = async (imageBase64) => {
    try {
      const endpoint = `https://api.clarifai.com/v2/users/${USER_ID}/apps/${APP_ID}/workflows/${WORKFLOW_ID}/results`;
  
      const response = await axios.post(endpoint, {
        inputs: [
          {
            data: {
              image: {
                base64: imageBase64,
              },
            },
          },
        ],
      }, {
        headers: {
          Authorization: `Key ${PAT}`,
          'Content-Type': 'application/json',
        },
      });
  
      // Log the response to check for circular structures
    //   console.log('Clarifai response:', response);
  
      // Process the response and extract relevant information
      const searchResults = response;

      console.log(searchResults,"heyyyyl")
  
      return searchResults;
    } catch (error) {
      console.error('Error performing image search:', error);
      throw error; // Re-throw the error to propagate it further
    }
  };