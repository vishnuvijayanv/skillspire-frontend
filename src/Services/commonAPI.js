import axios from "axios";

export const commonAPI = async(httprequest,url,reqBody,reqheader)=>{
    let reqConfig={
        method:httprequest,
        url:url,
        data:reqBody,
        headers:reqheader?reqheader:{
            "Content-Type":"application/json"
        
    }
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}