import React, { useState } from "react"

import Layout from "../components/Layout"

import { withGoogleMap, withScriptjs } from 'react-google-maps'

import Map from '../components/Map'
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal'
import * as Data from '../constants/data.json'
import styled from 'styled-components'

const MapComponent = withScriptjs(withGoogleMap(Map));

export default function IndexPage() {

    const [modal, setmodal] = useState(false);
    const [data, setData] = useState(null)

    return (
        <Layout>
            <Wrapper>

                <div className="flex mb-4">

                    <div className="w-1/2 mb-4 ml-2 mr-2 shadow-lg " >

                        <div style={{ width: "100%", height: "100vh" }} >

                            <MapComponent
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyBsytc-M60hbCyVoYJaLYYb6hMfwgmB3Mc"}`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                setmodal={setmodal}
                                setData={setData}
                            />
                        </div>
                    </div>

                    <div className='locations' >
                        <div className='flex flex-wrap'>
                            {Data.features.map(j => (
                                <div className="location-card " >
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                        <figure className="post-card-figure">
                                            <img alt="dispensarie" className="rounded" src={j.properties.Image} />
                                            <span class="post-card-badge">{j.properties.CATEGORY}</span>
                                        </figure>
                                        <div className="px-6 py-4">
                                            <h4 className="font-bold text-xl mb-2" >{j.properties.NAME}</h4>
                                            <p className="text-gray-700 text-base" >{j.properties.DESCRIPTION}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {data ? <Modal
                    open={modal}
                    onClose={() => setmodal(false)}
                >
                    <div className="flex">
                        <div className="w-full">
                            <img alt="dispensaries" src={data.properties.Image} style={{ width: '100px', height: '100px' }} />
                        </div>
                        <div className="w-full ml-3">
                            <h1>{data.properties.NAME}</h1>
                            <p>{data.properties.DESCRIPTION}</p>
                        </div>
                    </div>
                </Modal>
                    : null}
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
.post-card-badge {
    position: absolute;
      top: 16px;
      left: 12px;
      display: block;
      padding: 4px;
      text-transform: uppercase;
      text-align: center;
      font-size: .575rem !important;
      font-weight: 500 !important;
      white-space: nowrap;
      color: #ffffff;
      background-color: #3d796d !important;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
      border-radius: 4px;
      height: fit-content;
  }
.post-card-figure {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    display: grid;
  }
h4.font-bold.text-xl.mb-2 {
    margin-bottom: 0;
    margin-top: 0.5rem;
}
p.text-gray-700.text-base {
    margin-bottom: 0rem;
}
img {
    height: 130px;
    width: 100%;
}
.locations {
    padding: 1rem;
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: #f1f5fe;
}
.flex.mb-4 {
    display: grid;
    grid-template-columns: 60% 1fr;
}

.flex.flex-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
}
.location-card {
    box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
background-color: #ffffff;
display: grid;
grid-template-columns: 1fr;
width: 100%;
padding: 10px;
}
@media screen and (max-width: 767px) {
    .flex.mb-4 {
    grid-template-columns: 1fr;
    }
    .flex.flex-wrap {
        display: grid;
        grid-template-columns: 1fr;
    }
    .locations {
        padding-bottom: 3rem;
        padding-top: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
        background: #f1f5fe;
    }
}
`
