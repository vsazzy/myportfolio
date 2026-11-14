// All copy on the site lives here. Edit this file to change what the page says;
// the components only handle layout.

export const profile = {
  name: "Yash Verma",
  role: "Applied AI Engineer",
  focus: "Inference",
  availability: "M.S. graduating Dec 2026 · open to applied AI and inference roles",
  headline: ["AI systems that are grounded, measured and", "fast."],
  lede:
    "I build LLM applications and vision models, then do the work that makes them usable: retrieval that cites its sources, evals I can defend, and an inference path with a latency budget.",
  builtAt: ["Terac", "Ford Motor Company", "UB SEAS Lab", "University at Buffalo"],
  email: "sendamailtoyash@gmail.com",
  links: {
    github: "https://github.com/vsazzy",
    linkedin: "https://www.linkedin.com/in/yash-verma7/",
    blog: "https://vsazzy.github.io/garden/",
    coffee: "https://share.google/RviNNV8iV5wRD0Tta",
  },
};

// Prompts for the simulated token stream in the hero.
export const stream = [
  {
    q: "who are you?",
    a: "Applied AI engineer. Four years of production Python at Ford, a summer shipping multi-agent workflows at Terac, and now finishing an M.S. in AI/ML at Buffalo.",
  },
  {
    q: "what do you optimise for?",
    a: "Answers that are grounded and cited, eval numbers I can defend, and the latency a user actually feels: time to first token, then tokens per second.",
  },
  {
    q: "what are you working on?",
    a: "Crack detection that runs inside a ROS2 and C-V2X vehicle pipeline. F1 went from 0.29 to 0.55 and precision from 0.20 to 0.70.",
  },
];

export const about = {
  paragraphs: [
    "I spent four years at Ford building the Python, NLP and data pipelines behind enterprise threat intelligence, where a model only counts once it runs every day and someone trusts the output.",
    "Now I work on the applied side of AI: multi-agent workflows shipped at Terac, knowledge-graph retrieval and vision pipelines at the UB SEAS Lab, and the serving and measurement work around them. I care about what the system does under load as much as what it scores offline.",
  ],
  stats: [
    { value: "~4 yrs", label: "production engineering at Ford" },
    { value: "0.29 → 0.55", label: "F1 on dashcam crack detection" },
    { value: "1.7×", label: "two-GPU training speedup with PyTorch DDP" },
    { value: "746", label: "chunks indexed for a fully local, cited RAG assistant" },
  ],
};

export const layers = [
  {
    n: "01",
    name: "Application",
    summary: "RAG, agents, tool routing, guardrails and citations.",
    evidence:
      "A multi-agent onboarding workflow shipped at Terac on Google ADK and MCP, and a RAG agent where a citation validator gates every answer.",
  },
  {
    n: "02",
    name: "Model",
    summary: "Training, tuning and evaluation on real data.",
    evidence:
      "LECSFormer for crack detection, an NER model on security reports at Ford (+25% entity detection), and a churn model at 0.832 ROC-AUC.",
  },
  {
    n: "03",
    name: "Inference",
    summary: "Serving, latency, GPUs and the edge.",
    evidence:
      "Inference inside a ROS2 and C-V2X pipeline with timing instrumentation, a SAM 3 service on CUDA, and multi-GPU throughput benchmarks.",
  },
];

export const inference = [
  {
    tag: "Production",
    title: "Latency and reliability for agent services",
    body: "Monitored API and inference latency, failures and queue health for asynchronous AI services on AWS SQS and Lambda and GCP Cloud Run, built with queueing, concurrency controls, retries and autoscaling.",
    where: "Terac",
  },
  {
    tag: "Edge",
    title: "Inference on a moving vehicle",
    body: "Integrated crack-detection inference into a ROS2 and C-V2X pipeline: OpenCV capture, camera calibration, RTK GPS and GPS-to-pixel projection, with timing instrumentation across OBU/RSU message transfer.",
    where: "UB SEAS Lab",
  },
  {
    tag: "GPU service",
    title: "SAM 3 behind a FastAPI endpoint",
    body: "Wrapped Meta SAM 3 in a CUDA service with a lazy, lock-guarded model load, a health endpoint, input validation and compressed mask responses, isolated from the app's older PyTorch environment.",
    where: "RoadDamageDetection-SAM3",
  },
  {
    tag: "Local LLM",
    title: "Serving and observing local models",
    body: "llama3 and nomic-embed-text served through Ollama, with per-request latency, approximate token counts, retrieval scores and refusals logged to JSONL and charted in a dashboard.",
    where: "Local SDK Agent",
  },
  {
    tag: "Throughput",
    title: "Multi-GPU benchmarking",
    body: "CPU, single-GPU and two-GPU ResNet-34 pipelines with PyTorch DDP, torchrun, DistributedSampler and mixed precision on NVIDIA L40S: 45.53 s down to 26.8 s on CIFAR-10.",
    where: "Distributed Deep Learning Benchmark",
  },
];

