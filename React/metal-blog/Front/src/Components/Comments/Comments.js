
import { getDatabase, get, ref, child } from "firebase/database";

var comments = []
export function Comments({ id, page }) {

    if (id) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${id}/comments/${page}`)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function (elemento) {
                    comments.push(elemento.val().text)
                })
            }
        })
    }

    return (
        <div>
            {comments.map((comments) => (
                <div key={comments}>
                    <h1>{comments}</h1>
                </div>
            ))}
        </div>
    )
}