# Skillscapital

**Skillscapital** is a modular and scalable frontend web application built using **Next.js 13+ App Router**, **React 19**, **Tailwind CSS**, and other modern tools. It is designed to showcase AI-powered, enterprise, and professional service components with responsive and animated UI elements.

---

##  Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: JavaScript (React JSX)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons

---
## Folder Structure
.
├── app/
│   ├── favicon.ico         # Application icon
│   ├── globals.css         # Global styles
│   ├── layout.js           # Global layout component
│   └── page.js             # Root landing page
├── components/
│   ├── Body/
│   │   ├── aiPoweredDeep/  # AI service related components
│   │   │   └── components/
│   │   │       ├── DeepVet.jsx
│   │   │       ├── MainComponents.jsx
│   │   │       ├── MatchTM.jsx
│   │   │       ├── TalentPersona.jsx
│   │   │       ├── TopHeading.jsx
│   │   │       └── AIPoweredService.jsx
│   │   ├── elite/          # Elite professionals section
│   │   │   ├── CardComponent.jsx
│   │   │   └── MeetElite.jsx
│   │   ├── enterpriseGrade/ # Enterprise service components
│   │   │   ├── EnterPriseGrade.jsx
│   │   │   └── SubComponent.jsx
│   │   ├── heroComponent/  # Hero section
│   │   │   └── HeroSection.jsx
│   │   ├── indiaSAP/       # India SAP specific information
│   │   │   └── IndiaSAP.jsx
│   │   ├── reinforceValue/ # Reinforcement content
│   │   │   └── ReinforceComponent.jsx
│   │   ├── sourceDeploy/   # Deployment solutions
│   │   │   ├── MainComponents.jsx
│   │   │   └── SubComponents.jsx
│   │   └── testimonial/    # Testimonials
│   │       └── TestimonialComponent.jsx
│   ├── Experience/         # User experience related cards
│   │   ├── ExperienceCard.jsx
│   │   ├── FilterPanel.jsx
│   │   └── MainExperienceComponent.jsx
│   ├── Footer/
│   │   └── Footer.jsx      # Footer component
│   ├── Navbar/
│   │   └── Navbar.jsx      # Top navigation bar
│   └── ServicesComponents/
│       ├── Header.jsx
│       └── Hero.jsx
├── utils/
│   ├── buttons/            # Reusable button components
│   │   ├── DropDownButton.jsx
│   │   ├── PrimaryYellowButton.jsx
│   │   ├── RightArrowButton.jsx
│   │   ├── SecondaryBlackButtons.jsx
│   │   └── SimpleButton.jsx
│   ├── icons/
│   │   └── IconsAIPoweredComp.jsx
│   └── images/
│       ├── images.js
│       └── experienceData.js
├── public/                 # Public assets like images
├── config/
│   ├── postcss.config.js
│   └── tailwind.config.js
└── .
    ├── package.json        # Project metadata and scripts
    ├── README.md           # Project overview (you are here)
    ├── .gitignore          # Files and folders to ignore in Git
    └── next.config.mjs     # Next.js configuration

yaml
Copy code

---
Here you will find folder structure musch clumsy and hard to digest so keeping this thing in mind I am attaching a mermaid link which is pulic please have a look on this 

https://www.mermaidchart.com/raw/31a36944-bc45-4551-ae14-dd0d5fefd373?theme=light&version=v0.1&format=svg
## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skillscapital.git
cd skillscapital

# Install dependencies
npm install
🚀 Usage
bash
Copy code
# Start the development server
npm run dev
Open http://localhost:3000 to view the app in your browser.

# Available Scripts
npm run dev: Start dev server with TurboPack

npm run build: Build the production version

npm start: Start the production server

npm run lint: Run linter

Built with passion using Next.js and Tailwind CSS.




