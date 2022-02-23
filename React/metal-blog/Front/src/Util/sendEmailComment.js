
import { api } from "../Services/api";

const url = process.env.REACT_APP_API_COMMENT;

export async function sendEmailComment({ email, text }) {
    api.post(url, { email: email, text: text })
        .then((response) => console.log(response))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        });
}