import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageArea, SearchArea } from "./styled";
import useApiOlx from "../../helpers/OlxAPI";

import { 
    PageContainer
} from "../../components/MainComponents";

const Page = () => {
    const api = useApiOlx();

    const [stateAddressList, setStateAddressList] = useState([]);
    const [categories, setCategories] = useState([]);

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

    return (
        <>
        <SearchArea>
            <PageContainer>  
              <div className="searchBox">
                  <form method="GET" action="/ads">
                    <input type="text" name="q" placeholder="O que você procura?" />
                    <select>
                    {stateAddressList.map((i,k)=>
                                        <option key={k} value={i.name}>{i.name}</option>)
                                    }
                    </select>
                    <button>Pesquisar</button>
                  </form>
              </div>
              <div className="categoryList">
                    {categories.map((i,k)=>
                        <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                            <img src={i.img} alt=""/>
                            <span>{i.name}</span>
                        </Link>)
                    }
              </div>
            </PageContainer>
        </SearchArea>
        <PageContainer>
            <PageArea>
               .....b
            </PageArea>
        </PageContainer>
        </>
        
    );
}

export default Page;