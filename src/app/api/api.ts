import axios from 'axios';

const API_URL = 'https://calm-plum-hosiery.cyclic.app/graphql'

export const fetchGraphQL = async (query: string) => {
    try {
        const response = await axios.post(API_URL, {
            query,
        });

        // console.log(response.data.data);

        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
};

export const digitalGift = async (query: string) => {
    try {
        const response = await axios.post(API_URL, {
            query,
        });

        // console.log(response.data.data.getAllDigitalGiftWeddingSessionById);

        return response.data.data.getAllDigitalGiftWeddingSessionById;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
};

export const guestWeddingSession = async (query: string) => {
    try {
        const response = await axios.post(API_URL, {
            query,
        });

        // console.log(response.data.data.getAllGuestWeddingSessionId);

        return response.data.data.getAllGuestWeddingSessionId;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
};



