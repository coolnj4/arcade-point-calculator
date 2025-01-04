const arcadeStartTime = new Date("2024-12-01T00:00:00Z");
const arcadeEndTime = new Date("2024-06-31T23:59:59Z");

const badgeSet = new Set([
    "App Building with AppSheet",
    "Analyze BigQuery Data in Connected Sheets",
    "Implement Load Balancing on Compute Engine",
    "Set Up a Google Cloud Network",
    "Deploy Kubernetes Applications on Google Cloud",
    "Arcade Snowdown",
    "Analyze Speech and Language with Google APIs",
    "Monitor and Manage Google Cloud Resources",
    "Set Up an App Dev Environment on Google Cloud",
    "Create a Secure Data Lake on Cloud Storage",
    "Tag and Discover BigLake Data",
    "Store, Process, and Manage Data on Google Cloud - Command Line",
    "Store, Process, and Manage Data on Google Cloud - Console",
    "Get Started with Eventarc",
    "Streaming Analytics into BigQuery",
    "Create a Streaming Data Lake on Cloud Storage",
    "The Arcade Certification Zone December 2024",
    "Level 3: BigQuery and Firebase",
    "Implement DevOps Workflows in Google Cloud",
    "The Arcade Trivia December 2024 Week 4",
    "Secure BigLake Data",
    "The Arcade Trivia December 2024 Week 3",
    "The Arcade Trivia December 2024 Week 2",
    "The Arcade Trivia December 2024 Week 1",
    "CCAI Architecture",
    "Advanced Conversation Design",
    "Conversation Design Fundamentals",
    "CCAI Frontend Integrations",
    "Advanced Performance Measurement",
    "Basic Performance Measurement",
    "Advanced Webhook Concepts",
    "Webhook fundamentals",
    "Get Started with Google Workspace Tools",
    "Get Started with Cloud Storage",
    "Get Started with Dataplex",
    "Cloud Speech API: 3 Ways",
    "Prompt Design in Vertex AI",
    "Get Started with Looker",
    "Get Started with Pub/Sub",
    "Analyze Images with the Cloud Vision API",
    "Develop GenAI Apps with Gemini and Streamlit",
    "Networking Fundamentals on Google Cloud",
    "Get Started with API Gateway",
    "Cloud Functions: 3 Ways",
    "The Basics of Google Cloud Compute",
    "Monitoring in Google Cloud",
    "App Engine: 3 Ways",
    "Diwali in The Arcade"
]);

const badgePoints = {
    "App Building with AppSheet": 1,
    "Analyze BigQuery Data in Connected Sheets": 1,
    "Implement Load Balancing on Compute Engine": 1,
    "Set Up a Google Cloud Network": 1,
    "Deploy Kubernetes Applications on Google Cloud": 1,
    "Arcade Snowdown": 1,
    "Analyze Speech and Language with Google APIs": 1,
    "Monitor and Manage Google Cloud Resources": 1,
    "Set Up an App Dev Environment on Google Cloud": 1,
    "Create a Secure Data Lake on Cloud Storage": 1,
    "Tag and Discover BigLake Data": 1,
    "Store, Process, and Manage Data on Google Cloud - Command Line": 1,
    "Store, Process, and Manage Data on Google Cloud - Console": 1,
    "Get Started with Eventarc": 1,
    "Streaming Analytics into BigQuery": 1,
    "Create a Streaming Data Lake on Cloud Storage": 1,
    "The Arcade Certification Zone December 2024": 1,
    "Level 3: BigQuery and Firebase": 1,
    "Implement DevOps Workflows in Google Cloud": 1,
    "The Arcade Trivia December 2024 Week 4": 1,
    "Secure BigLake Data": 1,
    "The Arcade Trivia December 2024 Week 3": 1,
    "The Arcade Trivia December 2024 Week 2": 1,
    "The Arcade Trivia December 2024 Week 1": 1,
    "CCAI Architecture": 1,
    "Advanced Conversation Design": 1,
    "Conversation Design Fundamentals": 1,
    "CCAI Frontend Integrations": 1,
    "Advanced Performance Measurement": 1,
    "Basic Performance Measurement": 1,
    "Advanced Webhook Concepts": 1,
    "Webhook fundamentals": 1,
    "Get Started with Google Workspace Tools": 1,
    "Get Started with Cloud Storage": 1,
    "Get Started with Dataplex": 1,
    "Cloud Speech API: 3 Ways": 1,
    "Prompt Design in Vertex AI": 1,
    "Get Started with Looker": 1,
    "Get Started with Pub/Sub": 1,
    "Analyze Images with the Cloud Vision API": 1,
    "Develop GenAI Apps with Gemini and Streamlit": 1,
    "Networking Fundamentals on Google Cloud": 1,
    "Get Started with API Gateway": 1,
    "Cloud Functions: 3 Ways": 1,
    "The Basics of Google Cloud Compute": 1,
    "Monitoring in Google Cloud": 1,
    "App Engine: 3 Ways": 1,
    "Diwali in The Arcade": 2
};

export { badgeSet, badgePoints };