import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'images/survivor.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: '/images/scavanger.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: '/images/shadow.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: '/images/tracker.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: '/images/sharpshooter.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: '/images/medic.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: '/images/engineer.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: '/images/brawler.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: '/images/infiltrator.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: '/images/leader.png',
      },
    ]
  ); 
  const handleAddFighter = (fighter) => {
    setTeam([...team, fighter]);
  }
  return (
    <>
    <h1>Zombie Fighters</h1>
      {zombieFighters.map((fighter) => (
        <ul key={fighter.id}>
          <li>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        </ul>
      ))}
      <h1>My Zombie Team</h1>
      <ul>
      {team.map((fighter, index) => (
        <li key={index}>
          <img src={fighter.img} alt={fighter.name} />
          <h2>{fighter.name}</h2>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
        </li>
        ))}
      </ul>
    </>
  );
}

export default App
