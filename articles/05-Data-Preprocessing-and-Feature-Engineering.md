---
title: "05-Data Preprocessing and Feature Engineering"
category: "data-mining"
date: "12-23-2025"
background_image: "/chapter-5/3.png"
tags: ["ML"]
---
![image](/chapter-5/1.png)

High quality data is the backbone for accurate and reliable models

Raw datasets from real-world sources are rarely perfect because it contains missing values, duplicates,  inconsistencies, noise, or irrelevant information.

**Garbage in, Garbage out (GIGO):** Without proper preprocessing, even the most advanced models cannot perform effectively

## 5.1-Introduction to Data Preprocessing 

![image](/chapter-5/2.png)

> **Data Preprocessing :** transforms raw data into a clean, structured, and machine-readable format

- **Data Preprocessing Stages:**
	- Handling missing data effectively.
	- Removing noise and outliers.
	- Encoding categorical variables for numerical models.
	- Scaling and normalizing features.
	- Balancing datasets for classification problems.
	- Splitting data into training, validation, and test sets.

Machine learning models learn patterns from data. If the input data is incomplete, inconsistent, or noisy, the learned patterns will be misleading, Preprocessing becomes the solution for out problem ensuring that the model receives Meaningful and high-quality data, maximizing predictive performance

## 5.2-Handling Missing Data 

![image](/chapter-5/3.png)

**Why even missing data exist ?**
System errors, incomplete surveys, or transmission failures.

**What is the benefit from handling missing values?**
Handling missing data prevents biases and ensures models are trained on complete datasets

### Stratgies 
- **Deletion Methods:**
	- Drop rows or columns with missing values (Useful when missing data is minimal.)
- **Imputation Methods:**
	- **Mean/Median/Mode Imputation:** Replace missing **numerical values** with the mean or median, **categorical values**, use the mode
	- **Forward or Backward Fill:** Propagate previous or next value in time series.
	- **Predictive Imputation:*** Use machine learning models to predict missing values.
### Python Code

![image](/chapter-5/4.png)

***In categorical values replace its values with Unknown***

## 5.3-Detecting and Handling Outliers 

![image](/chapter-5/5.png)

>  extreme values that differ significantly from the majority of the data 

**Why outliers happen?**
Because measurement errors, data entry errors, or rare events.

### Outliers solutions ?
- **Detection Techniques:**
  - **Z-score Method:** Flag data points beyond ±3 *standard deviations*
  - **Interquartile Range (IQR):** Values below Q1 - 1.5IQR or above Q3 + 1.5IQR are Considered outliers.
  - **Visualization:** ***Boxplots*** or ***scatter plots*** help visually detect anomalies.

- **Handling Outliers:**

  - **Removal:** Drop extreme values if they are errors.
  - **Transformation:** Apply ***log*** or ***square root transformation*** to reduce skew.
  - **Capping:** Clip extreme values to a threshold.
### Python Code 

![image](/chapter-5/6.png)
## 5.4-Encoding Categorical Variables 

![image](/chapter-5/7.png)
**Why we need encoding?**
Because many algorithms work only with *numeric data*. Therefore, categorical variables must be converted into *numeric representations*

- **Encoding techniques :**
	- **Label encoding:** Assigns integer labels to categories.
	- **One-hot encoding:** Creates a binary column for each category.
	- **Target Encoding:** Replaces a category with the mean of the target variable

![image](/chapter-5/8.png)

***Label encoding is suitable for ordinal data Since the data has a natural sequence, using numbers like 0, 1, and 2 preserves that relationship The model can learn that "2" (Excellent) is "greater than" "0" (Poor).***

**Ordinal data:** categories that follow a logical order or hierarchy (High School < Bachelor's < Master's)

***One-hot encoding is preferred for nominal data to avoid implicit ordering***

**implicit ordering:** If you used Label Encoding for colors (Red=0, Blue=1, Green=2), the model might mistakenly assume that Green (2) is "twice as much" as Blue (1), or that Blue is "higher" than Red

