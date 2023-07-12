import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.jikan.moe/v4/anime',{
        params:{
            q:term,
            sfw:''
        }
    });

return response.data.data;

};

export default searchImages;