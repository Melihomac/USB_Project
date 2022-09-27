import Upload from './Upload';
import React, { useState } from 'react';
import Login from './Login';

import "./style.css";

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken} />
    }
    <Upload></Upload>
}

export default App;