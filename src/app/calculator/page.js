/* filepath: /e:/Arcade point calculator/arcade-point-calculator/src/app/calculator/page.js */
'use client';

import { useState, useEffect } from "react";
import styles from './calculator.module.css';
import { badgePoints, badgeSet, monthlyGames, arcadeStartTime, arcadeEndTime } from "@/constants/constant";

export default function Calculator() {
  const [profileLink, setProfileLink] = useState("");
  const [rememberProfile, setRememberProfile] = useState(false);
  const [points, setPoints] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [badgeDetails, setBadgeDetails] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const savedUrl = localStorage.getItem('profileUrl');
    if (savedUrl) {
      setProfileLink(savedUrl);
      setRememberProfile(true);
    }
  }, []);

  const fetchUrlViaProxy = async (url) => {
    try {
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.text();
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  };

  const extractBadges = (htmlText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const badgeElements = doc.querySelectorAll('.profile-badge');
    let totalPoints = 0;
    const details = [];
  
    badgeElements.forEach((badgeElement) => {
      const title = badgeElement.querySelector('.ql-title-medium').textContent.trim();
      const earnedDate = badgeElement.querySelector('.ql-body-medium').textContent.trim().replace('Earned ', '');
      const earnedDateTime = new Date(earnedDate);
      
      if (earnedDateTime >= arcadeStartTime && earnedDateTime <= arcadeEndTime) {
        let points = 0;
        if (Object.keys(monthlyGames).includes(title)) {
          points = monthlyGames[title];
        } else if (badgeSet.has(title)) {
          points = badgePoints[title];
        }
        if (points > 0) {
          totalPoints += points;
          details.push({ title, points, earnedDate });
        }
      }
    });
  
    setPoints(totalPoints);
    setBadgeDetails(details);
  };

  const handleRememberChange = (e) => {
    setRememberProfile(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem('profileUrl', profileLink);
    } else {
      localStorage.removeItem('profileUrl');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPoints(null);
    setError("");
    setLoading(true);
    setIsCalculated(false);

    const urlPattern = /^https:\/\/www\.cloudskillsboost\.google\/public_profiles\/.+$/;

    if (!profileLink) {
      setError("Please enter a profile link.");
      setLoading(false);
      return;
    }

    if (!urlPattern.test(profileLink)) {
      setError("Invalid URL format. Please enter a valid profile link.");
      setLoading(false);
      return;
    }

    const htmlContent = await fetchUrlViaProxy(profileLink);
    if (htmlContent) {
      extractBadges(htmlContent);
      setIsCalculated(true);
    } else {
      setError("Failed to fetch profile data");
    }
    setLoading(false);
  };

  return (
    <div className={styles['center-container']}>
      <div className={`${styles['form-section']} ${isCalculated ? styles.calculated : ''}`}>
        <h1 className={`${styles.title} ${isCalculated ? styles.calculated : ''}`}>
          Arcade Point Calculator
        </h1>
        
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
              placeholder="Paste your profile link here"
              className={styles.input}
            />
          </div>
          
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="remember-profile"
              checked={rememberProfile}
              onChange={handleRememberChange}
            />
            <label htmlFor="remember-profile">Remember me</label>
          </div>

          <button 
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Calculating...' : 'Calculate Points'}
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>

      {points !== null && (
        <div className={`${styles.tableContainer} ${isCalculated ? styles.visible : ''}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Badge Name</th>
                <th>Points</th>
                <th>Earned Date</th>
              </tr>
            </thead>
            <tbody>
              {badgeDetails.length > 0 ? (
                badgeDetails.map((badge, index) => (
                  <tr key={index}>
                    <td>{badge.title}</td>
                    <td>{badge.points}</td>
                    <td>{badge.earnedDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className={styles.emptyMessage}>
                    No eligible badges found in the arcade period
                  </td>
                </tr>
              )}
              <tr className={styles.totalRow}>
                <td><strong>Total Points</strong></td>
                <td><strong>{points || 0}</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}