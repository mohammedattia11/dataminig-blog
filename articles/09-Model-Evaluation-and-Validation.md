---
title: "08-Model Evaluation and Validation"
category: "data-mining"
background_image: "/chapter-8/1.webp"
tags: ["ML"]
description: "This chapter guides you through the critical process of choosing the most appropriate algorithm to ensure models generalize well to unseen data rather than just memorizing training sets"
readTime: "17 min read"
---
![image](/chapter-8/2.webp)

**Success of a model is not measured by its performance on the training set, it is determined by its ability to generalize to new examples**

![image](/chapter-8/3.webp)

**Overfitted:** model that performs perfectly on training data but poorly on validation or test data
**Unserfitting:** when a model is too simple to capture significant trends,resulting in poor performance across all datasets

**Evaluating model:**
- Choosing appropriate metrics 
- Designing robust validation schemes 
- Applying statistical rigor to quantify performance

**Misjudging a model's performance can lead to:**
- Systems that fail in production
-  potentially causing financial losses
- Reputation damage
-  safety hazards

## 8.2-The Importance of Evaluation Metrics 

![image](/chapter-8/4.webp)

**Evaluating classification tasks problem:**
- **Accuracy** is often cited first, but it can be **misleading**, especially in imbalanced datasets
- In fraud detection, if only 1% of transactions are fraudulent, a naive model predicting “not fraud” for all cases achieves 99% accuracy
- So it fails entirely at detecting fraud 

![image](/chapter-8/5.webp)

**Evaluation metrics:**
- **Precision:** measures the proportion of correctly predicted positive instances out of all predicted positives **High precision indicates low false positive rates.**
- **Recall:** measures the proportion of actual positive instances correctly identified, high recall ensures that few positive instances are missed.
- `F1-score:` is the harmonic mean of precision and recall, balancing the trade-off between false positives and false negatives.

In **regression tasks**, different metrics are needed due to the **continuous nature of predictions.**

![image](/chapter-8/6.webp)

**Common regression evaluation metrics:**
- **Mean Squared Error (`MSE`):** Penalizes larger deviations more heavily
- **Root Mean Squared Error (`RMSE`):** Provides error in the same units as the predicted variable.
- **Mean Absolute Error (`MAE`):** Treats all deviations equally, robust to outliers.
- **R-squared (Coefficient of Determination):** Indicates the proportion of variance in the dependent variable explained by the model.

Choosing the right metric depends on the **problem’s context** and **business objectives**, so it is normal to minimizing false negatives (**high recall**) may be more critical than overall **accuracy**, as In **medical diagnosis** or **security applications**.

## 8.3-Overfitting and Underfitting 

**This part has been covered many times in previous chapters and nothing new has been introduced in this chapter so if you have problem with understanding it check the previous chapters!!**

## 8.4-Validation Strategies

![image](/chapter-8/7.webp)

> Validation ensures that models are tested on data not used in training

### 8.4.1-Holdout Validation 

![image](/chapter-8/8.webp)

> **Simplest one**, split the dataset into training and test sets. Typically, 70-80% of the data is used for training, and the remaining 20-30% for testing

**Problem:**
A single split may yield biased estimates if the partition is unrepresentative.

### 8.4.2- K-Fold Cross-Validation

![image](/chapter-8/9.webp)

**How K-Fold reduces the variance:**
- K-Fold divides data into k subsets (folds)
- Each fold is used once as a validation set 
- The remaining folds serve as training data 
- The average performance across folds provides a more reliable estimate 

**Stratified k-fold:** ensures that class distributions remain consistent across folds ( **essential for imbalanced classification problems**)

### 8.4.3-Time-Series Validation 

![image](/chapter-8/10.webp)

**How `rolling window validation` or `walk-forward validation` works with time-dependent data:**
- They preserve temporal order
- Avoiding leakage of future information into the training set
- Models are evaluated on progressively future subsets to mimic real-world prediction scenarios.

### 8.4.4- Nested Cross-Validation 

**Nested cross-validation is employed when hyper parameter tuning is required**

**How it works:**
- The outer loop evaluates model performance 
- The inner loop searches for optimal hyper parameters 

This approach prevents **over-optimistic performance** estimates due to **repeated training on the same Validation data.**

## 8.5-Model Comparison and Statistical Testing

![image](/chapter-8/11.webp)

When multiple models are candidate solutions, it is not enough to simply compare metric values, **Statistical testing** ensures observed differences are significant.

- **Paired t-test:** Compares two models’ performance across multiple folds or datasets, assuming normality.
- **`Wilcoxon` signed-rank test:**  A non-parametric alternative for small samples or non-normal distributions.

**Why would we need learning curves:**
Because learning curves provide visual insight into model behavior with increasing training data

## 8.6- The Misleading Nature of Accuracy 

![image](/chapter-8/12.webp)

**Full code version** 

![image](/chapter-8/13.webp)

This example illustrates why accuracy alone may be misleading, Despite moderate overall `accuracy`, `precision` and `recall` reveal whether the model can effectively detect the minority class, which is critical in imbalanced problems.

## 8.7-Beyond Standard Metrics

The next evaluation called **multidimensional,** balancing statistical rigor with practical performance constraints.

**In real-world applications, evaluation goes beyond traditional metrics.**
- **Recommendation systems:** Use metrics such as Mean Average Precision (`MAP`) or normalized Discounted Cumulative Gain (`NDCG`) to evaluate ranking quality.
- **Probabilistic models:** Metrics like `Brier score` and `log-likelihood` assess the calibration of predicted probabilities.
- **Deployment considerations:** `Inference speed`, `memory consumption`, `energy efficiency` are crucial for mobile or embedded systems.

## 8.8-Best Practices for Model Evaluation

![image](/chapter-8/14.webp)

1. Always evaluate models on **unseen data** using robust validation strategies.
2. Select metrics aligned with the **problem domain** and **business objectives**
3. Use **cross-validation** to reduce variance in estimates
4. Monitor **learning curves** for signs of underfitting or overfitting.
5. Apply **statistical testing** when comparing models to ensure differences are significant.
6. Consider **practical constraints**, including `computation`, `latency`, and `interpretability`.

![image](/chapter-8/15.webp)