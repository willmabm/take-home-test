import axios from "axios";
const baseUrl = 'http://localhost:3001/commits'

export const getCommits = () => {
    return axios
        .get(baseUrl, )
        .then((response) => {
            const { data } = response;
            return data;
        });
}