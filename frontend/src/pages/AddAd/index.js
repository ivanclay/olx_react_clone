import React, { useRef, useState } from "react";
import { PageArea } from "./styled";
import useApiOlx from "../../helpers/OlxAPI";
import { doLogin } from "../../helpers/AuthHandler";

import { 
    PageContainer, 
    PageTitle, 
    ErrorMessage 
} from "../../components/MainComponents";

const Page = () => {
    const api = useApiOlx();
    const fileField = useRef();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        // const json = await api.login(email, password);

        // if(json.error){
        //     setError(json.error);
        // }else{
        //     doLogin(json.token, keepLoggedIn);
        //     window.location.href = '/';
        // }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Postar anúncio</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input
                                type="text"
                                 disabled={disabled}
                                 value={title}
                                 onChange={e=>setTitle(e.target.value)}
                                 required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                           <select></select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                           ...
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço negociável</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={() => setPriceNegotiable(!priceNegotiable) }
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                           <textarea
                             disabled={disabled}
                             value={description}
                             onChange={e=>setDescription(e.target.value)}
                             required
                           >
                           </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens</div>
                        <div className="area--input">
                           <input
                            type="file"
                             disabled={disabled}
                             multiple
                             ref={fileField}
                           />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                           <button disabled={disabled}>Adicionar Anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;