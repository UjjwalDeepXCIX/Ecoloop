# 🌱 Project Name: EcoLoop 2080

## 👥 Total Number of Team Members
4

## 🔧 Google Technologies Used
- Firebase Firestore  
- Google Maps API  
- Google Cloud Platform (GCP)  
- Gemini API  
- Firebase Authentication
- Google Data Analytics

## 🤖 Have you used the Google Gemini API?
**Yes**, we have integrated the Google Gemini API to power our AI Assistant, which not only engages in natural voice interactions but also provides intelligent reasoning behind sustainable route selections and eco-friendly suggestions.
---

## 🚨 Problem Statement (2080 Scenario)

By the year 2080, climate change will not just be a crisis, it will define every aspect of daily life. Individuals and communities may struggle to track their personal impact and act sustainably amidst the complexities of hyper-urbanization, resource scarcity, and extreme weather. Governments alone cannot drive behavior change; a bottom-up, tech-enabled movement is essential. Despite awareness, people often lack **real-time feedback**, **localized suggestions**, and **motivating incentives** to make sustainable decisions in areas such as transportation, water use, energy, and waste management.

There is a crucial need for **personalized eco-coaching systems** that help individuals stay accountable and continuously improve their habits—especially in cities where unsustainable practices compound quickly. The lack of **intelligent, voice-enabled, data-driven sustainability guides** is a serious gap in future urban living.

---

## 💡 Proposed Solution

**EcoGuardians 2080** is a Gemini-powered, voice-interactive assistant that acts as a **personal sustainability coach**. It pulls real-time eco-activity data from Firestore for each user and generates personalized insights using the **Gemini API**. 

Key features:
- **🗣️ Voice Chat:**  
  Users interact with their eco-coach using natural voice commands (powered by `react-speech-recognition` and `react-speech-kit`) for a hands-free, intuitive experience.
- **🧠 Smart Summarization:**  
  The assistant aggregates eco-activity data (e.g., walking distance, composting, water and energy savings), intelligently summarizes it, and sends concise, optimized prompts to Gemini for more accurate and contextual responses.
- **🌍 Sustainability Tips & Motivation:**  
  Based on performance, Gemini provides tailored advice, local eco-friendly alternatives (e.g., green transport via Maps API), and motivational insights to encourage continuous improvement.
- **🎮 Behavior Loop & Reward System:**  
  User activity is gamified through an engaging points system. These points are not just symbolic—they can be **redeemed for sustainable products** and **eco-friendly services**, creating a tangible incentive loop.
- **🏆 Recognition & Benefits:**  
  High-performing users are **celebrated publicly** and can **access exclusive government benefits** in areas like food subsidies, education, transportation, and eco-leisure programs—turning individual action into collective reward.

This creates an intelligent, human-like eco-guide that grows with the user and nudges them toward a sustainable lifestyle—one interaction at a time.

---

## 🧠 Code Summary

The **EcoLoop 2080** application is developed using **React** for the frontend, integrated with **Firebase Firestore** as the real-time NoSQL database. Each user's activity is tracked using a unique identifier (`UniqueID`) and stored in a centralized collection called `ecoData`.

### 🔗 System Architecture

- **Frontend Stack:**
  - Built using **React.js**, with state managed via React Hooks.
  - Voice capabilities are implemented using `react-speech-recognition` for speech-to-text and `react-speech-kit` for text-to-speech.
  - Data visualizations and summaries are displayed using conditional rendering based on user activity analytics.

- **Backend/Data Layer:**
  - **Firebase Firestore** stores user eco-activities in documents containing fields such as `WalkingDistance`, `WaterSaved`, `CompostAmount`, `ElectricityUsed`, etc.
  - Each document is tagged with a `UniqueID` and a `timestamp` to support chronological tracking and querying.

- **📊 Data Aggregation & Analytics:**  
  - On user login, the app queries Firestore for documents in `ecoData` where `UniqueID == uid`. The retrieved data is displayed per entry, showing points across categories like Mobility, Energy, Water, Waste, and Community. 
  - While no aggregation is currently performed, the structure supports future enhancements such as total point calculations, behavior pattern detection, or generating summary prompts for the Gemini API. This sets the groundwork for advanced analytics and personalized eco-insights.

- **Gemini API Integration:**
  - A summarized string of normalized metrics (e.g., "User walked 4.5 km, saved 12L water, used 1.2 kWh energy") is constructed and sent to the **Gemini API** via a `fetch()` POST request.
  - The response is parsed and read aloud using `speechSynthesis`, enabling a fluid voice interaction loop.

- **Google Maps API:**
  - Integrated to provide **sustainable route recommendations**.
  - Based on user query and location, the app suggests green alternatives such as walking, biking, or public transport routes using the 
**Directions API** and overlays them on the map in real-time.
  - Gemini justifies the choice (e.g., "This route reduces your carbon footprint by 30% compared to driving").

- **Gamification Logic:**
  - Activity points are calculated from normalized data.
  - Users can view their cumulative impact and redeem points via a reward system.
  - The top performers receive visual badges and may access enhanced features or real-world perks (government integrations planned for food/education/etc.).

---

By combining real-time data analytics, intuitive voice control, and AI-powered insights, this app provides a **scalable and personalized eco-coaching experience**, built to handle the data complexity and behavioral diversity expected in the year 2080.

---

