---
title: "06-Feature Selection and Dimensionality Reduction"
category: "data-mining"
date: "12-23-2025"
background_image: "/chapter-6/1.webp"
tags: ["ML"]
description: "This chapter addresses the challenges associated with high-dimensional datasets, such as the risk of overfitting, increased computational costs"
readTime: "15 min read"
---
![image](/chapter-6/1.webp)

While it may seem that having more features improves Model performance, high-dimensional data introduces challenges such as **overfitting**, **increased Computational cost**, and **reduced interpretability**.

![image](/chapter-6/2.webp)

**Two complementary strategies to tackle these issues:**
- **Feature Selection:** Choosing the most relevant subset of features and discarding irrelevant or redundant ones
- **Dimensionality Reduction:** Transforming data into a lower-dimensional space while preserving essential information.

> Both strategies aim to improve model **accuracy**, **reduce overfitting**, and **enhance Computational efficiency**.


## 6.1-Importance of Feature Selection

![image](/chapter-6/3.webp)

Feature selection ensures that only **meaningful attributes** are used to build predictive models. Too **many irrelevant** or **redundant features** can lead to the **curse of dimensionality**

- Distance-based algorithms (`k-NN`) fail to generalize because distances in **high- dimensional space lose significance**
- Optimization-based models (`regression`) struggle with **computation** and risk **Overfitting**.

- **Feature selection benefits:**
	- **Improves model accuracy** by removing noisy or irrelevant features
	- **Reduces training time** since fewer features require computation
	- **Prevents overfitting** by eliminating irrelevant patterns
	- **Enhances interpretability** because fewer features make results easier to understand.

**Example:** a dataset for predicting customer churn has 100 features, but **only 10 are truly predictive**. Using all features may lead to **overfitting**, while selecting the top 10 features Improves **generalization** and **reduces computation**.

## 6.2-Methods of Feature Selection

- **Filter**
- **Wrapper**
- **Embedded**

### Filter Methods

![image](/chapter-6/4.webp)

>  rely on statistical measures to rank and select features independently, They are **fast**, **scalable**, and **easy to interpret**

**Common Techniques:**
- **Correlation Coefficient (`Pearson’s r`):** Measures linear relationships between numerical features.
- **Chi-Square Test:** Evaluates dependency between categorical features and target variable.
- **Mutual Information:** Measures non-linear relationships between features and target

![image](/chapter-6/5.webp)

- **preferred:** Features with high correlation with the target 
- **redundant:** highly correlated features among themselves

---
### Wrapper and Embedded Methods 

![image](/chapter-6/6.webp)

**How Wrapper Methods work:**
1. Evaluate subsets of features using a machine learning models 
2. Select the set that maximizes predictive performance

**They are computationally intensive but often produce better results than filter methods.**

**Techniques:**
- **Recursive Feature Elimination (`RFE`):** Iteratively removes the least important features.
- **Forward Selection:** Starts with no features and adds one at a time based on performance.
- **Backward Elimination:** Starts with all features and removes one at a time.

![image](/chapter-6/7.webp)

Features ranked 1 are the most important; higher ranks indicate less relevance.

---

**How Embedded methods works:**
1. Perform feature selection during the **model training process.**
2. Combining the advantages of filters and wrappers

**Techniques:**
- **Lasso Regression (`L1 Regularization`):** Shrinks coefficients of less important features to zero.
- **Decision Tree-based Models:** Compute feature importance during training (`Random Forest`,`XGBoost`)

![image](/chapter-6/8.webp)
Features with coefficients close to zero are less influential and can be discarded.

## 6.3-Dimensionality Reduction 

![image](/chapter-6/9.webp)

> Dimensionality reduction transforms the feature space into a **smaller set** of new features that **retain most of the original information**, in the other hand **feature selection** works by removing features 

**Effective for very high-dimensional datasets.**

### 6.3.1-Principal Component Analysis (PCA)

![image](/chapter-6/10.webp)

`PCA` is **unsupervised** and does not consider target labels.

**How `PCA` works:**
1. Converts high-dimensional data onto **orthogonal axes**(independent) called principal components
2. First component captures the **maximum variance**
3. The second captures the **next highest variance**
4. And so on

High dimensional datasets (**many features**) each feature represent a 1 dimensional so if the data has 50 feature -> 50 dimensional and humans can only easily visualize up to **3 dimensions** so this makes it hard to understand

In our case each axis considered a **principal component** and no axis repeats information from another axis (**uncorrelated**)

These are **new axes (principal component)**, not the original features.

> “High-dimensional data onto orthogonal axes called principal components”

- `PCA` **rotates the data** into a new coordinate system
- The new axes are:
	- Independent (orthogonal)
	- Ranked by how much information they keep
	- Reduce dimensions **without losing much information**

**Goal:** Reduce dimensionality while preserving variance.

### 6.3.2-Linear Discriminant Analysis (LDA)

![image](/chapter-6/11.webp)

`LDA` is a **supervised** dimensionality reduction method seeks to **maximize class separability** by **projecting data onto a lower-dimensional space**.

**Goal:** Reduce dimensions while enhancing class discrimination.

 > LDA is effective in classification tasks with labeled data, such as **handwriting Recognition** or **medical diagnosis**.
 
### 6.3.3-t-distributed Stochastic Neighbor Embedding(t-SNE)

![image](/chapter-6/12.webp)

> non-linear technique for reducing high-dimensional data to 2D or 3D for visualization

Preserves **local structure** and highlights clusters.

`t-SNE` is primarily used for **visual exploration of complex datasets** rather than
Predictive modeling.

## 6.4-Comparing Feature Selection and Dimensionality Reduction

![image](/chapter-6/13.webp)

Use Feature Selection when **interpretability is important** 
Use dimensionality reduction When dataset is very high-dimensional (too many features)

## 6.5-Practical Guidelines

1. **Standardize features** before applying `PCA` or `LDA` to ensure fair scaling.
2. Use **filter methods** for quick elimination of irrelevant features.
3. **Embedded methods** like `Lasso` or `tree-based` models are suitable for **predictive Modeling**.
4. Use `t-SNE` or `UMAP` for visualizing high-dimensional data.
5. **Combine both approaches** when working with extremely large datasets for **optimal Performance.**

## 6.6-Case Study (both techniques )

![image](/chapter-6/14.webp)

1. **Filter method:** Remove features with low correlation with the target.
2. **Wrapper method:** Apply `RFE` with a **random forest classifier** to select the top 30 features.
3. **PCA:** Reduce the selected features to 10 principal components to improve Model speed.
4. **Model training:** Train a classifier on the reduced dataset.

> This hybrid approach reduces overfitting, increases accuracy, and speeds up Computation