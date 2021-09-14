import axios from "axios";
import { useState } from "react";


function Form() {
    let [input, setInput] = useState('')
    function handleResponse(response) {
        console.log(response)

    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${input}`
        axios.get(apiUrl).then(handleResponse);
    }

    function search(event) {
        console.log(event)
        setInput(event.target.value)

    }
    return (


        <form onSubmit={handleSubmit}>
            <input type="text" onChange={search} >
            </input>
            <input type="submit" className="btn btn-success" >
            </input>

        </form>
    )
}
export default Form;