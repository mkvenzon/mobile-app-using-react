import SugarRush from '../assets/sugar-rush-icon.png'
import ShaolinCrew from '../assets/shaolin-crew-icon.png'
import BigBadWolf from '../assets/big-wolf-icon.png'
import BookOfEgypt from '../assets/book-of-egypt-icon.png'
import PiratesPower from '../assets/pirates-power-icon.png'
import Crocodile from '../assets/crocodile-icon.png'
import Anaconda from '../assets/anaconda-icon.png'
import MayaJackpot from '../assets/maya-jackpot-icon.png'
import Beach from '../assets/beach-icon.png'
import Inca from '../assets/inca-icon.png'
import Pride from '../assets/pride-persia-icon.png'
import Azteca from '../assets/aztec-icon.png'

export interface Game {
    id: number;
    title: string;
    image: string;
    isFavorite: boolean;
}

export const fetchGames = async (): Promise<Game[]> => {
    return new Promise<Game[]>((resolve) => {
        setTimeout(() => {
            const games: Game[] = [
                { id: 1, title: "Sugar Rush", image: SugarRush, isFavorite: false, },
                { id: 2, title: "Shaolin Crew", image: ShaolinCrew, isFavorite: false, },
                { id: 3, title: "Big Bad Wolf", image: BigBadWolf, isFavorite: false, },  
                { id: 4, title: "Book of Egypt", image: BookOfEgypt, isFavorite: false, }, 
                { id: 5, title: "Pirates Power", image: PiratesPower, isFavorite: false, }, 
                { id: 6, title: "Crocodile Blitz Extreme FB", image: Crocodile, isFavorite: false, }, 
                { id: 7, title: "Anaconda Wild 2 Powerplay Jackpot", image: Anaconda, isFavorite: false, }, 
                { id: 8, title: "Maya Jackpot", image: MayaJackpot, isFavorite: false, }, 
                { id: 9, title: "Beach Life", image: Beach, isFavorite: false, }, 
                { id: 10, title: "Inca Jackpot", image: Inca, isFavorite: false, }, 
                { id: 11, title: "Pride of Persia", image: Pride, isFavorite: false, }, 
                { id: 12, title: "Azteca", image: Azteca, isFavorite: false, }, 
                
            ];
            resolve(games);
        }, 1000);
    });
};
