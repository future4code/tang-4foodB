import React from "react";
import { useHistory } from "react-router-dom";
import {goToHome} from "../../routes/Coordinator"

const Error = () => {
    const history = useHistory()

return (<div>
        <p>Essa página não existe</p>
        <button onClick={()=> goToHome(history)}>Voltar</button>
    </div>)
}

export default Error;