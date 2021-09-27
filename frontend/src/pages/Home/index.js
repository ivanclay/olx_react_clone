import React, { useState } from "react";
import { PageArea, SearchArea } from "./styled";
import useApiOlx from "../../helpers/OlxAPI";

import { 
    PageContainer
} from "../../components/MainComponents";

const Page = () => {
    const api = useApiOlx();

    return (
        <>
        <SearchArea>
            <PageContainer>  
              <div className="searchBox">
                  <form method="GET" action="/ads">
                    <input type="text" name="q" placeholder="O que você procura?" />
                    <select>
                        <option></option>
                    </select>
                    <button>Pesquisar</button>
                  </form>
              </div>
              <div className="categoryList"></div>
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