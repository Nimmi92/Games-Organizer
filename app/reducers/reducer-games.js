import Carrom from 'images/carrom.jpg';
import TableTennis from 'images/tabletennis.jpg';
import Chess from 'images/chess.jpg';
import Cricket from 'images/cricket.jpg';

export default function() {
  return [{
       "gameName" :  "Carrom Board",
       "imgSrc": Carrom,
       "altText": "Carrom board",
       "gameType": ["Single","Team"],
       "minTeamSize": 2,
       "maxTeamSize": 2
      },
    {
       "gameName" :  "Table Tennis",
       "imgSrc": TableTennis,
       "altText": "Table tennis",
       "gameType": ["Single","Team"],
       "minTeamSize": 2,
       "maxTeamSize": 2

    },
    {
       "gameName" :  "Chess",
       "imgSrc": Chess,
       "altText": "Chess",
       "gameType": ["Single"],
       "minTeamSize": 1,
       "maxTeamSize": 1

    },
    {
       "gameName" :  "Cricket",
       "imgSrc": Cricket,
       "altText": "Cricket",
       "gameType": ["Team"],
       "minTeamSize": 11,
       "maxTeamSize": 15

    }];
} 