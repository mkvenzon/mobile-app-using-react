import PragmaticPlay from '../assets/PRAGMATICPLAY.png' 
import EveryMatrix from '../assets/EM.png' 
import Evolution from '../assets/EVO.png'
import Expanse from '../assets/EXPANSE.png'


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
            ];
            resolve(games);
        }, 1000);
    });
};