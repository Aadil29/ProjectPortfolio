export const projectsData = [
  {
    id: 1,
    name: "Voice Authentication System with Audio Deepfake Detection",
    description:
      "Developed a secure, browser-based voice authentication system to prevent unauthorized access, enhanced with machine learning-based audio deepfake detection. The system authenticates users against registered voice samples and classifies uploaded audio as genuine or deepfake. It integrates voice registration, live passphrase transcription (using OpenAI Whisper), speaker verification (utilizing a pre-trained ECAPA-TDNN model), and OTP delivery within a secure web application. The deepfake detection model, combining convolutional and dense neural networks, processes ten distinct audio features and achieved strong in-domain performance (AUC=0.99).",
    tools: [
      "Python",
      "NumPy",
      "PyTorch",
      "TensorFlow/Keras", // Although ECAPA-TDNN was used, your custom model development involved these, and the report mentions them as general ML tools.
      "Librosa",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Firebase Authentication",
      "Firebase Firestore",
      "OpenAI Whisper",
      "SpeechBrain ECAPA-TDNN",
      "Brevo API (formerly Sendinblue)",
      "MediaRecorder API",
      "Jupyter Notebook",
      "GitHub", // For version control
    ],
    role: "Lead Developer",
    code: "", // No code link provided in the document for public access
    demo: "15-minute video demo showcasing project functionality.",
  },
  {
    id: 2,
    name: "Multi-Layer Neural Network for MNIST Classification",
    description:
      "Built a neural network from scratch, achieving 97.94% validation accuracy. Implemented dropout layers, softmax, and optimisers (SGD, Adam) without external libraries. Applied hyperparameter tuning and leveraged MCC for balanced evaluation to optimise performance and prevent overfitting.",
    tools: ["Python", "NumPy"],
    role: "Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },
  {
    id: 3,
    name: "Smoking Detection via Biological Signals Analysis",
    description:
      "Developed and compared Neural Network, Random Forest, SVM, and GBM models to classify smoking status, achieving 97% accuracy with a neural network after extensive hyperparameter tuning. Employed data preprocessing techniques like normalisation and outlier removal. Created Random Forest and GBM model for feature importance analysis, identifying haemoglobin/GTP as key predictors. Evaluated model performance using precision-recall curves, confusion matrices, and ROC curves.",
    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ], // Assumed tools
    role: "Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },

  {
    id: 5,
    name: "EV Charging Management System",
    description:
      "Developed an Electric Vehicle (EV) Charging Management System using Next.js for full-stack web development. Integrated AWS for cloud hosting and Firebase for real-time database management and user authentication. Implemented secure user authentication using Firebase Auth. Designed and deployed a system allowing users to locate, book, and manage EV charging points in real-time. Built a reservation and scheduling feature with real-time updates. Integrated cloud-based billing and payment system. Employed Firebase Realtime Database for secure cloud storage. Implemented scalable cloud architecture with load balancing and fault tolerance. Developed real-time data analytics. Integrated Google Maps API for locating nearby charging points. Ensured data security using SSL/TLS encryption and HTTPS.",
    tools: [
      // Full-Stack Framework
      "Next.js",

      // Frontend Technologies (implicit with Next.js)
      "React.js",
      "JavaScript",
      "HTML",
      "CSS", // Assuming custom styling was involved

      // Cloud Platform & Services
      "AWS (Amazon Web Services)", // For cloud hosting, scalability, and potentially load balancing
      "Firebase", // Overall Firebase ecosystem
      "Firebase Authentication", // For secure user authentication
      "Firebase Realtime Database", // For real-time data storage and updates

      // APIs & Integrations
      "Google Maps API", // For locating charging points

      // Development Tools & Version Control (standard practices)
      "Git",
      "GitHub", // Assuming you used GitHub for version control
      // Potentially an IDE like "Visual Studio Code" if you want to be very specific
    ],
    role: "Full-Stack Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },
  {
    // New project based on the PDF
    id: 12, // Assign a new unique ID
    name: "Lancaster's Restaurant Booking System",
    description:
      "Developed a full-stack web application for Lancaster's Restaurant, enabling diners to make reservations and staff to manage them. The system features secure staff login, a responsive user interface for both diners and staff, and an API for external booking integration. It supports configurable service times (Breakfast, Lunch, Dinner) and table availability. Key features include 15-minute booking intervals, party size management (1-6 people), and on-screen/email booking confirmation with calendar links. Staff can view and print reservation lists, while diners can optionally create accounts to manage their bookings. The technical implementation follows the MVC pattern using HTML5, CSS3, PHP 8+, MySQL, and Twig templates, with asynchronous JavaScript for dynamic content updates.",
    tools: [
      "HTML5",
      "CSS3",
      "PHP 8+",
      "MySQL",
      "Twig",
      "JavaScript (Asynchronous)",
      "Composer",
      "MVC Design Pattern",
      "API (JSON)",
    ],
    role: "Full-Stack Developer",
    code: "", // No code link provided based on your previous examples
    demo: "6-minute video walkthrough available", // Indicating the demo is a video
  },

  {
    id: 6,
    name: "Airline Ticketing System",
    description:
      "Collaborated to develop a Java-based software prototype for travel agents with email verification to strengthen security. Designed an efficient GUI employing Java Swing to streamline user interaction. Managed a SQL-based database for ticket sales and user data. Led the team in developing the core backend features, ensuring timely completion and security enhancement.",
    tools: ["Java", "Java Swing", "MySQL"],
    role: "Team Lead / Backend Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },

  {
    id: 4,
    name: "Netflix Clone (DevSecOps)",
    description:
      "Developed a Netflix clone on AWS using DevSecOps practices for security and scalability. Built CI/CD pipelines with Jenkins and GitHub Actions. Provisioned AWS infrastructure with Terraform, using Docker and Kubernetes. Applied AWS IAM roles, S3 encryption, and Security Groups. Set up CloudWatch and Prometheus for monitoring. Utilised Argo CD and GitOps. Conducted security scans with OWASP Dependency-Check and Trivy. Integrated SonarQube in Jenkins. Deployed the application on Amazon EKS, monitoring with Prometheus and Grafana. Built and pushed Docker images to DockerHub.",
    tools: [
      "AWS",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Docker",
      "Kubernetes",
      "AWS IAM",
      "S3",
      "Security Groups",
      "CloudWatch",
      "Prometheus",
      "Argo CD",
      "GitOps",
      "OWASP Dependency-Check",
      "Trivy",
      "SonarQube",
      "Amazon EKS",
      "Grafana",
      "DockerHub",
    ],
    role: "Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },

  {
    id: 8,
    name: "Cybercrime and Socio-Technical Risk Analysis",
    description:
      "Analysed multi-step physical and digital intrusion scenarios using probability-based decision models. Implemented and assessed security countermeasures, such as electronic access controls and clean desk policies. Developed attack trees to simulate potential breaches, identifying vulnerabilities in enterprise environments, and proposed cost-effective security enhancements.",
    tools: [
      "Wireshark",
      "DVWA (Damn Vulnerable Web Application)",
      "MySQL",
      "Probability Decision Trees",
      "Web Security Tools",
    ],
    role: "Security Analyst",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },
  {
    id: 9,
    name: "Network Security Investigation and Vulnerability Analysis",
    description:
      "Conducted network traffic analysis using Wireshark to detect cyberattacks. Performed cross-site scripting (XSS), SQL injection attacks, and assessed vulnerabilities using the DVWA server at low, medium, and high security levels for CSS/XSS, and low, medium, and potentially high security levels for SQL injections. Identified and mitigated malware behaviour in IoT devices.",
    tools: [
      "Wireshark ",
      "DVWA (Damn Vulnerable Web Application) ",
      "Burp Suite",
      "Nmap",
      "Metasploit Framework ",
      "IoT Security Analysis Tools",
    ],
    role: "Security Investigator",
    code: "",
    demo: "",
  },
  {
    id: 10,
    name: "Digital Imaging and Evidence Preservation (Digital Forensics)",
    description:
      "Mounted and analysed virtual drive images for digital evidence acquisition, ensuring forensic soundness by verifying data integrity with hashing. Conducted keyword searches to identify relevant information and organised evidence using tagging systems for reporting. Explored deleted files and identified files with mismatched extensions. Analysed file modification and creation timestamps to understand potential evidence manipulation or movement.",
    tools: [
      "Disk Imaging Software",
      "Loop Interfaces",
      "Forensic Integrity Verification Methods",
    ],
    role: "Digital Forensics Investigator",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },
  {
    id: 11,
    name: "Cryptography and Ethical Hacking",
    description:
      "Executed a dictionary attack on an SSH server to gain administrative access. Performed cryptanalysis (by hand) of an encrypted email, using frequency analysis, Index of Coincidence, and Mutual Index of Coincidence to determine the key and reveal hidden information. Conducted a brute-force attack on a MySQL server to access a database and retrieved encrypted credit card secret codes. Calculated RSA public and private keys using Shamir's secret sharing scheme and decrypted the secret code using SageMath.",
    tools: [
      "Nmap",
      "Hydra",
      "John the Ripper",
      "Medusa",
      "MySQL command-line client",
      "SageMath",
      "Cryptool2",
    ],
    role: "Ethical Hacker",
    code: "",
    demo: "",
  },
  {
    id: 13,
    name: "Security Audit and Certification (Common Criteria)",
    description:
      "Assessed security requirements and developed documentation for Common Criteria certification of a web-based system (MySQL DBMS). This included specifying the Target of Evaluation (TOE), defining the security problem with threats and environmental assumptions, outlining security objectives, and detailing security functional requirements (focusing on user data protection, identification, and authentication). Additionally, specified security assurance requirements for EAL2 certification.",
    tools: [
      "Common Criteria documentation (Part 1, 2, 3)",
      "MySQL (as the system under evaluation)",
    ],
    role: "Security Auditor / Certification Consultant",
    code: "",
    demo: "",
  },
  {
    id: 14,
    name: "OWASP Juice Shop Security Evaluation (Common Criteria)",
    description:
      "Evaluated the satisfaction of the OWASP Juice Shop system (Target of Evaluation - TOE) against specific Security Functional Requirements (SFRs) of the Common Criteria certification framework. This involved identifying Juice Shop vulnerability challenges that violate given SFRs, conducting penetration testing activities for 10 selected vulnerabilities, recording evidence, and providing a rationale for how each challenge violates the assigned SFR. The project culminated in a video demonstration of solving challenges and an online form submission detailing the SFR-challenge pairings and rationales.",
    tools: [
      "OWASP Juice Shop",
      "Kali Linux",
      "Virtual Machine (optional)",
      "Web Browser",
      "apt-get",
      "Common Criteria certification framework",
      "Penetration Testing Tools (e.g., Nmap, Burp Suite - implied for web application testing)",
      "Screen recording software",
    ],
    role: "Security Evaluator / Penetration Tester",
    code: "",
    demo: "",
  },

  {
    id: 7,
    name: "Java 2D Platform Game",
    description:
      "Created a 2D platformer game in Java, utilising object-oriented programming for smooth gameplay mechanics. Integrated collision detection, levels, soundtracks selection, menus and score tracking, enhancing the player experience.",
    tools: ["Java", "Java Swing"],
    role: "Developer",
    code: "", // No code link provided
    demo: "", // No demo link provided
  },

  {
    id: 15,
    name: "Network Security Investigation and Web Application Vulnerability Analysis",
    description:
      "Conducted in-depth network security investigations, focusing on web application vulnerabilities. Exploited and analyzed SQL injection and Cross-Site Scripting (XSS) vulnerabilities (Reflected, Stored, and DOM-based) on the Damn Vulnerable Web Application (DVWA) server across low, medium, and high-security configurations. Demonstrated various exploitation techniques, including union-based SQL injection, bypassing script tag filtering, and leveraging onerror events. Successfully retrieved sensitive data like hashed passwords and user cookies. Implemented social engineering techniques by setting up a temporary HTTP server to capture user cookies. Additionally, performed analysis to identify and clean malware behavior from IoT EndUser devices. The methodology followed principles akin to Advanced Persistent Threats (APT) for thorough system exploration and exploitation.",
    tools: [
      "Kali Linux",
      "MySQL",
      "Wireshark",
      "DVWA (Damn Vulnerable Web Application)",
      "Python",
      "Web Browser Developer Tools",
      "SQL",
      "JavaScript",
      "Burp Suite",
      "Nmap",
      "Metasploit Framework",
      "IoT Security Analysis Tools",
    ],
    role: "Security Analyst / Penetration Tester",
    code: "",
    demo: "",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
