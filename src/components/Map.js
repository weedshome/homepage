import React, { useState } from 'react'

import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'

import * as Data from '../constants/data.json'


const Map = (props) => {

    const [icon, setIcon] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null)

    const iconChange = (data) => {
        if (icon && data.properties.ID === icon.properties.ID) {
            return "https://svgshare.com/i/T8b.svg"
        } else {
            return "https://svgshare.com/i/T8b.svg"
        }
    }

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{
                lat: 38.592049,
                lng: -121.496751
            }}
        >

            {Data.features.map((Data) => (
                <Marker
                    key={Data.properties.ID}
                    icon={{
                        url: iconChange(Data),
                        scaleSize: new window.google.maps.Size(25, 25)
                    }}
                    onMouseOver={() => {
                        setIcon(Data)
                        setInfoWindow(Data)
                    }}
                    onClick={() => {
                        props.setmodal(true)
                        props.setData(Data)
                    }}
                    position={{
                        lat: Data.geometry.coordinates[0],
                        lng: Data.geometry.coordinates[1]
                    }}
                />

            )
            )}
            {infoWindow ?
                <InfoWindow
                    key={infoWindow.properties.ID}
                    position={{
                        lat: infoWindow.geometry.coordinates[0] + 0.01,
                        lng: infoWindow.geometry.coordinates[1] + 0.01
                    }}
                    onCloseClick={() => setInfoWindow(null)}
                >
                    <div>
                        <img className="w-15 h-12 mb-2" src={infoWindow.properties.Image} style={{ width: '100px', height: '100px' }} alt="dispensarie" />
                        <h2 className="text-sm mb-3">{infoWindow.properties.NAME}</h2>
                        <p className="text-sm">{infoWindow.properties.DESCRIPTION}</p>
                    </div>
                </InfoWindow>
                : null}
        </GoogleMap>
    )
}

export default Map;