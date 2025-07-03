# moments
music for the photos you see

# Moments 🎶📷

**Moments** is a minimalist, vibe-based social platform where users post photos paired with music to capture how they felt in that instant.

> Think of it as a cross between Spotify and Beli — every photo has a song that defines the moment.

---

## Features (MVP)
- 📸 Upload a photo
- 🎵 Attach a song (Spotify embed)
- ✏️ Write a short caption (optional)
- 🧭 View a feed of moments (from yourself and friends)
- ❤️ Like/react to moments

---

## Tech Stack

### Frontend
- **Next.js (React)** — For building the modern, server-rendered UI
- **Tailwind CSS** — For clean, responsive styling

### Backend
- **Go (Golang)** — Lightweight backend for user auth, media metadata, and managing moments
- **PostgreSQL / DynamoDB** — To store user data and moments
- **Spotify Web API** — For embedding and validating songs

### Infra
- **AWS (Lambda + S3 + API Gateway + RDS/DynamoDB)**:
  - S3 to store photos
  - Lambda to run Go APIs serverlessly
  - API Gateway to expose endpoints
  - RDS or DynamoDB for storing users/moments

---

## Setup

_WIP — once we build the MVP_

---

## Future Features
- 🌐 Explore feed
- 🏷️ Mood-based filtering
- 🤖 AI song suggestions
- 🔗 Shareable story view

---

## License
MIT