export const projects = [
  {
    kicker: "Agentic RAG · Local LLM",
    title: "Local SDK Agent",
    description:
      "A privacy-preserving agentic RAG assistant for technical SDK documentation. A planner routes each query, a citation validator gates the answer, and out-of-scope questions are refused instead of guessed. Everything runs on local models, so private docs never leave the machine.",
    flow: ["query", "planner", "retrieval", "citation check", "answer or refusal"],
    metrics: [
      { value: "746", label: "chunks indexed" },
      { value: "top-k 15", label: "with a 0.45 relevance gate" },
      { value: "100% local", label: "llama3 + nomic-embed-text" },
    ],
    tech: ["Python", "LangChain", "Ollama", "ChromaDB", "Slack", "Streamlit"],
    href: "https://github.com/vsazzy/Agentic-Technical-Documentation-Assistant",
    featured: true,
  },
  {
    kicker: "Research · Vision at the edge",
    title: "Crack detection for connected vehicles",
    description:
      "Trained and tuned LECSFormer on dashcam images with semi-automated annotation, custom augmentation and adaptive cropping, then ran it inside a ROS2 and C-V2X vehicle pipeline.",
    metrics: [
      { value: "0.29 → 0.55", label: "F1" },
      { value: "0.20 → 0.70", label: "precision" },
    ],
    tech: ["PyTorch", "OpenCV", "ROS2", "C-V2X"],
    note: "UB SEAS Lab research",
  },
  {
    kicker: "Vision · GPU service",
    title: "YOLO-guided SAM 3 crack masks",
    description:
      "Extended an open-source YOLOv8 road-damage app so every detector box is refined into a pixel mask by Meta SAM 3, served from a separate CUDA service with tests for the mask logic.",
    metrics: [
      { value: "4", label: "damage classes" },
      { value: "box → mask", label: "per detection" },
    ],
    tech: ["YOLOv8", "SAM 3", "FastAPI", "CUDA"],
    href: "https://github.com/vsazzy/RoadDamageDetection-SAM3",
  },
  {
    kicker: "GPU performance",
    title: "Distributed deep learning benchmark",
    description:
      "CPU, single-GPU and two-GPU ResNet-34 training pipelines built to measure what a second GPU buys, tracking throughput and evaluation metrics along the way.",
    metrics: [
      { value: "1.7×", label: "speedup on two GPUs" },
      { value: "45.53 → 26.8 s", label: "training time" },
    ],
    tech: ["PyTorch DDP", "torchrun", "Mixed precision", "NVIDIA L40S"],
  },
  {
    kicker: "MLOps · Serving",
    title: "Customer churn MLOps pipeline",
    description:
      "An end-to-end pipeline with reproducible DVC stages, MLflow tracking and registry, CI quality gates on F1 and ROC-AUC, and a typed FastAPI endpoint in Docker.",
    metrics: [
      { value: "0.832", label: "ROC-AUC" },
      { value: "0.80", label: "recall" },
    ],
    tech: ["scikit-learn", "MLflow", "DVC", "GitHub Actions", "FastAPI"],
    href: "https://github.com/vsazzy/customer-churn-MLOps",
  },
];

export const moreBuilds = [
  {
    title: "JudgeMe AI",
    blurb: "Persona-based prompt engineering on Groq-hosted Llama 3.1, with a live demo.",
    href: "https://judgemeai.streamlit.app/",
  },
  {
    title: "Speech to translation",
    blurb: "Whisper transcription chained into M2M100 for multilingual translation.",
    href: "https://github.com/vsazzy/Multimodel-Machine-Translation",
  },
  {
    title: "OCT retinal classifier",
    blurb: "A custom CNN over four retinal conditions, deployed on Streamlit.",
    href: "https://oct-image-classifier.streamlit.app/",
  },
  {
    title: "Adversarial attacks on a safety classifier",
    blurb: "White-box FGSM and PGD attacks against an image moderation model.",
    href: "https://github.com/vsazzy/Adversarial-Attack-on-LLM",
  },
  {
    title: "Transformers from scratch",
    blurb: "Scaled dot-product, self and multi-head attention, written out by hand.",
    href: "https://github.com/vsazzy/transformers-101",
  },
  {
    title: "System Design Scrollytelling",
    blurb: "A visual, scroll-driven guide to system design in 22 chapters.",
    href: "https://vsazzy.github.io/System-Design-Scrollytelling",
  },
  {
    title: "nxtMate",
    blurb: "A school super app for communication, administration and student data.",
    href: "https://www.nxtmate.com/",
  },
];

