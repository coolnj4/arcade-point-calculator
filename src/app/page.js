'use client';

import { useState } from "react";
import styles from './page.module.css';
import { badgePoints, badgeSet } from "@/constants/constant";

export default function Home() {
  const [profileLink, setProfileLink] = useState("");
  const [points, setPoints] = useState(null);
  const [error, setError] = useState("");

  const fetchUrlViaProxy = async (url) => {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return await response.text(); // Fetch raw HTML
    } catch (error) {
      console.error("Error in fetchUrlViaProxy:", error.message);
      return null;
    }
  };

  const extractBadges = (htmlText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const badgeElements = doc.querySelectorAll('.profile-badge .ql-title-medium');
    const badgeArray = Array.from(badgeElements).map((badge) => badge.textContent.trim())
    // const badgeEarnDate = Array.from(doc.querySelectorAll('.profile-badge .ql-text-small')).map((badge) => badge.textContent.trim())
    badgeArray.forEach((badge) => {
      if (badgeSet.has(badge)) {
        setPoints((points) => points + badgePoints[badge]);
      }
    })
    return badgeArray;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!profileLink) {
      setError("Please enter a profile link.");
      return;
    }

    const htmlText = await fetchUrlViaProxy(profileLink);

    if (htmlText) {
      console.log('htmlText : ', htmlText);
      const badges = extractBadges(htmlText);
      // setPoints(badges.length);
    } else {
      setError("Failed to fetch or process the profile.");
      setPoints(null);
    }
  };

  return (
    <div className={styles.container}>
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
          🎉 Total Badges Earned: <strong>{points}</strong>
        </p>
      )}
    </div>
  );
}
