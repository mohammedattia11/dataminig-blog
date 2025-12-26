---
title: "7.1-Model Selection in Machine Learning part-2"
category: "data-mining"
date: "12-23-2025"
background_image: "/chapter-7-part-2/5.webp"
tags: ["ML","DL"]
description: "This chapter focuses on ensuring that machine learning models generalize effectively to new, unseen data rather than simply memorizing their training sets"
readTime: "20 min read"
---
## 7.5-Probabilistic Models

![image](/chapter-7-part-2/1.webp)

**How Probabilistic models such as Naïve Bayes works:**
- Based on (`Bayes’`) theorem this model provides a principled way to update probabilities based on **evidence**
- `Naïve Bayes` assumes independence among features (rarely true in practice)  but surprisingly, this assumption often works well in **high-dimensional** settings such as **text classification**

**Spam Detection example:**
The presence of certain words like `free` or `win` strongly influences the probability of a **message being spam**, even if words are not truly independent

**Naïve Bayes classifiers advantages**
- Extremely fast
- Require little training data
- scale well to large feature spaces

**Ideal for baseline models** 

**Naïve Bayes classifiers disadvantages**
- Limit accuracy when features interact strongly and the reason for this **simplistic independence assumption**
- **Perform worse** than modern ensemble or deep learning methods on **complex datasets.**
![image](/chapter-7-part-2/2.webp)

![image](/chapter-7-part-2/3.webp)

## 7.6-Clustering Models 

Clustering is unsupervised learning, used to identify hidden structures.
### 7.6.1-K-Means

> one of the most popular clustering algorithms, aiming to partition data into k groups by minimizing the distance of points to their nearest cluster center

**K-Means advantages:**
- Simple
- Efficient

**K-Means disadvantages:**
- Requires pre defining the number of clusters
- Sensitive to initialization
- performs poorly when clusters are not spherical or evenly sized

**K-Means use cases:**
- Customer segmentation
- Image compression
- Anomaly detection

![image](/chapter-7-part-2/4.webp)

### 7.6.2-Hierarchical Clustering 

**How Hierarchical Clustering works:**
- Builds a tree-like hierarchy of clusters
	- either by starting with individual points and merging them (`agglomerative`)
	- by starting with one cluster and recursively splitting it (`divisive`)

**Advantages:**
- Produces a `dendrogram` that provides deeper insights into the data’s structures 

> **dendrogram:** tree-like diagram used to show how data points are grouped step by step in hierarchical clustering

**disadvantages**
-  it is computationally expensive on large datasets.

## 7.7-Neural Networks and Deep Learning

![image](/chapter-7-part-2/5.webp)

> Neural networks: consist of layers of interconnected nodes or **neurons** that apply nonlinear transformations to inputs

Deep learning models can learn hierarchical representations of data **by stacking multiple layers**

**How image recognition works:**
- The first layers may detect edges
- Subsequent layers detect shapes
- Deeper layers identify objects

**Power of deep learning:**
- It can learn complex, nonlinear functions directly from raw data 
-  eliminating the need for manual feature engineering

**Deep learning use cases:**
- Speech recognition 
- Natural language processing `NLP`
- Computer vision 

**Neural networks challenges:**
- They require massive datasets 
- High computational resources 
- Careful tuning of architectures and hyper parameters
- Hard to interpret.

Frameworks like `TensorFlow`, `PyTorch` have democratized deep learning, enabling practitioners to **design**, **train**, and **deploy** neural networks with relative ease

**Deep networks consist of layers of neurons with nonlinear activation functions. Each layer Extracts hierarchical features.**

![image](/chapter-7-part-2/6.webp)

## 7.8-Model Evaluation Techniques

Simple **train-test splits** are insufficient for assessing **generalization** 

**Cross-validation** is the gold standard (more reliable estimate of performance)

**How cross-validation works:**
By dividing the data into k folds and repeatedly training and validating on different folds

Model selection also involves **hyper parameter tuning** 

**Grid search:** exhaustively evaluates all parameter combinations
**Random search samples parameter:** random search samples parameter + often yielding near-optimal results at lower computational cost
**Bayesian optimization:** more sophisticated, build probabilistic models of the objective function and balance exploration with exploitation to Identify promising hyper parameters efficiently.

**Selection process factors examples:**
- **real-time systems:** inference speed may outweigh small accuracy gains
- **healthcare:** interpretability may be prioritized over complex black-box models

### 7.8.1-Cross-Validation

![image](/chapter-7-part-2/7.webp)
- **k-Fold CV:** Split data into k folds, train on k-1, validate on the remaining fold. Repeat k Times.
- Reduces bias in performance estimation.

### 7.8.2-Hyper parameter Tuning 

![image](/chapter-7-part-2/8.webp)

- **Grid Search:** Exhaustive search over parameter combinations
- **Random Search:** Random sampling of parameters.
- **Bayesian Optimization:** Probabilistic model to find optimal parameters efficiently.

![image](/chapter-7-part-2/9.webp)

### 7.8.3-Evaluation Metrics

![image](/chapter-7-part-2/10.webp)

- **Classification:** `Accuracy`, `Precision`, `Recall`, `F1-score`, `ROC-AUC`.
- **Regression:** `MSE`, `RMSE`, `R²`.
- **Clustering:** Silhouette score, Davies-Bouldin index.

## 7.9-Bias-Variance Trade off

![image](/chapter-7-part-2/11.webp)

**Bias:** Error from oversimplified models (underfitting). 
**Variance:** Error from overly complex models (overfitting).
**Goal:** Minimize expected error:
## 7.10-Practical Guidelines

1. Start with **simple models**, move to complex models if necessary.
2. Use **cross-validation** to estimate generalization
3. Consider **interpretability** in regulated industries.
4. Monitor **bias-variance trade off**.
5. Combine models via **ensembles** for improved robustness.

## 7.11-Model Comparison Table

![image](/chapter-7-part-2/12.webp)

![image](/chapter-7-part-2/13.webp)

