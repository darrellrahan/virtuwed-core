import axios from 'axios';

const BASE_URL = 'https://api.virtuwed.id/graphql';

export const getAllAssetByWeddingSession = async (query: string, variables?: Record<string, any>) => {
    const response = await axios.post(BASE_URL, {
        query,
        variables,
    });

    console.log(response.data.data.getAllAssetByWeddingSession);
    return response.data.data.getAllAssetByWeddingSession;
};