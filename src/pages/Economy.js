import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function Economy() {
    const [firstEconomyData,setFirstEconomyData]=useState();
    const [secEconomyData,setSecEconomyData]=useState();
    const [thirdEconomyData,setThirdEconomyData]=useState();
    const [fourthEconomyData,setFourthEconomyData]=useState();

 
  const url=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=business&page=0&country=in`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=business&page=1&country=in`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=business&page=2&country=in`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=business&page=3&country=in`
  
  const apiData=()=>{
    axios.get(url).then((response)=>{
          
           setFirstEconomyData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{
          
           setSecEconomyData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{
          
           setThirdEconomyData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{
          
           setFourthEconomyData(response.data.results);
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
       <MainStore data={firstEconomyData} s_data={secEconomyData} t_data={thirdEconomyData} f_data={fourthEconomyData}></MainStore>
    </>
  )
}

export default Economy