
import { api } from "../Services/api";

const url = process.env.REACT_APP_API_LOGIN;

export async function sendEmailLogin(email) {
    api.post(url, email)
        .then((response) => console.log(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        });
}