**Nominal data:** consists of categories that are distinct but have no inherent order (colors, cites)

## 5.5-Feature Scaling and Normalization

![image](/chapter-5/9.png)

***Scaling ensures fair contribution of features and improves model convergence***
### Normalization python code 

![image](/chapter-5/10.png)
![image](/chapter-5/11.png)

## 5.6-Feature Engineering

![image](/chapter-5/12.png)

***Feature engineering is about creating a new features that enhance the model accuracy,interpretability,predictive power***

## 5.7-Handling imbalanced datasets 

![image](/chapter-5/13.png)
***In classification problems, imbalanced datasets—where one class dominates—can bias models.***
بمعني ان الموديل يكون متحيز ل class اكتر من الباقي لان وانا بديله ال dataset to train on it اديته data عن ال class ده اكتر من الباقي فهنا بيحصل bias تحيز 

Balancing classes ensures fair model performance and improves metrics like precision and Recall.

### imbalanced dataset explained 
Imagine I give you a test to see if you can tell the difference between a **Cat** and a **Dragon**.
- I show you **99 photos of Cats**.
- I show you **1 photo of a Dragon**.
If you want to get the highest grade possible without actually studying, what would you do? You would simply say **"It's a Cat"** for every single photo. You would be **99% correct**, but you still have no idea what a dragon looks like.

### Common examples 

- **Fraud Detection:** 99.9% of credit card transactions are legitimate; only 0.1% are fraudulent.

- **Medical Diagnosis:** In a screening for a rare disease, 99.5% of patients may be healthy.

- **Spam Filtering:** Most emails are "Ham" (wanted), while only a small fraction are "Spam."

### Strategies

- **Data-Level: Resampling**
  - **Oversampling:** You duplicate examples from the minority class.
  This can lead to **overfitting** because the model sees the exact same minority examples repeatedly.
  - **Undersampling:** You remove examples from the majority class to match the minority class.

  - **SMOTE (Synthetic Minority Over-sampling Technique):** Instead of just duplicating data, SMOTE creates _new, synthetic_ examples by looking at the "neighbors" of existing minority points and creating data in between them.
- **Algorithm-Level: Adjustments**
  - **Class Weights:** You tell the model that the minority class is "more important." For example, you can penalize the model 10x more for missing a "Fraud" case than for misclassifying a "Legitimate" one.

## 5.8-Splitting Data into (Training, validation, test sets)

![image](/chapter-5/14.png)

***Proper splitting ensures that model evaluation is unbiased and reflects real-world performance.***

**random_state (seed):** ensures that the "random" shuffling of your data happens in the exact same way every time you run your code 
- **Without `random_state`:** Every time you click "Run," the computer picks different rows for your training set. This means your model's accuracy might change slightly (e.g., 85% now, 82% later) just because of the luck of the draw.
    
- **With `random_state=42`:** The computer uses a specific pattern to shuffle. No matter how many times you run it, the "Training" rows and "Testing" rows will be exactly the same.

## Summary 

![image](/chapter-5/15.png)

**Data Preprocessing Techniques**

- **Cleaning** and handling missing data using imputation or deletion
- Detecting and handling **outliers** to avoid biased models.
- Converting **categorical variables** into numeric formats.
- Applying **scaling and normalization** to ensure fair feature contributions
- **Creating new features** via binning, polynomial transformations, or domain knowledge.
- Addressing **imbalanced datasets** to improve classification performance
- Splitting datasets into **training**, **validation**, and **test sets** for unbiased evaluation

## Problem Solving

### Given a dataset with missing values in both numerical and categorical columns, describe step by step how you would preprocess the dataset.



---
### You find extreme values in a dataset of monthly incomes. How would you decide whether to remove, transform, or keep these outliers?



---
### Explain with an example how feature scaling can affect a K-Nearest Neighbors classifier. Create a Python snippet to encode the categorical variable "City" with values "Cairo, Paris, New York" using one-hot encoding.


---
### A dataset has a highly skewed column "Transaction_Amount". Which transformation Technique would you apply and why?

