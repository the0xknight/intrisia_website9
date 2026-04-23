const careers = [
  {
    id: "data_scientist",
    title: "Data Scientist",
    description: "Analyze data to gain insights",
    overview: "Works with data to extract insights and build ML models.",
    who_is_it_for: ["Analytical thinkers", "Math lovers"],
    paths: {
      traditional: ["B.Tech CSE", "MSc Data Science"],
      alternative: ["Online courses", "Bootcamps"]
    },
    degrees: ["B.Tech", "BSc", "MSc"],
    skills: {
      technical: ["Python", "ML", "SQL"],
      soft: ["Problem solving", "Communication"]
    },
    salary: { entry: "3-6 LPA", average: "8-12 LPA", top: "20+ LPA" },
    opportunities: ["Tech companies", "Startups"],
    future_scope: "High demand due to AI",
    stay_updated: ["Kaggle", "Blogs"],
    challenges: ["Math heavy"],
    should_choose: { yes_if: ["Love data"], no_if: ["Hate stats"] }
  },

  {
    id: "web_dev",
    title: "Web Developer",
    description: "Build websites and web apps",
    overview: "Develops websites and web apps.",
    who_is_it_for: ["Creative minds", "Coders"],
    paths: { traditional: ["B.Tech IT"], alternative: ["Self learning"] },
    degrees: ["B.Tech", "Diploma"],
    skills: {
      technical: ["HTML", "CSS", "React"],
      soft: ["Creativity", "Teamwork"]
    },
    salary: { entry: "2-5 LPA", average: "6-10 LPA", top: "15+ LPA" },
    opportunities: ["Freelancing", "Startups"],
    future_scope: "Always in demand",
    stay_updated: ["GitHub"],
    challenges: ["Fast-changing tech"],
    should_choose: { yes_if: ["Like UI"], no_if: ["Hate debugging"] }
  },

  {
    id: "ai_engineer",
    title: "AI Engineer",
    description: "Build intelligent AI systems",
    overview: "Designs AI models and intelligent systems.",
    who_is_it_for: ["Problem solvers", "Tech enthusiasts"],
    paths: { traditional: ["B.Tech AI"], alternative: ["Courses"] },
    degrees: ["B.Tech", "M.Tech"],
    skills: {
      technical: ["Python", "Deep Learning"],
      soft: ["Critical thinking"]
    },
    salary: { entry: "5-8 LPA", average: "12-18 LPA", top: "30+ LPA" },
    opportunities: ["AI companies"],
    future_scope: "Exploding demand",
    stay_updated: ["Research papers"],
    challenges: ["Complex concepts"],
    should_choose: { yes_if: ["Love AI"], no_if: ["Hate math"] }
  },

  {
    id: "cyber_security",
    title: "Cyber Security Analyst",
    description: "Protect systems from cyber attacks",
    overview: "Ensures security of networks and systems.",
    who_is_it_for: ["Security enthusiasts"],
    paths: { traditional: ["B.Tech"], alternative: ["Certifications"] },
    degrees: ["B.Tech"],
    skills: {
      technical: ["Networking", "Ethical hacking"],
      soft: ["Attention to detail"]
    },
    salary: { entry: "3-6 LPA", average: "8-15 LPA", top: "25+ LPA" },
    opportunities: ["IT firms"],
    future_scope: "Very high demand",
    stay_updated: ["Security blogs"],
    challenges: ["Constant threats"],
    should_choose: { yes_if: ["Like security"], no_if: ["Lazy mindset"] }
  },

  {
    id: "mobile_dev",
    title: "Mobile App Developer",
    description: "Build Android/iOS apps",
    overview: "Creates mobile applications.",
    who_is_it_for: ["App lovers"],
    paths: { traditional: ["B.Tech"], alternative: ["Self learning"] },
    degrees: ["B.Tech"],
    skills: {
      technical: ["Flutter", "Kotlin"],
      soft: ["Creativity"]
    },
    salary: { entry: "3-5 LPA", average: "7-12 LPA", top: "20+ LPA" },
    opportunities: ["Startups"],
    future_scope: "Growing fast",
    stay_updated: ["Play Store trends"],
    challenges: ["Device compatibility"],
    should_choose: { yes_if: ["Love apps"], no_if: ["Hate UI"] }
  },

  {
    id: "cloud_engineer",
    title: "Cloud Engineer",
    description: "Manage cloud infrastructure",
    overview: "Works with AWS, Azure, cloud systems.",
    who_is_it_for: ["Tech infra lovers"],
    paths: { traditional: ["B.Tech"], alternative: ["Certifications"] },
    degrees: ["B.Tech"],
    skills: {
      technical: ["AWS", "Docker"],
      soft: ["Problem solving"]
    },
    salary: { entry: "4-7 LPA", average: "10-18 LPA", top: "30+ LPA" },
    opportunities: ["Cloud companies"],
    future_scope: "Very high demand",
    stay_updated: ["Cloud docs"],
    challenges: ["Complex setup"],
    should_choose: { yes_if: ["Like infra"], no_if: ["Hate config"] }
  },

  {
    id: "ui_ux",
    title: "UI/UX Designer",
    description: "Design user-friendly interfaces",
    overview: "Focuses on user experience and design.",
    who_is_it_for: ["Creative people"],
    paths: { traditional: ["Design degree"], alternative: ["Figma learning"] },
    degrees: ["B.Des"],
    skills: {
      technical: ["Figma"],
      soft: ["Creativity"]
    },
    salary: { entry: "2-5 LPA", average: "6-10 LPA", top: "15+ LPA" },
    opportunities: ["Design firms"],
    future_scope: "Growing",
    stay_updated: ["Design trends"],
    challenges: ["User expectations"],
    should_choose: { yes_if: ["Creative"], no_if: ["Hate design"] }
  },

  {
    id: "software_tester",
    title: "Software Tester",
    description: "Test applications for bugs",
    overview: "Ensures software quality.",
    who_is_it_for: ["Detail-oriented people"],
    paths: { traditional: ["B.Tech"], alternative: ["Testing courses"] },
    degrees: ["B.Tech"],
    skills: {
      technical: ["Selenium"],
      soft: ["Attention"]
    },
    salary: { entry: "2-4 LPA", average: "5-8 LPA", top: "12+ LPA" },
    opportunities: ["IT companies"],
    future_scope: "Stable",
    stay_updated: ["Testing tools"],
    challenges: ["Repetitive work"],
    should_choose: { yes_if: ["Like testing"], no_if: ["Hate repetition"] }
  },

  {
    id: "game_dev",
    title: "Game Developer",
    description: "Develop video games",
    overview: "Creates games using engines.",
    who_is_it_for: ["Gamers"],
    paths: { traditional: ["B.Tech"], alternative: ["Unity learning"] },
    degrees: ["B.Tech"],
    skills: {
      technical: ["Unity", "C#"],
      soft: ["Creativity"]
    },
    salary: { entry: "3-6 LPA", average: "8-12 LPA", top: "20+ LPA" },
    opportunities: ["Gaming studios"],
    future_scope: "Growing",
    stay_updated: ["Game trends"],
    challenges: ["High competition"],
    should_choose: { yes_if: ["Love games"], no_if: ["Hate coding"] }
  },

  {
    id: "digital_marketing",
    title: "Digital Marketer",
    description: "Promote brands online",
    overview: "Works on SEO, ads, social media.",
    who_is_it_for: ["Creative + analytical"],
    paths: { traditional: ["BBA"], alternative: ["Courses"] },
    degrees: ["BBA"],
    skills: {
      technical: ["SEO"],
      soft: ["Communication"]
    },
    salary: { entry: "2-5 LPA", average: "6-10 LPA", top: "15+ LPA" },
    opportunities: ["Agencies"],
    future_scope: "High demand",
    stay_updated: ["Trends"],
    challenges: ["Changing algorithms"],
    should_choose: { yes_if: ["Like marketing"], no_if: ["Hate trends"] }
  },

  {
    id: "doctor",
    title: "Doctor",
    description: "Treat patients",
    overview: "Medical professional.",
    who_is_it_for: ["Biology lovers"],
    paths: { traditional: ["MBBS"], alternative: [] },
    degrees: ["MBBS"],
    skills: {
      technical: ["Medical knowledge"],
      soft: ["Empathy"]
    },
    salary: { entry: "5-10 LPA", average: "10-20 LPA", top: "50+ LPA" },
    opportunities: ["Hospitals"],
    future_scope: "Always needed",
    stay_updated: ["Medical journals"],
    challenges: ["Long study"],
    should_choose: { yes_if: ["Love helping"], no_if: ["Hate study"] }
  },

  {
    id: "lawyer",
    title: "Lawyer",
    description: "Handle legal cases",
    overview: "Practices law.",
    who_is_it_for: ["Argumentative minds"],
    paths: { traditional: ["LLB"], alternative: [] },
    degrees: ["LLB"],
    skills: {
      technical: ["Law knowledge"],
      soft: ["Communication"]
    },
    salary: { entry: "3-6 LPA", average: "8-15 LPA", top: "25+ LPA" },
    opportunities: ["Courts"],
    future_scope: "Stable",
    stay_updated: ["Legal news"],
    challenges: ["High competition"],
    should_choose: { yes_if: ["Like law"], no_if: ["Hate debate"] }
  },

  {
    id: "teacher",
    title: "Teacher",
    description: "Educate students",
    overview: "Teaches students.",
    who_is_it_for: ["Patient people"],
    paths: { traditional: ["B.Ed"], alternative: [] },
    degrees: ["B.Ed"],
    skills: {
      technical: ["Subject knowledge"],
      soft: ["Patience"]
    },
    salary: { entry: "2-4 LPA", average: "5-8 LPA", top: "12+ LPA" },
    opportunities: ["Schools"],
    future_scope: "Stable",
    stay_updated: ["Education trends"],
    challenges: ["Low pay initially"],
    should_choose: { yes_if: ["Love teaching"], no_if: ["Impatient"] }
  }
];

export default careers;