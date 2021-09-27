import React, { useState } from "react";
import { PageArea } from "./styled";
import useApiOlx from "../../helpers/OlxAPI";
import { doLogin } from "../../helpers/AuthHandler";

import { PageContainer, PageTitle } from "../../components/MainComponents";

const Page = () => {
    const api = useApiOlx();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const json = await api.login(email, password);

        if(json.error){
            setError(json.error);
        }else{
            doLogin(json.token, keepLoggedIn);
            window.location.href = '/';
        }
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" disabled={disabled}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" disabled={disabled}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Manter logado</div>
                        <div className="area--input">
                            <input type="checkbox" disabled={disabled}/>
                        </div>
                    </label>
                    <button disabled={disabled}>Fazer login</button>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;