from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "career_guidance"

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db.quiz_questions

questions = [
    {
        "question": "You are given a budget to start a small project. What do you do?",
        "options": [
            { "text": "Build an app or a website", "tag": "tech" },
            { "text": "Buy and resell items for profit", "tag": "commerce" },
            { "text": "Organize a community awareness campaign", "tag": "social_science" },
            { "text": "Design and sell custom merchandise", "tag": "design" }
        ]
    },
    {
        "question": "Which of these objects fascinates you the most?",
        "options": [
            { "text": "The engine of a high-speed jet", "tag": "aviation" },
            { "text": "A complex legal contract", "tag": "law" },
            { "text": "A microscope or surgical tool", "tag": "medical" },
            { "text": "A stock market candlestick chart", "tag": "finance" }
        ]
    },
    {
        "question": "In a team setting, which role do you naturally fall into?",
        "options": [
            { "text": "The Strategist: Planning the roadmap", "tag": "management" },
            { "text": "The Fixer: Solving technical hurdles", "tag": "engineering" },
            { "text": "The Speaker: Presenting and persuading", "tag": "law" },
            { "text": "The Empath: Resolving team conflicts", "tag": "psychology" }
        ]
    },
    {
        "question": "If you could solve one world problem, what would it be?",
        "options": [
            { "text": "Curing a terminal disease", "tag": "medical" },
            { "text": "Ending government corruption", "tag": "govt_jobs" },
            { "text": "Fixing food security and farming", "tag": "agriculture" },
            { "text": "Revolutionizing clean energy transport", "tag": "engineering" }
        ]
    },
    {
        "question": "What kind of environment makes you feel most 'in the zone'?",
        "options": [
            { "text": "A bustling airport or cockpit", "tag": "aviation" },
            { "text": "A high-end hotel or luxury resort", "tag": "hospitality" },
            { "text": "A stadium or sports training facility", "tag": "sports" },
            { "text": "A courtroom or formal boardroom", "tag": "law" }
        ]
    },
    {
        "question": "How do you prefer to spend your free time on the internet?",
        "options": [
            { "text": "Learning new coding languages", "tag": "tech" },
            { "text": "Watching documentaries on history/society", "tag": "social_science" },
            { "text": "Analyzing athlete stats or match tactics", "tag": "sports" },
            { "text": "Writing blogs or creative stories", "tag": "arts_literature" }
        ]
    },
    {
        "question": "What is your relationship with 'Rules'?",
        "options": [
            { "text": "I like enforcing them for order", "tag": "govt_jobs" },
            { "text": "I like finding loopholes in them", "tag": "law" },
            { "text": "I like breaking them to innovate", "tag": "entrepreneurship" },
            { "text": "I like creating them for safety", "tag": "aviation" }
        ]
    },
    {
        "question": "When looking at a farm, what do you think about?",
        "options": [
            { "text": "The biology of the crops", "tag": "agriculture" },
            { "text": "The machinery used for harvesting", "tag": "engineering" },
            { "text": "The profit margins of the harvest", "tag": "commerce" },
            { "text": "The rural community's welfare", "tag": "social_science" }
        ]
    },
    {
        "question": "Which of these 'Superpowers' would you want for your career?",
        "options": [
            { "text": "The ability to predict market crashes", "tag": "finance" },
            { "text": "The ability to read people's minds", "tag": "psychology" },
            { "text": "The ability to visualize 3D structures", "tag": "design" },
            { "text": "The ability to speak every language", "tag": "hospitality" }
        ]
    },
    {
        "question": "What kind of 'Content' do you create or enjoy most?",
        "options": [
            { "text": "Poetry, scripts, or literature", "tag": "arts_literature" },
            { "text": "Business plans and pitch decks", "tag": "entrepreneurship" },
            { "text": "Logic puzzles and math problems", "tag": "engineering" },
            { "text": "Detailed sketches and 3D models", "tag": "design" }
        ]
    },
    {
        "question": "How do you feel about working with numbers?",
        "options": [
            { "text": "I love them for financial auditing", "tag": "commerce" },
            { "text": "I use them for scientific research", "tag": "medical" },
            { "text": "I use them to calculate physics/loads", "tag": "engineering" },
            { "text": "I prefer words and people over numbers", "tag": "social_science" }
        ]
    },
    {
        "question": "What's your ideal work-life pace?",
        "options": [
            { "text": "Extreme pressure and high stakes", "tag": "entrepreneurship" },
            { "text": "Steady, predictable, and secure", "tag": "govt_jobs" },
            { "text": "Flexible and project-based", "tag": "design" },
            { "text": "Service-oriented and active", "tag": "hospitality" }
        ]
    },
    {
        "question": "When you visit a new city, what do you notice first?",
        "options": [
            { "text": "The efficiency of the public transport", "tag": "engineering" },
            { "text": "The behavior and culture of the locals", "tag": "social_science" },
            { "text": "The architecture and city layout", "tag": "design" },
            { "text": "The number of business opportunities", "tag": "entrepreneurship" }
        ]
    },
    {
        "question": "If you were to write a thesis, what would it be on?",
        "options": [
            { "text": "Impact of AI on human ethics", "tag": "tech" },
            { "text": "Criminal psychology and reform", "tag": "law" },
            { "text": "Genetic engineering in medicine", "tag": "medical" },
            { "text": "The evolution of modern cinema", "tag": "arts_literature" }
        ]
    },
    {
        "question": "How do you handle a crisis?",
        "options": [
            { "text": "I take command and lead others", "tag": "management" },
            { "text": "I stay calm and look for a logical fix", "tag": "engineering" },
            { "text": "I provide emotional support to others", "tag": "psychology" },
            { "text": "I follow the official emergency protocol", "tag": "govt_jobs" }
        ]
    },
    {
        "question": "What is your view on technology?",
        "options": [
            { "text": "It's a tool to build amazing things", "tag": "tech" },
            { "text": "It's a way to maximize business profit", "tag": "commerce" },
            { "text": "It's a way to monitor and govern better", "tag": "govt_jobs" },
            { "text": "It's a medium for artistic expression", "tag": "design" }
        ]
    },
    {
        "question": "Which of these sounds like a dream 'Office'?",
        "options": [
            { "text": "A greenhouse or high-tech farm", "tag": "agriculture" },
            { "text": "A bustling sports arena", "tag": "sports" },
            { "text": "A 5-star hotel lobby", "tag": "hospitality" },
            { "text": "A high-security government building", "tag": "govt_jobs" }
        ]
    },
    {
        "question": "What motivates you more?",
        "options": [
            { "text": "Helping individuals one-on-one", "tag": "psychology" },
            { "text": "Managing large-scale systems", "tag": "management" },
            { "text": "Earning high wealth and assets", "tag": "finance" },
            { "text": "Discovering new truths/knowledge", "tag": "social_science" }
        ]
    },
    {
        "question": "How do you feel about traveling for work?",
        "options": [
            { "text": "I want to be in the sky constantly", "tag": "aviation" },
            { "text": "I love meeting diverse people globally", "tag": "hospitality" },
            { "text": "I prefer a stable, local office", "tag": "law" },
            { "text": "I'm okay with it if the pay is high", "tag": "commerce" }
        ]
    },
    {
        "question": "What do you want to be known for?",
        "options": [
            { "text": "A groundbreaking invention", "tag": "engineering" },
            { "text": "A multi-million dollar startup", "tag": "entrepreneurship" },
            { "text": "A masterpiece of art or book", "tag": "arts_literature" },
            { "text": "A life-saving medical procedure", "tag": "medical" }
        ]
    }
]

# Insert into Database
#collection.insert_many(questions)
#print("Successfully seeded 20 expanded career discovery questions!")


# Insert only if empty
if collection.count_documents({}) == 0:
    collection.insert_many(questions)
    print("✅ Quiz questions inserted successfully")
else:
    print("⚠️ Quiz questions already exist")
