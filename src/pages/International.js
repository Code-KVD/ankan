import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function International() {
    const [firstInternationalData,setFirstInternationalData]=useState();
    const [secInternationalData,setSecInternationalData]=useState();
    const [thirdInternationalData,setThirdInternationalData]=useState();
    const [fourthInternationalData,setFourthInternationalData]=useState();

 
  const url=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,world&page=10`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,world&page=9`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,world&page=8`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_76454b22a4ed020a6b37acb03bf13e29ef92&language=en&category=top,world&page=7`
  
  const apiData=()=>{
    axios.get(url).then((response)=>{
          
           setFirstInternationalData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
         
  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{
          
           setSecInternationalData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{
          
           setThirdInternationalData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{
          
           setFourthInternationalData(response.data.results);
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
       <MainStore data={firstInternationalData} s_data={secInternationalData} t_data={thirdInternationalData} f_data={fourthInternationalData}></MainStore>
    </>
  )
}

export default International;