'use client'; // Required for client-side interactivity

import { useState } from "react";
import styles from './page.module.css'; // Import the page-specific CSS module

export default function Home() {
  const [profileLink, setProfileLink] = useState("");
  const [points, setPoints] = useState(null);
  const [error, setError] = useState("");

  function getBadgeNames() {
    // Select all badge name elements
    const badgeElements = document.querySelectorAll('.profile-badge .ql-title-medium');
    
    // Map the text content of each element to an array
    const badgeNames = Array.from(badgeElements).map(badge => badge.textContent.trim());
    
    return badgeNames;
}

  // Simulated function to calculate points based on profile link
  const fetchUrl = async(url) => {
    try
    {
      const response = await fetch(url);
    
      if (!response.ok) {
        // setError("Failed to fetch data");
        return null
      }
      // const data = await response.json();
      // return data;
    }
    catch(error)
    {
      console.log('page.js -', error);
      return null;
    }
  }

  const extractBadges = (htmlText) => {
    // Parse the HTML string into a DOM
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
  
    // Select badge elements and extract their names
    const badgeElements = doc.querySelectorAll('.profile-badge .ql-title-medium');
    const badges = Array.from(badgeElements).map((badge) => badge.textContent.trim());
  
    return badges;
  }

  const fetchData = async(url) => {
    const htmlText = await fetchUrl(url);

    if (htmlText) 
    {
      const badges = extractBadges(htmlText);
      console.log("Extracted Badges:", badges);
      return badges;
    } 
    else 
    {
      console.error("Failed to fetch or parse the badges.");
      return [];
    }
  }
  // const fetchPoints = (link) => {

  //   const mockData = {
  //     "user123": 120,
  //     "user456": 250,
  //     "user789": 310,
  //   };

  //   const userId = link.split("/").pop(); // Extract user ID
  //   return mockData[userId] || null;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!profileLink) 
    {
      setError("Please enter a profile link.");
      return;
    }

    const userPoints = fetchData(profileLink);

    if (userPoints !== null) {
      setPoints(userPoints);
    } else {
      setError("Invalid profile link or user not found.");
      setPoints(null);
    }
  };

  return (
    <div className={styles.container}>
      {/* <p className={styles.description}>Enter your profile link to see your total points:</p> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your profile link"
          value={profileLink}
          onChange={(e) => setProfileLink(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Calculate</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {points !== null && (
        <p className={styles.result}>
          🎉 Total Points Earned: <strong>{points}</strong>
        </p>
      )}
    </div>
  );
}
