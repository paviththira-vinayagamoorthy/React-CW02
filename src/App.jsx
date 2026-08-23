import { useState } from 'react'

import './App.css'
import dilak from './assets/dilak.jpg'
import divi from './assets/Divi.jpg'
import harry from './assets/harry.png'
import jasinthini from './assets/jasinthini.jpg'
import luxshana from './assets/luxshana.jpg'
import pavi from './assets/pavi.jpg'
import john from './assets/john.jfif'
import resia from './assets/resia.png'
import sahaana from './assets/sahaana.png'
import Santhanaluxmy from './assets/Santhu.jpg'
import satha from './assets/satha.jpg'
import darmika from './assets/darmika.JPG'

function ProfileCard({ name, age, bio, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

export default function App() {
  // Array of 12 different profile data objects
  const profiles = [
    {
      name: "Dilekshan Emmanuvel",
      age: 20,
      bio: "Frontend developer who loves building clean UIs with React and Tailwind CSS.",
      image:dilak
    },
    {
      name: "AT Divinshan",
      age: 20,
      bio: "Backend engineer focused on scalable cloud architecture and microservices.",
      image: divi
    },
    {
      name: "Harreram Uthayakumar",
      age: 23,
      bio: "UI/UX designer passionate about minimalist design and user research.",
      image:harry
    },
    {
      name: "Jasinthini",
      age: 24,
      bio: "Full-stack developer bridging the gap between robust APIs and fluid frontends.",
      image: jasinthini
    },
    {
      name: "S Luxshana",
      age: 22,
      bio: "Data scientist exploring machine learning models and data visualization.",
      image: luxshana
    },
    {
      name: "Pavi Moorthy",
      age: 22,
      bio: "DevOps specialist keeping pipelines green and servers running smoothly.",
      image:pavi
    },
    {
      name: "Gideon Sivakumar",
      age: 19,
      bio: "Mobile app developer crafting cross-platform experiences with React Native.",
      image: john
    },
    {
      name: "Anetresia Patrick",
      age: 20,
      bio: "Engineering manager leading high-performing teams to deliver impact.",
      image: resia
    },
    {
      name: "Sahaana Jeyanthan",
      age: 20,
      bio: "Junior developer eager to learn new technologies and contribute to open source.",
      image: sahaana
    },
    {
      name: "Santhanaluxmy",
      age: 20,
      bio: "Cybersecurity analyst protecting infrastructure from modern threats.",
      image: Santhanaluxmy
    },
    {
      name: "Satha Yogan",
      age: 21,
      bio: "Product manager turning user feedback into feature roadmaps.",
      image:satha
    },
    {
      name: "Darmika Sunmugananthan",
      age: 20,
      bio: "Software architect designing resilient systems and mentoring developers.",
      image: darmika
    }
  ];

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.headerTitle}>Team Profiles</h1>
      <div style={styles.gridContainer}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
}

// 3. Inline CSS Styles Object
const styles = {
  appContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  headerTitle: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#1f2937",
    fontSize: "2.5rem",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns per line (4 x 3 lines = 12 profiles)
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
    border: "3px solid #3b82f6",
  },
  name: {
    margin: "0 0 8px 0",
    fontSize: "1.25rem",
    color: "#111827",
  },
  age: {
    margin: "0 0 12px 0",
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "600",
  },
  bio: {
    margin: "0",
    fontSize: "0.95rem",
    color: "#4b5563",
    lineHeight: "1.5",
  },
};
