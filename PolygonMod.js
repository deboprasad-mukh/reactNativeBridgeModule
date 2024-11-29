import { NativeModules } from 'react-native';

const { PolygonModule } = NativeModules;

export const openPolygonActivity = () => {
    PolygonModule.openPolygonActivity();
};
console.log("PolygonModule",PolygonModule);