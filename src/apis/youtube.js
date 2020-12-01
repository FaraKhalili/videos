import axios from 'axios';

const KEY = 'AIzaSyCq1OeT_3Cm3niUIhLCKHmxEhNloR6H7-o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {        
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY
    }

});