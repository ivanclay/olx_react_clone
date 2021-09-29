import React, { useRef, useState, useEffect } from "react";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { PageArea } from "./styled";
import useApiOlx from "../../helpers/OlxAPI";

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
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
                const cats = await api.getCategories();
                setCategories(cats);
        }
        getCategories();
    },[]);

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

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

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
                           <select
                                 disabled={disabled}
                                 onChange={e=>setCategory(e.target.value)}
                                 required
                           >
                               <option></option>
                               {categories &&
                                categories.map((i)=> 
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                )
                               }
                           </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                           <MaskedInput 
                                mask={priceMask}
                                placeholder="R$ "
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChange={e=>setPrice(e.target.value)}
                           /> 
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