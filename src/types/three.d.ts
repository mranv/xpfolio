import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    points: THREE.Points
    pointsMaterial: THREE.PointsMaterial
  }
} 