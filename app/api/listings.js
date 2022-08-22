import apiClient from './client'

const endpoint = '/listings';

const getListings = () => apiClient.get(endpoint);

const postListings = (listing) => {
    const data = new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('category', listing.category);
    data.append('description', listing.description);

    if (listing.location) {
        data.append('location', JSON.stringify(listing.location));
    }

    listing.images.forEach((image, index) => {
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image.uri
        })
    });

    return apiClient.post(endpoint, data);
}

export default {
    getListings,
    postListings,
}
