import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApiOlx from "../../helpers/OlxAPI";

import { 
    PageContainer
} from "../../components/MainComponents";
import { PageArea } from './styled';


const Page = () => {
    const api = useApiOlx();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    
    return (
        <PageContainer>
           <PageArea>
               <div className="leftSide">
                   <div className="box">
                       <div className="adImage">
                            ...
                       </div>
                       <div className="adInfo">
                           <div className="adName">...</div>
                           <div className="adDescription">...</div>
                       </div>
                   </div>
               </div>
               <div className="rightSide">
                    <div className="box">
                        ...
                    </div>
               </div>
           </PageArea>
        </PageContainer>
    );
}

export default Page;