import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import useApiOlx from "../../helpers/OlxAPI";

import { 
    PageContainer
} from "../../components/MainComponents";
import { PageArea, Fake } from './styled';


const Page = () => {
    const api = useApiOlx();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        };

        getAdInfo(id);

    },[]);

    const formatDate = (date) => {
        let cDate = new Date(date);
        let months = ['jan','fev', 'mar','abr','mai','jun','jul', 'ago', 'set', 'out', 'nov', 'dez'];
        let cDay = cDate.getDay();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }
    
    return (
        <PageContainer>
           <PageArea>
               <div className="leftSide">
                   <div className="box">
                       <div className="adImage">
                            {loading &&
                                <Fake height={300}/>
                            }
                            {adInfo.images && 
                                <Slide>
                                    {adInfo.images.map((img, k) => 
                                        <div key={k} className="each-slide">
                                            <img src={img} alt=""/>
                                        </div>
                                    )}
                                </Slide>
                               }
                       </div>
                       <div className="adInfo">
                           <div className="adName">
                               {loading && <Fake height={20}/>}
                               {adInfo.title && 
                                <h2>{adInfo.title}</h2>
                               }
                                {adInfo.dateCreated && 
                                <small>{formatDate(adInfo.dateCreated)}</small>}
                                {adInfo.description}
                                <hr/>
                                {adInfo.views && 
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                           </div>
                           <div className="adDescription">
                           {loading &&
                                <Fake height={100}/>
                               }
                           </div>
                       </div>
                   </div>
               </div>
               <div className="rightSide">
                    <div className="box box--padding">
                            {loading && <Fake height={20}/>}
                    </div>
                    <div className="box box--padding">
                            {loading && <Fake height={50}/>}
                    </div>
               </div>
           </PageArea>
        </PageContainer>
    );
}

export default Page;