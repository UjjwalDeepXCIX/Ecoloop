# 🌱 **EcoLoop 2080**

A futuristic, voice-powered sustainability coach designed to transform urban living by 2080.

---

## 👥 **Team**
- **Size:** 4 members  
- **Built by:** A passionate crew of innovators tackling climate challenges with tech.

---

## 🔧 **Google Technologies**
- **Firebase Firestore** – Real-time eco-activity storage  
- **Google Maps API** – Sustainable route planning  
- **Google Cloud Platform (GCP)** – Scalable infrastructure  
- **Gemini API** – AI-driven insights and reasoning  
- **Firebase Authentication** – Secure user access  
- **Google Data Analytics** – Actionable eco-impact metrics  

### 🤖 **Gemini API in Action?**  
**Yes!** We’ve harnessed the **Gemini API** to fuel our AI assistant, delivering natural voice interactions and smart, context-aware sustainability tips—think eco-route reasoning and personalized green advice.

---

## 🚨 **The 2080 Challenge**

By 2080, climate change will dominate daily life. Hyper-urbanization, resource scarcity, and extreme weather will make sustainable choices harder than ever. Awareness exists, but people lack:  
- **Real-time feedback** on their eco-impact  
- **Localized, actionable suggestions**  
- **Motivating incentives** to stay green  

Governments can’t do it alone—sustainability needs a grassroots, tech-driven push. Without **intelligent, personalized eco-guides**, urban dwellers will struggle to adapt, amplifying unsustainable habits in cities where every decision counts.

---

## 💡 **Our Solution: EcoGuardians 2080**

**EcoGuardians 2080** is your personal, Gemini-powered sustainability coach. This voice-activated assistant tracks your eco-footprint in real time, offers tailored advice, and gamifies green living—all while adapting to your unique habits.

### ✨ **Key Features**
- **🗣️ Voice Interaction**  
  Hands-free control via `react-speech-recognition` and `react-speech-kit`—ask, listen, act.  
- **🧠 Smart Insights**  
  Aggregates your eco-data (e.g., walking, water use, energy) and uses Gemini to deliver concise, meaningful feedback.  
- **🌍 Tailored Tips**  
  Get local green options—like bike routes via Google Maps API—plus motivational nudges to keep improving.  
- **🎮 Gamified Rewards**  
  Earn points for eco-actions, redeemable for sustainable products or services—a loop that makes green living addictive.  
- **🏆 Collective Impact**  
  Top users unlock public recognition and exclusive perks (e.g., subsidies for food, transport, education)—individual wins fuel community gains.

**EcoGuardians** evolves with you, blending AI smarts with human-like guidance to make sustainability second nature.

---

## 🧠 **Tech Breakdown**

### ⚙️ **System Architecture**
- **Frontend:**  
  - **React.js** with Hooks for dynamic UI  
  - Voice powered by `react-speech-recognition` (speech-to-text) and `react-speech-kit` (text-to-speech)  
  - Visuals rendered conditionally based on user analytics  

- **Backend/Data:**  
  - **Firebase Firestore** stores eco-activities (e.g., `WalkingDistance`, `WaterSaved`) tied to a `UniqueID` and timestamp  
  - Scalable NoSQL design for real-time updates and future analytics  

- **📊 Analytics Pipeline:**  
  - Queries `ecoData` by `UniqueID` on login  
  - Displays points across Mobility, Energy, Water, Waste, and Community  
  - Prepped for advanced aggregation (e.g., totals, trends) and Gemini prompts  

- **Gemini Integration:**  
  - Sends normalized eco-metrics (e.g., "Walked 4.5 km, saved 12L water") via `fetch()` POST  
  - Parses AI responses, voiced aloud with `speechSynthesis`  

- **Google Maps API:**  
  - Suggests eco-routes (walking, biking, transit) in real time  
  - Gemini explains why (e.g., "Cuts CO2 by 30% vs. driving")  

- **Gamification:**  
  - Points calculated from eco-data  
  - Redeemable rewards + badges for top performers  
  - Future tie-ins: government benefits (food, education, leisure)  

---

## 🌟 **Why It Works**

**EcoLoop 2080** fuses real-time data, voice-driven AI, and behavioral incentives into a seamless, scalable experience. Built for the complexities of 2080, it empowers users to live sustainably—one smart, rewarding interaction at a time.
