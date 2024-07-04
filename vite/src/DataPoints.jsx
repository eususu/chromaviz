import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useState, useRef } from 'react';
import Tooltip from './Tooltip';

function DataPoint({ datum, colorArray, highlightedGroup, setHighlightedGroup, settings, search_keyword}) {
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setHovered(true);
    setHighlightedGroup(datum.group)
  };

  const handlePointerOut = () => {
    setHovered(false);
    setHighlightedGroup(-1)
  };

  const myMash = useRef();

  const [size, setSize] = useState(Math.random() * (0.05 - 0.025) + 0.02)

  console.log('DataPoint is: ' + search_keyword)
  return (
    <mesh ref={myMash} position={datum.position} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <sphereGeometry attach="geometry" args={[size]} />
      <meshBasicMaterial attach="material" color={search_keyword? 'red':(highlightedGroup < 0 || (highlightedGroup == datum.group)) ? colorArray[datum.group].hex(): "gray"} />
      {hovered && (
        <Html style={{ pointerEvents: 'none' }}>
          <Tooltip tip={datum} settings={settings} keyword={search_keyword}></Tooltip>
        </Html>
      )}
    </mesh>
  );
}

const DataPoints = ({ data, palette, highlightedGroup, setHighlightedGroup, settings, search_keyword }) => {
    
  if(data.points){
  return data.points.map((d, index) => {
    const keyword = (d.document.indexOf(search_keyword) == -1)? null : search_keyword
    return <DataPoint settings={settings} datum={d} key={index} colorArray={palette} highlightedGroup={highlightedGroup} setHighlightedGroup={setHighlightedGroup} search_keyword={keyword}/>
    });
  }
};

export default DataPoints;