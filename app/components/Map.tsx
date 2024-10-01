"use client"; // Ensures the component runs only on the client side

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import Location from "@/public/location.png"; // Ensure the path is correct
import { Map as LeafletMap, Icon, LatLngExpression } from 'leaflet';

const isBrowser = typeof window !== 'undefined';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
    ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

interface MapProps {
    latitude: number;
    longitude: number;
    zoom: number;
}

const CustomMap: React.FC<MapProps> = ({ latitude, longitude, zoom }) => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [L, setL] = useState<typeof import('leaflet') | null>(null);
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (isBrowser) {
            import('leaflet').then((leaflet) => {
                setL(leaflet);

                leaflet.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                });
            });
            setIsClient(true);
        }
    }, []);

    useEffect(() => {
        if (mapRef.current && L) {
            mapRef.current.on('click', () => {
                const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
                window.open(url, '_blank');
            });
        }
    }, [L, latitude, longitude]);

    if (!isClient || !L) {
        return null;
    }

    const customIcon = new Icon({
        iconUrl: Location.src,
        iconSize: [32, 42.67],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <MapContainer
            center={[latitude, longitude] as LatLngExpression}
            zoom={zoom}
            zoomControl={false}
            attributionControl={false}
            style={{ height: '100%', width: '100%', borderRadius: "16px", zIndex: 10 }}
            ref={(ref) => {
                if (ref) {
                    mapRef.current = ref;
                }
            }}
        >
            <TileLayer
                url="https://tile.jawg.io/cebae4eb-aa6e-4c6d-82c0-1f0c93256b82/{z}/{x}/{y}{r}.png?access-token=BqsDEtYBQwHpGnpS4Dz8yFz1BNmBI2zOtUkZYlygNmJguSPnzSNklZ8KRbjx9CYb"
            />
            <Marker position={[latitude, longitude] as LatLngExpression} icon={customIcon}>
                <Popup>
                    This is your location.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default CustomMap;
