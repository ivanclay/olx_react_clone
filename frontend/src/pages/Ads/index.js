import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PageArea } from "./styled";

import AdItem from "../../components/partials/AdItem"
import useApiOlx from "../../helpers/OlxAPI";

import { 
    PageContainer
} from "../../components/MainComponents";

let timer;

const Page = () => {
    const api = useApiOlx();
    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }

    const query = useQueryString();
    
    const [q, setQ] = useState(query.get('q') != null ? query.get('q') : '' );
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '' );
    const [stateAddress, setStateAddress] = useState(query.get('state') != null ? query.get('state') : '' );

    const [stateAddressList, setStateAddressList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);
    const [adsTotal, setAdsTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [resultOpacity, setResultOpacity] = useState(1);
    const [loading, setLoading] = useState(true);

    const getAdsList = async () => {
        setLoading(true);

        let limit = 9;
        let offset = (currentPage-1) * limit;

        const json = await api.getAds({
            sort: 'desc',
            limit,
            q,
            cat,
            state: stateAddress,
            offset
        });

        setAdList(json.ads);
        setAdsTotal(json.total);
        setResultOpacity(1);
        setLoading(false);
    }

    useEffect(() => {
        if(adList.length > 0){
            setPageCount(Math.ceil(adsTotal / adList.length));
        }else{
            setPageCount(0);
        }
    }, [adsTotal])

    useEffect(() => {
        setResultOpacity(0.3);
        getAdsList();
    }, [currentPage])

    useEffect(() => {
        let queryString = [];
        if(q){
            queryString.push(`q=${q}`);
        }

        if(cat){
            queryString.push(`cat=${cat}`);
        }

        if(stateAddress){
            queryString.push(`state=${stateAddress}`);
        }


        history.replace({
            search:`?${queryString.join('&')}`
        });

        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(getAdsList,2000);
        setResultOpacity(0.3);
        setCurrentPage(1);

    }, [q, cat, stateAddress])

    useEffect(() => {
        const getStatesAddress = async () => {
                const slist = await api.getStatesAddress();
                setStateAddressList(slist);
        }
        getStatesAddress();
    },[]);

    useEffect(() => {
        const getCategories = async () => {
                const cats = await api.getCategories();
                setCategories(cats);
        }
        getCategories();
    },[]);

    let pagination = [];
    for (let i = 0; i < pageCount; i++) {
        pagination.push(i+1);
        
    }

    return (
            <PageContainer>
                <PageArea>
                    <div className="leftSide">
                        <form method="GET">
                            <input 
                                type="text" 
                                name="q" 
                                placeholder="O que voc?? procura?"
                                value={q}
                                onChange={e=>setQ(e.target.value)}
                            />
                            <div className="filterName">Estado: </div>
                            <select name="state" value={stateAddress} onChange={e=>setStateAddress(e.target.value)}>
                                <option></option>
                                {stateAddressList &&
                                    stateAddressList.map((i,k)=> 
                                    <option key={k} value={i.name}>{i.name}</option>
                                    )
                                }
                            </select>
                            <div className="filterName">Categoria: </div>
                            <ul>
                                {categories &&
                                    categories.map((i,k)=>
                                    <li 
                                        key={k} 
                                        className={cat===i.slug ? 'categoryItem active' : 'categoryItem'}
                                        onClick={()=>setCat(i.slug)}
                                        >
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>
                                    )
                                    
                                }
                            </ul>

                        </form>
                    </div>
                    <div className="rightSide">
                        <h2>Resultados para:</h2>
                        {/* <span>{q} | {stateAddress} | {cat}</span> */}

                        {loading && adList.length === 0 &&
                            <div className="listWarning">Carregando...</div>
                        }

                        {!loading && adList.length === 0 &&
                            <div className="listWarning">Nenhum resultado encontrado.</div>
                        }
                       
                        <div className="list" style={{opacity:resultOpacity}}>
                            {adList.map((i,k)=>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>

                        <div className="pagination">
                            {pagination.map((i,k)=>
                                <div key={k}
                                    onClick={()=>setCurrentPage(i)} 
                                    className={i===currentPage ? 'pagItem active' : 'pagItem'}
                                >{i}</div>
                            )}
                        </div> 
                    </div>
                </PageArea>
            </PageContainer>    
    );
}

export default Page;