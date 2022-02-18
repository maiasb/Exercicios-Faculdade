
import { api } from "../Services/api";

// const url = process.env.REACT_APP_API;
const url = "email/send"

export async function sendEmail(text) {

    api.post(url, { text: text })
        .then((response) => console.log(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err)
        });
}