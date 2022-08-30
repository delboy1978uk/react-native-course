import { create } from 'apisauce';
import cache from '../utility/cache'
import apiSettings from '../config/api'

const apiClient = create(apiSettings);

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        // you can add a black/white list if you dont want everything cached
        cache.store(url, response.data);

        return response;
    }

    const data = await cache.get(url);

    return data ? {ok: true, data: data} : response;
}

export default apiClient;
