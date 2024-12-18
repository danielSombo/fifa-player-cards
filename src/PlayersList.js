import React from 'react';
import Player from "./Player"
import players from './players';

export default function PlayersList() {
    return (
        <div className="flex flex-wrap justify-center">
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    )
}
