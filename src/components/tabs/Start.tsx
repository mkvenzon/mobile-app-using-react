import type { ReactElement } from "react";
import type { Game } from "../../mocks/fetchGames";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import StarIcon from '@mui/icons-material/Star';

interface StartTabProps {
    games: Game[];
    setGames: (games: Game[]) => void
}

const StartTab = (props: StartTabProps): ReactElement => {
    return (
        <ImageList cols={3} >
            {props.games.map((currentGame) => (
                <ImageListItem key={currentGame.id}>
                <img
                    src={currentGame.image}
                    alt={currentGame.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    sx={{background: 'transparent'}}
                    position="bottom"
                    actionIcon={
                        <IconButton
                            sx={{ color: currentGame.isFavorite ? 'yellow' : 'rgba(255, 255, 255, 0.54)' }}
                            onClick={() => {
                                const updatedGames = props.games.map((game) => {
                                    if(game.id === currentGame.id) {
                                        return {
                                            ...currentGame,
                                            isFavorite: !currentGame.isFavorite
                                        }
                                    }

                                    return game
                                });

                                props.setGames(updatedGames)
                            }}
                        >
                            <StarIcon />
                        </IconButton>
                    }
                />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default StartTab