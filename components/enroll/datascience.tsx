"use client";

import { Box, Button, Typography } from "@mui/material";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Cpu,
  Database,
  Layers,
  BarChart,
  Globe,
  Code,
  Shield,
} from "lucide-react";

export default function DataScienceCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "Introduction to Data Science",
      icon: Globe,
      points: [
        "What is Data Science?",
        "Role of a Data Scientist",
        "Applications of Data Science",
        "Data Science Workflow",
        "Tools and Platforms",
      ],
    },
    {
      module: "Python for Data Science",
      icon: Code,
      points: [
        "Python Basics: Variables, Loops, Functions",
        "NumPy for Numerical Computations",
        "Pandas for Data Manipulation",
        "Data Cleaning & Preprocessing",
        "File Handling (CSV, Excel, JSON)",
      ],
    },
    {
      module: "Statistics & Probability",
      icon: BarChart,
      points: [
        "Descriptive Statistics",
        "Probability Concepts",
        "Probability Distributions (Normal, Binomial, Poisson)",
        "Hypothesis Testing",
        "Correlation & Covariance",
      ],
    },
    {
      module: "Data Visualization",
      icon: Layers,
      points: [
        "Matplotlib Basics",
        "Seaborn for Advanced Visualizations",
        "Plotly for Interactive Charts",
        "Dashboard Basics",
        "Data Storytelling",
      ],
    },
    {
      module: "Exploratory Data Analysis (EDA)",
      icon: Database,
      points: [
        "Understanding Data Patterns",
        "Outlier Detection & Handling",
        "Missing Data Imputation",
        "Feature Engineering",
      ],
    },
    {
      module: "Machine Learning (ML) Basics",
      icon: Cpu,
      points: [
        "Supervised Learning: Regression & Classification",
        "Unsupervised Learning: Clustering & Dimensionality Reduction",
        "Model Evaluation Metrics",
        "Train-Test Split & Cross Validation",
      ],
    },
    {
      module: "Advanced Machine Learning",
      icon: BarChart,
      points: [
        "Decision Trees & Random Forests",
        "Gradient Boosting (XGBoost, LightGBM)",
        "Support Vector Machines (SVM)",
        "K-Nearest Neighbors (KNN)",
        "Hyperparameter Tuning",
      ],
    },
    {
      module: "Deep Learning",
      icon: Cpu,
      points: [
        "Introduction to Neural Networks",
        "TensorFlow & Keras Basics",
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN) & LSTM",
        "Deep Learning Projects",
      ],
    },
    {
      module: "Natural Language Processing (NLP)",
      icon: Layers,
      points: [
        "Text Preprocessing",
        "Tokenization, Lemmatization, Stopwords",
        "Bag of Words & TF-IDF",
        "Sentiment Analysis & Text Classification",
        "NLP Tools (NLTK, spaCy)",
      ],
    },
    {
      module: "Big Data & Tools",
      icon: Database,
      points: [
        "Introduction to Big Data",
        "Hadoop & Spark Basics",
        "Working with Large Datasets",
        "Data Storage & Management",
      ],
    },
    {
      module: "Data Science Project & Portfolio",
      icon: Shield,
      points: [
        "Real-world Datasets",
        "End-to-End Projects",
        "Model Deployment Basics",
        "Portfolio Development",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Data Science Course
      </Typography>

      {syllabus.map((module, index) => {
        const Icon = module.icon;
        return (
          <Card
            key={index}
            className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader className="flex items-center gap-3">
              <Icon size={28} className="text-purple-500" />
              <div>
                <CardTitle className="text-xl font-semibold">
                  {module.module}
                </CardTitle>
                <CardDescription>{module.points.length} Topics</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {module.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}

      <Box className="text-center mt-8">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => router.push("/letstalk")}
        >
          Talk to Expert
        </Button>
      </Box>
    </Box>
  );
}
