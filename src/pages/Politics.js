import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function Politics() {
    const [firstPoliticsData,setFirstPoliticsData]=useState();
    const [secPoliticsData,setSecPoliticsData]=useState();
    const [thirdPoliticsData,setThirdPoliticsData]=useState();
    const [fourthPoliticsData,setFourthPoliticsData]=useState();

 
  const url=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,Politics&page=3&country=in`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,Politics&page=1&country=in`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,Politics&page=2&country=in`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,Politics&page=3&country=in`
  
  const apiData=()=>{
    axios.get(url).then((response)=>{
          
           setFirstPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{
          
           setSecPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{
          
           setThirdPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{
          
           setFourthPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

   useEffect(()=>{
    apiData();
    apiData2();
    apiData3();
    apiData4();
  
   },[])
  
  return (
    <>
       <MainStore data={firstPoliticsData} s_data={secPoliticsData} t_data={thirdPoliticsData} f_data={fourthPoliticsData}></MainStore>
    </>
  )
}

export default Politics