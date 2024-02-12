import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'cbda0f96b1344647a8f695fcee20dfff'
    }
})