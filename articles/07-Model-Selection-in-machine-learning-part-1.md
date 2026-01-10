---
title: "07-Model Selection in Machine Learning part-1"
category: "data-mining"
background_image: "/chapter-7-part-1/1.webp"
tags: ["ML","DL"]
description: "This chapter guides you through the critical process of choosing the most appropriate algorithm to ensure models generalize well to unseen data rather than just memorizing training sets"
readTime: "25 min read"
---
![image](/chapter-7-part-1/1.webp)

**Model Selection Challenge:** 
Different models embody different theoretical assumptions, biases, and computational strategies, which means that the “best” model is not universal but instead highly dependent on the **nature of the dataset**, **the problem at hand**, and **the intended use of the Predictions**.

**Different model use cases:**
- **Financial analyst** may prioritize model **interpretability** when predicting credit defaults
- **computer vision** prioritize **accuracy** and **robustness**, even if the model behaves like a “**black box.**”

**The Goal:**
Is to strike the right balance between **predictive power**, **computational efficiency**, and **Interpretability**, all while ensuring that the chosen model **generalizes well to unseen data.**

![image](/chapter-7-part-1/2.webp)

**The problems with choosing inappropriate model:**
- A model with high bias, such as **linear regression** applied to nonlinear data, may **oversimplify** and **fail to capture important patterns**
- Highly complex model such as a **deep neural network** can have low bias but high variance, meaning it **performs well on the training data but fails to generalize**

**Model Selection techniques to solve these problems:**
- Cross-validation
- Hyper parameter tuning
- Theoretical understanding of how models behave under different conditions
- Under standing model ( `assumptions`, `strengths`, `weaknesses`, and `tuning strategies`)

> Generalization: choosing a model that performs well not only on the training data but also on unseen, real-world data

- High-bias models (`linear regression` on nonlinear data) **underfit**, **missing important patterns.**
- High-variance models (e.g., `deep neural networks` with limited data) **overfit**, **capturing Noise** as if it were signal.

## 7.2-Linear Models 

![image](/chapter-7-part-1/3.webp)

**Why we would choose liner models:**
- Simplicity
- Interpretability
- Computational efficiency

### 7.2.1-Linear Regression 

![image](/chapter-7-part-1/4.webp)

**How linear regression works:**
assumes that the relationship between the independent variables and the
Dependent variable can be described as a straight line in a multidimensional space

**Goal:**
Linear regression tries to draw the best straight line that is as close as possible to all the data points.

**Advantages:**
- Simple
- Effective when relationships are approximately linear

**Use cases:**
- Predicting housing prices based on square footage
- Advertising expenditure based on revenue

**Limitations:**
- Struggles with nonlinear data, outliers
- Sensitive to multicollinearity
- assumes homoscedasticity and independence of errors

> **Multicollinearity**: two or more input features in a regression model are highly correlated with each other.

>**Homoscedasticity**: means the errors have the same spread everywhere, errors don’t get bigger or smaller as predictions increase

> **independence of errors**: errors should not be related to each other,one mistake should **not influence** the next mistake

![image](/chapter-7-part-1/5.webp)

The model is trained by minimizing the residual sum of squares (`RSS`):

![image](/chapter-7-part-1/6.webp)

**Linear regression is interpretable:**
Each coefficient represents the **expected change in the target** for a unit change in that feature

![image](/chapter-7-part-1/7.webp)

---
### 7.2.2-Logistic Regression

![image](/chapter-7-part-1/8.webp)

**Logistic regression extends the concept of linear models to classification tasks.**
Instead of predicting continuous outcomes, logistic regression maps inputs to probabilities using the logistic `sigmoid` function

**Logistic regression advantages:**
- From previous explanation model can estimate the likelihood that a given input belongs to one of two categories
- Probabilistic interpretation.
- Coefficients indicate feature impact.
- Computationally efficient.

**Use cases:**
- Spam detection
- Disease diagnosis
- Customer churn prediction

**logistic regression is in fact a classification algorithm, not a regression technique**

**The reason for logistic regression interpretability:**
Coefficients provide direct insights into how features influence the probability of belonging to a class

