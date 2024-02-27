import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { data as ceara_data } from './cearaGeojson'
import { useEffect, useRef } from 'react'

export default function Map() {
    const DEFAULT_LAT = -5.112126;
    const DEFAULT_LON = -39.602201;
    const DEFAULT_ZOOM_LEVEL = 0;
    const MAX_ZOOM = 19;
    const MAP_ID = "map";
    const TILES_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const ATTRIBUTION = 'SEAI | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const mapStyles = {
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    }

    const mapRef = useRef(null);
    const geojsonRef = useRef(null);

    useEffect(() => {
        // Inicializa o mapa
        mapRef.current = L.map(MAP_ID).setView([DEFAULT_LAT, DEFAULT_LON], DEFAULT_ZOOM_LEVEL)
        
        // Remove a atribuição do Leaflet.js
        mapRef.current.attributionControl.setPrefix('')

        // Insere os tiles no mapa
        L.tileLayer(TILES_URL, {
            maxZoom: MAX_ZOOM,
            attribution: ATTRIBUTION
        }).addTo(mapRef.current)

        // Insere o geojson do Ceará no mapa
        geojsonRef.current = L.geoJSON(ceara_data).addTo(mapRef.current)

        // Ajusta o zoom para o geojson do Ceará
        mapRef.current.fitBounds(geojsonRef.current.getBounds())
    }, [])

    return (
        <div id={MAP_ID} style={mapStyles}></div>
    )
}