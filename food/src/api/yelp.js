import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer hhlMrFGY_w0wnQNtQzbSRI4YNDkN7Xf-WJtPCQsX8Ok3-anB3f3WxHfSxO-MQcRFXA85UeR1EuflmjB4o0HyzlchGLBbCgiiUEzvumH-sT8Qh3Dj3OMXC0SIavN_XXYx'
    }
});