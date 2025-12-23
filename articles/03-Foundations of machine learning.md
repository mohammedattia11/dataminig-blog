---
title: "03-Foundations of machine learning"
category: "data-mining"
date: "12-23-2025"
---
# 03-Foundations of machine learning
## 3.1-Introduction to machine learning

![[Pasted image 20251223002509.png]]

> dynamic subfield of Artificial Intelligence (AI) focused on Creating algorithms capable of learning patterns from data without being explicitly programmed.

ML not just about building predictive models—it is about enabling adaptive, intelligent systems capable of evolving with changing data and environments

*ML allows systems to improve automatically as they are exposed to more data -> This paradigm shift enables machines to tackle problems that are difficult to define with strict rules*

- **Understanding natural language (NLP)**
- **Recognizing objects in images and videos (computer vision)**
- **Predicting stock market trends or consumer behavior**

> [!info] Tom Mitchell, a pioneer in machine learning definition formalization
> A computer program is said to ***learn from experience (E)*** with ***respect to some class of tasks (T)*** and ***performance measure (P)*** if its ***performance at tasks in (T)***, as ***measured by (P)***, ***improves With experience (E)***.

***This is an example about last definition:** spam email classifier learns to distinguish spam from non-spam emails it ma miss classify many messages, as it analyzes thousands of labeled examples, its classification Accuracy improves over time.

## 3.2-Types of machine learning 

![[Pasted image 20251223003603.png]]
### 2.1-Supervised learning 

![[Pasted image 20251223003617.png]]

> learning from labeled data, The goal is to learn a mapping function (f(X)->Y) that predicts the output for Unseen inputs.

- *Classification*
- *Regression*

![[Pasted image 20251223003401.png]]

- ***Applications:**
	- Medical diagnosis
	- Fraud detection in banking
	- Customer churn prediction: refers to the situation when a customer stops using a company’s product or service over a certain period of time. In other words, it’s the loss of customers.
### 2.2-Unsupervised learning 

![[Pasted image 20251223004253.png]]

> works with unlabeled data, aiming to discover hidden structures

- ***Clustering:** Groups similar data points (Customer segmentation)
- ***Dimensionality Reduction:** Reduces the number of features while preserving essential information 
	- Principal Component Analysis (PCA) help visualize high-dimensional data and reduce computation.

Defining meaningful patterns without labeled data is difficult, and evaluation metrics are often Less straightforward than in supervised learning.

- **Applications:**
	- Market segmentation 
	- Anomaly detection
	- Data visualization
### 2.3-Reinforcement learning 

![[Pasted image 20251223004313.png]]

> inspired by behavioral psychology, agent interacts with an environment, making decisions that maximize cumulative rewards while avoiding penalties

**Particularly effective for sequential decision-making problems.**

- ***Core Components:** States, actions, transition probabilities, reward functions
- ***Policy:** Defines the agent’s strategy to maximize expected return.
- ***Value Functions:** Evaluate the expected reward of states or state-action pairs

**Applications:** (Robotics,Autonomous vehicles,Games(`AlphaGo`,`OpenAI Five`))
## 3.3-Core Components of a Machine Learning System

![[Pasted image 20251223004329.png]]

**well-designed ML system requires high-quality data, thoughtful feature engineering, robust models, and continuous monitoring post-deployment**

1. ***Dataset:** The raw input data, can be structured (tabular), semi-structured (XML, `JSON`), or unstructured (text, images, audio) High-quality datasets are crucial for robust models 
2. ***Features:** Variables that describe each instance
	1. *Feature engineering:* the process of creating meaningful features is often the most important determinant of model success
3. ***Model:** The mathematical function or algorithm that maps inputs to outputs (decision trees, linear regression, support vector machines, and neural networks)
4. ***Training Process:** Adjusting model parameters to minimize error using optimization techniques such as **gradient descent.**
5. ***Evaluation Metrics:** Measures of model performance.
	1. *classification:* accuracy, precision, recall, F1-score
	2. *regression:* Mean Squared Error (MSE), Root Mean Squared Error (RMSE)
6. ***Deployment:*** *Integrating the trained model into production environments*
## 3.4-The Bias-Variance Trade-off

![[Pasted image 20251223005005.png]]
> describes the relationship between model complexity and generalization ability.

***Bias:** Error due to overly simplistic assumptions, High bias causes `underfitting`, where The model cannot capture underlying patterns.

***Variance:** Error due to sensitivity to training data fluctuations,High variance causes `overfitting`, where the model memorizes training data instead of generalizing

![[Pasted image 20251223005349.png]]

goal is to find the sweet spot, where the model captures essential patterns without
`Overfitting` noise.

***A linear regression model on highly non-linear data may `underfit` (high bias).**

***A deep neural network trained on limited data may `overfit` (high variance)****
## 3.5-Python supervised vs unsupervised

![[Pasted image 20251223005532.png]]

---

![[Pasted image 20251223005543.png]]

### 3.5.1-Supervised Learning: Logistic Regression

### 3.5.2-Unsupervised Learning: K-Means Clustering

## 3.6-Challenges in Machine Learning

![[Pasted image 20251223005645.png]]

1. ***Data Quality:** Poor-quality data leads to poor models, solved by applying Data cleaning and preprocessing
2. ***Overfitting and Underfitting:** Striking the right balance between model complexity and generalization is difficult
3. ***Scalability:** Real-world datasets may have millions of records, requiring distributed computing or GPU acceleration.
4. ***Interpretability:**  Complex models (e.g., deep neural networks) are often black boxes, limiting trust and regulatory compliance.
5. ***Ethics and Bias:** models can unintentionally learn and replicate biases that already exist in the data they are trained on, which can lead to unfair or unethical outcomes زي مافيه موديلز بتدي معلومات بتكون فصف اسرائيل مثلا
6. ***Dynamic Environments:** Models may need continuous learning to adapt to changing

**These challenges can be solved using techniques like (feature selection,cross-validation,regularization, explainable AI)**

## 3.7-Section 3.7: Applications of Machine Learning 

![[Pasted image 20251223010447.png]]
## 3.8-Practical Workflow of Machine Learning Projects

![[Pasted image 20251223010321.png]]

**ensures reproducible, reliable, and effective ML solutions.**

## 3.9-Summary

***Machine Learning enables systems to learn from data without explicit programming.**

***Types: Supervised, unsupervised, and reinforcement learning address different problem settings**

***Core Components: Dataset, features, model, training, evaluation, and deployment are Essential for building ML systems.**

***Bias-Variance Trade-off: Balancing underfitting and overfitting is critical for
Generalization.**

***Challenges: Data quality, scalability, interpretability, ethics, and dynamic environments**

***Applications: Healthcare, finance, e-commerce, autonomous systems, NLP, and beyond.**

## Problem-Solving

