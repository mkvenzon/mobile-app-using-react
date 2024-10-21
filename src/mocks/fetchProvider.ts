import PragmaticPlay from '../assets/PRAGMATICPLAY.png' 
import EveryMatrix from '../assets/EM.png' 
import Evolution from '../assets/EVO.png'
import Expanse from '../assets/EXPANSE.png'
import Ezugi from '../assets/EZG.png'
import GameArt from '../assets/GAMEART.png'
import Habanero from '../assets/HAB.png'
import HackSaw from '../assets/HACKSAW.png'
import Inbet from '../assets/INBET.png'
import MPlay from '../assets/MPLAY.png'
import NetEnd from '../assets/NETENT.png'
import PG from '../assets/PGSOFT.png'
import PlayGo from '../assets/PNG.png'
import PragmaticPlay2 from '../assets/PP.png'
import PlaySon from '../assets/PS.png'
import PlayTech from '../assets/PT.png'
import RedTiger from '../assets/REDTIGER.png'
import Relax from '../assets/RELAX.png'


export interface Provider {
    id: number;
    name: string;
    image: string;
}

export const fetchProvider = async (): Promise<Provider[]> => {
    return new Promise<Provider[]>((resolve) => {
        setTimeout(() => {
            const games: Provider[] = [
                { id: 1, name: "Pragmatic Play", image: PragmaticPlay },
                { id: 2, name: "Every Matrix", image: EveryMatrix },
                { id: 3, name: "Evolution", image: Evolution },  
                { id: 4, name: "Expanse", image: Expanse }, 
                { id: 5, name: "Ezugi", image: Ezugi }, 
                { id: 6, name: "Game Art", image: GameArt }, 
                { id: 7, name: "Habanero", image: Habanero }, 
                { id: 8, name: "Hacksaw Gaming", image: HackSaw }, 
                { id: 9, name: "Inbet Games", image: Inbet }, 
                { id: 10, name: "M Play", image: MPlay }, 
                { id: 11, name: "Net Ent", image: NetEnd }, 
                { id: 12, name: "PG", image: PG }, 
                { id: 13, name: "Play n Go", image: PlayGo }, 
                { id: 14, name: "Pragmatic Play", image: PragmaticPlay2 }, 
                { id: 15, name: "Playson", image: PlaySon },
                { id: 16, name: "PlayTech", image: PlayTech },
                { id: 17, name: "Red Tiger", image: RedTiger }, 
                { id: 18, name: "Relax", image: Relax }, 
            ];
            resolve(games);
        }, 1000);
    });
};