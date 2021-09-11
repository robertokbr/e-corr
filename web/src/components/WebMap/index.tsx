import React, { useCallback, useEffect, useState } from 'react';
import { TileLayer, Map, Marker } from 'react-leaflet';
import L from 'leaflet';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import 'leaflet/dist/leaflet.css';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import casa from '../../assets/pins/casa.svg';
import comercial from '../../assets/pins/comercial.svg';
import apartamento from '../../assets/pins/apartamento.svg';
import condominio from '../../assets/pins/condominio.svg';

import { useData } from '../../hooks/DataContext';
import api from '../../services/api';

interface WebMapProps {
  points: Point[];
}

const WebMap: React.FC<WebMapProps> = ({ points }) => {
  const { mapTheme } = useData();

  const { navigate } = useNavigation();

  const handleIcon = useCallback((category: string) => {
    const categorySvg = {
      "casa": casa,
      "comércial": comercial,
      "condomínio": condominio,
      "apartamento": apartamento,
    };

    return L.icon({
      iconUrl: categorySvg[category.toLowerCase() as Category],
      iconSize: [116, 136],
      iconAnchor: [29, 68],
      popupAnchor: [170, 2],
    });
  }, []);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        return Alert.alert(
          'Ooooops...',
          'Precisamos da sua permissão para obter a localização',
        );
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    })();
  }, []);

  const handleNavigate = useCallback(
    async (point: Point) => {
      navigate('Detail', { point });
    },
    [navigate],
  );

  return (
    <S.PageMap>
      <Map
        center={initialPosition}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={
            `https://api.mapbox.com/styles/v1/mapbox/${mapTheme}` +
            `/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iZ` +
            `XJ0b2RldiIsImEiOiJja2dlZXU2eTAwaDZxMnlwZGtjOTJraTcyIn0.XxV_` +
            `YccHk4BXZt1RRxuRWg`
          }
        />
        {points.map(point => (
          <Marker
            key={point.id}
            position={[point.latitude, point.longitude]}
            icon={handleIcon(point.category.name)}
            onclick={() => handleNavigate(point)}
          />
        ))}
      </Map>
    </S.PageMap>
  );
};

export default WebMap;
