import axios from "axios";
import { bodyParts, rapidApikey } from "../constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com'
const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'x-rapidapi-key': rapidApikey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }

        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log("error:", error.message);

    }
}

export const fetchExcerciseByBodypart = async (bodyParts) => {
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyParts}`)
    return data;
}
// import axios from "axios";
// import { bodyParts, rapidApikey } from "../constants";

// const baseUrl = 'https://exercisedb.p.rapidapi.com';

// const apiCall = async (url, params) => {
//     try {
//         const options = {
//             method: 'GET',
//             url,
//             params,
//             headers: {
//                 'X-RapidAPI-Key': rapidApikey, // Case-sensitive! Must be "X-RapidAPI-Key"
//                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' // Case-sensitive!
//             }
//         };

//         const response = await axios.request(options);
//         return response.data;
//     } catch (error) {
//         console.log("Error:", error.response?.data || error.message);
//         throw error; // Re-throw to handle in calling function
//     }
// };

// export const fetchExerciseByBodypart = async (bodyPart) => { // Fixed typo in function name
//     try {
//         const data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
//         return data;
//     } catch (error) {
//         console.error("API Error:", error);
//         return []; // Return empty array or handle gracefully
//     }
// };