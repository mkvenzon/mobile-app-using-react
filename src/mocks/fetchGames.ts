import SugarRush from '../assets/sugar-rush-icon.png'
import ShaolinCrew from '../assets/shaolin-crew-icon.png'
import BigBadWolf from '../assets/big-wolf-icon.png'

export interface Game {
    id: number;
    title: string;
    image: string
}

export const fetchGames = async (): Promise<Game[]> => {
    return new Promise<Game[]>((resolve) => {
        setTimeout(() => {
            const games: Game[] = [
                { id: 1, title: "Sugar Rush", image: SugarRush },
                { id: 2, title: "Shaolin Crew", image: ShaolinCrew },
                { id: 3, title: "Big Bad Wolf", image: BigBadWolf },
            ];
            resolve(games);
        }, 1000);
    });
};
