import type { ReactElement } from "react";
import type { Game } from "../../mocks/fetchGames";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface StartTabProps {
    games: Game[]
}

const StartTab = (props: StartTabProps): ReactElement => {
    return (
        <ImageList cols={3} >
            {props.games.map((game) => (
                <ImageListItem key={game.id}>
                <img
                    src={game.image}
                    alt={game.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default StartTab