export const experience = [
  {
    when: "May 2026 – Aug 2026",
    role: "AI Engineer Intern",
    org: "Terac",
    where: "San Francisco, CA (Remote)",
    points: [
      "Built and shipped a multi-agent workflow for end-to-end onboarding of employees joining projects, using Google ADK and MCP-based integrations to coordinate tasks and external services.",
      "Built and configured Terac's ChatGPT app, integrating company services into an external AI assistant platform.",
      "Implemented structured tool calling, retrieval, caching, guardrails, retries and failure handling in agent workflows, and reviewed execution traces and user feedback to find issues.",
      "Developed asynchronous AI services on AWS SQS and Lambda, DynamoDB and PostgreSQL, Docker and GCP Cloud Run, with queueing, concurrency controls, retries and autoscaling.",
      "Monitored API and inference latency, failures, queue health and agent execution through cloud logs and metrics to investigate reliability and performance bottlenecks.",
    ],
  },
  {
    when: "May 2026 – Present",
    role: "AI Research Assistant",
    org: "UB Safe and Efficient Autonomous Systems (SEAS) Lab",
    where: "Buffalo, NY",
    points: [
      "Designed and built a lab-wide knowledge platform that unifies UB Box files, GitHub repositories, HPC cluster documentation, Overleaf papers and hardware docs into a knowledge graph with Cognee and LlamaIndex, using hybrid graph and vector retrieval for grounded, cited Q&A.",
      "Built a SAM 3 and YOLOv8 semi-automated annotation and training-data pipeline for large-scale dashcam imagery, with batched inference, caching, confidence-based filtering and quality checks to generate crack segmentation masks.",
      "Trained and tuned LECSFormer for crack detection, improving F1 from 0.29 to 0.55 and precision from 0.20 to 0.70 through model and data-pipeline iteration.",
      "Integrated inference into a ROS2 and C-V2X vehicle pipeline combining OpenCV capture, camera calibration, RTK GPS and GPS-to-pixel projection, with timing instrumentation.",
    ],
  },
  {
    when: "Sep 2021 – Aug 2025",
    role: "Senior Analyst",
    org: "Ford Motor Company",
    where: "Chennai, India",
    points: [
      "Built production Python and Docker workflows for threat-intelligence analytics, automation and ingestion, cutting manual processing by 40%.",
      "Created, cleaned and labeled training data for an NER model, analyzed extraction failure patterns and evaluated precision, recall, F1 and false-positive rate, improving entity detection by 25%.",
      "Designed and operated REST and STIX/TAXII integrations across MISP, ThreatConnect, Mandiant and Auto-ISAC, taking rework from 20% to 5% and reducing queue age by 40–60%.",
      "Built production PySpark and SQL pipelines on GCP BigQuery powering 10 QlikView operational and risk dashboards.",
    ],
  },
];

export const education = [
  {
    when: "Dec 2026",
    degree: "M.S. Computer Science (AI/ML)",
    school: "University at Buffalo (SUNY)",
    detail: "GPA 3.7 / 4.00",
  },
  {
    when: "Jun 2021",
    degree: "B.E. Computer Science",
    school: "Sant Longowal Institute of Engineering and Technology",
    detail: "GPA 9.18 / 10",
  },
];

export const campus = [
  "Graduate Student Assistant, University at Buffalo",
  "Board member, UB CSE Graduate Student Association",
  "UB Boxing Club",
  "UB Table Tennis Club",
];

export const stack = [
  {
    group: "Inference & serving",
    items: [
      "Batched inference",
      "Latency monitoring",
      "Caching",
      "PyTorch DDP",
      "CUDA",
      "Mixed precision",
      "Ollama",
      "FastAPI",
      "Docker",
      "GCP Cloud Run",
    ],
  },
  {
    group: "LLM & agentic systems",
    items: [
      "RAG",
      "Knowledge graphs",
      "Multi-agent orchestration",
      "Tool / function calling",
      "Structured outputs",
      "MCP",
      "Google ADK",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Cognee",
      "Embeddings",
      "Vector retrieval",
      "LLM evaluation",
      "Guardrails",
    ],
  },
  {
    group: "Reliability",
    items: [
      "Retries",
      "Idempotency",
      "Concurrency controls",
      "Rate limiting",
      "Queueing",
      "Autoscaling",
    ],
  },
  {
    group: "ML engineering & MLOps",
    items: [
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "DVC",
      "Vertex AI",
      "GitHub Actions",
      "CI/CD",
      "Computer vision",
      "NLP / NER",
    ],
  },
  {
    group: "Backend & cloud",
    items: [
      "AWS Lambda",
      "AWS SQS",
      "GCP BigQuery",
      "Cloud Storage",
      "PostgreSQL",
      "DynamoDB",
      "PySpark",
      "REST APIs",
      "Microservices",
      "Node.js",
      "React",
    ],
  },
  {
    group: "Languages",
    items: ["Python", "SQL", "JavaScript"],
  },
];

export const writing = [
  {
    label: "Garden · Jan 2026",
    title: "Transformers 101: Understanding Attention",
    blurb: "The encoder-decoder Transformer from “Attention Is All You Need”, built from scratch.",
  },
  {
    label: "Garden · Jan 2026",
    title: "Transformers 201: Encoder-only architecture",
    blurb: "BERT, RoBERTa and DistilBERT, and what the encoder alone is good for.",
  },
  {
    label: "Garden · Jan 2026",
    title: "Transformers 301: Decoder-only architecture",
    blurb: "How ChatGPT-style models work under the hood.",
  },
];
