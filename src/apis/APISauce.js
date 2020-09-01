import { create } from 'apisauce';

class APISauce {

    apiSauce = null;

    constructor(config) {
        if (!this.apiSauce) {
            this.apiSauce = create({
                baseURL: config.baseURL,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
        }
    }

    post = (url, body = {}) => {
        return this.apiSauce.post(url, body);
    }

    get = (url) => {
        return this.apiSauce.get(url);
    }
}

export default APISauce;