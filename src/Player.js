import React  from "react";

const Player = ({
    name = "Inconnu",
    team = "Inconnu Team",
    nationality = "Inconnu",
    jerseyNumber = "00",
    image = "https://hyyhnnytre.com"
}) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white">
            <img className="w-full h-48 object-cover" src={image} alt={`image ${name}`} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-lg text-center text-gray-800">{name}</h2>
                <p className="text-center text-sm text-gray-600">{team}</p>
                <div className="mt-2">
                    <p className="text-gray-500"><strong>Nationalité :</strong> {nationality}</p>
                    <p className="text-gray-500"><strong>Numéro du maillot: </strong>{jerseyNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default Player;