**Logistic regression challenges and how it can be solved:**
- It assumes linear separability, and when classes are not linearly separable, its performance declines 
- Poor performance with complex, nonlinear patterns.
- Solution by doing feature engineering or transform features into appropriately format.

![image](/chapter-7-part-1/9.webp)

## 7.3-Tree-Based Models 

![image](/chapter-7-part-1/10.webp)

Tree-based models provide **non-linear decision boundaries** and are interpretable for tabular datasets.
### 7.3.1-Decision Trees 

![image](/chapter-7-part-1/11.webp)

Decision trees offer a non-linear approach to learning

**How decision works:**
- Instead of fitting coefficients 
- Trees recursively split the data into subsets based on feature thresholds
	- Splits are determined to **maximize information gain** or **minimize impurity** (`Gini` or `Entropy`).
- Forming a tree structure of if-else rules

This makes them **highly interpretable** and capable of handling both **categorical** and **numerical data**

**Ex:** decision tree predicting loan approvals may split first on **income**, then on **age**, then on **credit history** which made it very simple for stakeholders to understand why a certain decision was made

**Advantages:**
- Handles both numerical and categorical data.
- Easy to interpret and visualize.
**Limitations:**
- Prone to overfitting (especially when grown deep)
- Sensitive to small data changes.

![image](/chapter-7-part-1/12.webp)

### 7.3.2-Ensemble Methods: Random Forests and Gradient Boosting

The main goal from developing **Random Forests** and **Gradient Boosting** is to address overfitting 

> **Random Forests:**  is essentially a collection of decision trees, each trained on bootstrapped samples of the data and random subsets of features

**Bootstrapped samples:** You make many “fake” datasets by randomly reusing rows from the original dataset.

![image](/chapter-7-part-1/13.webp)

**Combining the power of random forests and gradient boosting:**
- By aggregating their predictions through **voting** or **averaging**
- Random Forests reduce variance while preserving predictive power.
- Gradient Boosting builds trees sequentially where each new tree corrects the mistakes of the previous ensemble

For structured data tasks modern implementations such as (`XGBoost`,`LightGBM`,`LightGBM`) become industry standards and consistently winning machine learning competitions due to their **high accuracy**, **flexibility**, and **robustness** to noisy data

**The main problem with these models:**
- Sacrifice interpretability compared to single decision trees
- Complexity demands

Using **hyper parameter** tuning to avoid overfitting.

- **Random Forests :**
	- Aggregates multiple decision trees trained on bootstrap samples 
	- Reduces variance and overfitting.
- **Gradient Boosting:**
	- Sequentially builds trees to correct previous errors
	- High accuracy but complex.
	- (`XGBoost`,`LightGBM`,`CatBoost`)

![image](/chapter-7-part-1/14.webp)

## 7.4-Support Vector Machines (SVM)

![image](/chapter-7-part-1/15.webp)

**SVM approaches to classification:**
- They aim to find the optimal hyperplane that separates classes with the maximum margin, meaning the boundary that is as far as possible from data points of both Classes.
- This margin maximization makes `SVMs` robust to **outliers**, as only support vectors influence the decision rule

**SVM kernel utilization benefits:** allows them to project data into higher dimensional spaces where classes that are not linearly **separable** can be **separated** by a linear hyperplane in the transformed space

**Common kernels:**
- Polynomial
- Radial basis function (`RBF`)
- Sigmoid

Each enabling the model to Handle different types of data distributions.

**Advantages:**
- Effective for high-dimensional data.
- Robust to outliers with soft margins.

**Limitations:**
- Computationally expensive on large datasets.
- Kernel and tuning hyper parameters choice is critical.
	- C (regularization)
	- Gamma (kernel influence)
**When to choose SVM:**
SVMs is a strong choice for medium-sized datasets in tasks such as **text classification**, **handwriting recognition**, and **bioinformatics.**

**SVMs** aim to **maximize the margin between classes**. They can handle non-linear separability using **kernel functions.**

![image](/chapter-7-part-1/16.webp)