import apiClient from './client'

const endpoint = '/listings';
const getListings = () => apiClient.get(endpoint);
const postListings = data => apiClient.post(endpoint, data);

export default {
    getListings,
}
