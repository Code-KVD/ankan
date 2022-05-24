import React from 'react';
import Navbar from './Components/Navbar';
import SectionLeftCard from './Section/section1/SectionLeftCard';
import SectionrightCard from './Section/section1/SectionrightCard';
import Header from './Components/wiliam/Header';
import Card from './Section/section2/Card';
import Section4_left from './Section/section4/Section4_left';
import Section4_right from './Section/section4/Section4_right';
import Section5_first from './Section/section5/Section5_first';

function MainStore(props) {
  
  return (
    <>

<Header></Header>
      <Navbar></Navbar>
  
      <div className="container" style={{ marginTop: "10px" }}>
      {
        props.data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.data.slice(0,6)} ></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.data.slice(0,7)}></SectionrightCard></div>

        </div>
        ):(<></>)
      }
      </div>

       <div className="container my-5">
      { props.t_data?(
        <Card data={props.t_data.slice(0,8)}></Card>
      ):(<></>)
      }
      </div>

  
      <div className="container" style={{ marginTop: "10px" }}>
      { props.t_data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.t_data.slice(0,9)} ></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.t_data.slice(0,9)}></SectionrightCard></div>

        </div>
      ):(<></>)
      }
      </div>


      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
       { props.f_data?(
        <div className="row">
          <div className="col-md-6">
            <Section4_left data={props.f_data.slice(0,9)}>
            </Section4_left>
          </div>

  
    
          <div className="col-md-6">
            <Section4_right>

            </Section4_right>
          </div>
        </div>
       ):(<></>)
       }
      </div>

      <div className="container" style={{ marginTop: "10px" }}>
      {
        props.s_data?(
        <div className="row">
          <div className="col-md-8" style={{ marginLeft: "28px" }} ><SectionLeftCard data={props.s_data.slice(0,6)}></SectionLeftCard></div>
          <div className="col-md-3" style={{ marginLeft: "7px" }}><SectionrightCard data={props.s_data.slice(0,7)}></SectionrightCard></div>

        </div>
        ):(<></>)
      }
      </div>
    
    
      <div className="container my-5">
      { props.s_data?(
        <Card data={props.s_data}></Card>
      
      ):(<></>)}
      </div>

      <div className="container" style={{ marginTop: "20px", maxWidth: "68rem" }}>
      {
        props.f_data?(
      <div className="row">
        <div className="col-md-4">
        <Section5_first data={props.f_data.slice(0,4)}></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first data={props.f_data.slice(4,8)}></Section5_first>
        </div>
        <div className="col-md-4">
        <Section5_first data={props.f_data.slice(1,9)}></Section5_first>
        </div>
      </div>
     ):(<></>) }
      </div> 

    </>
  )
}

export default MainStore