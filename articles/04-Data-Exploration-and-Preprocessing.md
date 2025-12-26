---
title: "04-Data Exploration and Preprocessing"
category: "data-mining"
date: "12-25-2025"
background_image: "/chapter-4/1.webp"
tags: ["ML"]
description: "This chapter guides to the essential steps required before applying machine learning algorithms"
readTime: "10 min read"
---
## 4.1-Introduction

![image](/chapter-4/2.webp)

Before applying any machine learning or deep learning algorithm, one of the most critical stages is **data exploration** and **preprocessing**

> **Garbage in, Garbage out:** captures the importance of this phase

**The consequences of poorly prepared data:**
  - The most sophisticated algorithms cannot perform well

**The benefits from  data  preparation:**
  - Ensures that models **learn meaningful patterns** rather than **noise** or **irrelevant correlations.**

> **Data preprocessing:** transforms raw, messy datasets into clean, structured, and machine-readable forms

> **Data exploration:** allows practitioners to **understand** the dataset’s characteristics, **detect** anomalies, **identify** patterns, and **select** the most appropriate preprocessing and modeling techniques

**The benefits from Data Exploration and Preprocessing:**
  - Lead to models that underperform due to bias, variance, noise, or redundant features

## 4.2-The Importance of Data Exploration 

![image](/chapter-4/3.webp)

> **Data exploration:** the process of analyzing datasets both **visually** and **statistically** to uncover patterns, anomalies, and correlations

**Data Exploration benefits:**
- **Understanding distributions:** Knowing whether a feature is normally **distributed**, **skewed**, or has **heavy tails** informs preprocessing decisions such as `normalization` or `transformation`.
- **Detecting outliers:** 
	- Extreme values can distort model predictions
	- Early detection helps determine whether to **remove**, **cap**, or **transform** them
- **Identifying correlations:** Highly correlated features may cause **redundancy** or **Multicollinearity**, which can affect algorithms like **linear regression**.
- **Revealing missing values:** Quantifying and understanding missingness guides appropriate imputation strategies.

> **Multicollinearity**: two or more input features in a regression model are highly correlated with each other. (mentioned again in chapter-7)

**Data exploration real world senario:**
In medical datasets, age may follow a near-normal distribution, whereas cholesterol or blood sugar levels could be skewed due to rare high values. Recognizing this helps in choosing Suitable scaling or transformation techniques.
## 4.3-Exploratory Data Analysis (EDA) with Python

![image](/chapter-4/4.webp)

**The need for `EDA` :** 
We can identify trends such as higher survival rates for women, missing age values, and **correlations between features** like class and survival.

## 4.4-Data Cleaning 

![image](/chapter-4/5.webp)

**Raw datasets are rarely perfect and often contain:**
- Missing values 
- Duplicates 
- Inconsistent formats
- Noise 

Cleaning ensures that datasets are **reliable**, **consistent**, **accurate** and **usable** for subsequent preprocessing.

![image](/chapter-4/6.webp)

---
### 4.4.1- Handling Missing Values

> **Removal:** Drop rows or columns with excessive missing values.

>**Imputation:** Replace missing values using **statistical methods** (`mean`, `median`, `mode`) or **Predictive models** ( `k-NN` imputation).

![image](/chapter-4/7.webp)

---
### 4.4.2-Removing duplicates

![image](/chapter-4/8.webp)

---
### 4.4.3-Standardizing Formats

> **Standardizing Formats:** Convert categorical text to lowercase or consistent format.

Standardize units (`kg` vs `lbs`) and date formats.

![image](/chapter-4/9.webp)
## 4.5-Feature Engineering

![image](/chapter-4/10.webp)

> **Feature engineering:** creating new meaningful variables (**features**) from raw data to improve model performance and interpretability

**Feature engineering techniques:**
- **Binning:** Convert continuous variables into discrete bins (**age groups:** child, adult, senior)
- **Encoding categorical variables:** Convert categories into numeric representations using `one-hot` or `label` encoding.
- **Polynomial features:** Create interaction terms (weight x height)

![image](/chapter-4/11.webp)

**Onde-hot encoding:**
![image](/chapter-4/12.webp)

**Advanced feature engineering** includes:
- Domain-specific transformations 
- Aggregations
- feature selection to reduce dimensionality
## 4.6-Feature scaling

>Scaling ensures that all features contribute equally.

**Feature scaling improves:** model convergence, especially for gradient-based optimization algorithms.

> **model convergence:** The model has reached a point where **it’s no longer changing in a meaningful way**.

**Popular algorithms that are sensitive to feature scaling:**
- Support Vector Machines (`SVM`)
- K-Nearest Neighbors (`k-NN`)
- Gradient-based models

> **Normalization (Min-Max Scaling):** Maps values to [0,1] range. 

> **Standardization (Z-score Scaling):** Converts features to have **mean** = 0 and **standard deviation** = 1.

## 4.7- Outlier Detection and Treatment

![image](/chapter-4/13.webp)

> **Outliers:** extreme values that deviate significantly from the majority of data and may represent **errors** or **rare events**

**Outlier handling techniques:**
- **Statistical methods:** Remove values outside **3 standard deviations**.
- **Visualization:** Use `boxplots` or `scatterplots`
- **Model-based detection:** Apply **Isolation Forest**, `DBSCAN`, or **Local Outlier Factor** (`LOF`).

**Why should we handle outliers?**
Handling outliers appropriately prevents models from being **skewed** or **overfitting anomalies.**
## 4.8-Handling Imbalanced Datasets

![image](/chapter-4/14.webp)

> **Imbalanced dataset:** some classes are underrepresented

**Fraud detection example:**
Fraud detection datasets often contain **99% non-fraudulent** transactions and **1% fraudulent ones.**

Addressing imbalance is crucial for accurate and fair predictions.

**Techniques to handle imbalance:**
- **Resampling:** Oversampling minority class (`SMOTE`) or undersampling majority class. (*explained in the next chapter*)
- **Class weighting:** Adjust the **loss function** to penalize **misclassification** of **minority classes more heavily**.
- **Synthetic Data Generation:** Create new realistic samples using techniques like `GANs`
## 4.9-Splitting Data into Training and Testing Sets

![image](/chapter-4/15.webp)

Used to evaluate model performance by splitting into **training and test sets** 80/20 split is used (*more details can be found in chapter-8*)

> **Training set:** Used to learn model parameters.

> **Testing set:** Used to evaluate model generalization to unseen data.

> **Validation set (optional):**  Used for hyperparameter tuning and preventing overfitting.
## 4.10-Dimensionality Reduction

![image](/chapter-4/16.webp)

**High-dimensional datasets problem:**
  - It may contain **redundant** or **irrelevant features**

> **Dimensionality Reduction:** simplifies datasets while retaining essential information

**Dimensionality Reduction techniques:**
- **Principal Component Analysis (`PCA`):** Projects data onto lower-dimensional space while **maximizing variance.**
- **`t-SNE`,`UMAP`:** **Non-linear techniques** for visualizing high-dimensional data.

**why we need dimensionality reduction:**
- Reduces computational cost 
- Improve model performance

![image](/chapter-4/17.webp)
## Summary 

![image](/chapter-4/18.webp)