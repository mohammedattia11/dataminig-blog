---
title: "02-Data Mining Techniques and Processes"
category: "data-mining"
date: "12-23-2025"
background_image: "/chapter-2/13.png"
tags: ["Data Mining"]
---
# 02-Data Mining Techniques and Processes
## 2.1-Introduction to Data Mining 

> [!info] what is Data Mining?
> crucial process in the modern data-driven world, allowing organizations to extract actionable insights from large, complex datasets

Combines *statistics*, *machine Learning*, and *artificial intelligence* techniques to *discover patterns*, *correlations*, *trends*, and *anomalies* that are *not immediately obvious*

- **What is the difference between traditional querying methods and data mining?**
	- querying methods retrieve information directly based on specific questions
		- *What were the total sales last month*
	- data mining seeks to uncover hidden Knowledge that can guide strategic decision-making.
		- *Customers who purchase product A have a 60% probability of also buying product B within the same week*
### Industries uses data mining:

![iamge](/chapter-2/1.png)
- **Business Intelligence:** 
	- Identifying profitable customer segments
	- optimizing marketing Campaigns.
		- قدرت من خلالها اصنف العملاء اللي بيقدمولي مكسب واحسن من الحملات الاعلانيه 
- **Healthcare:**
	- Predicting disease outbreaks
	- patient risk stratification
	- treatment Effectiveness analysis.
- **Banking and Finance:**
	- Detecting fraud 
	- evaluating credit risks 
	- forecasting market Trends.
- **E-commerce:**
	- Generating personalized product recommendations
	- optimizing inventory
	- understanding consumer behavior.
- **Scientific Research:** Analyzing large-scale experimental data in
	- genomics,
	- physics,
	- astronomy.

*These patterns (data mining responsible for finding it) are non-trivial and often require sophisticated algorithms to uncover*

Data Mining the bridge between *raw data* and *meaningful*, *actionable* Knowledge.

## 2.2-The Knowledge Discovery in Databases (KDD) Process

> The comprehensive process of transforming raw data into valuable knowledge

![iamge](/chapter-2/2.png)

Data mining is a key step in the KDD pipeline but the entire process includes preprocessing, pattern discovery, evaluation, and Presentation.

![iamge](/chapter-2/3.png)
![iamge](/chapter-2/4.png)
More about KDD in here [[01-Foundations of Data Mining#01-Data Mining – The Art of Discovering Knowledge]]

**Using KDD ensures that data mining efforts lead to reliable and actionable
Knowledge.**
#### Retail Company KDD example:

1. Collect transaction data from multiple branches ***(integration)***
2. Remove duplicate or erroneous entries ***(cleaning).***
3. Extract product and sales data ***(selection).***
4. Normalize numerical sales figures ***(transformation).***
5. Apply association rule mining to discover product bundling opportunities ***(data mining).***
6. Evaluate rules based on support, confidence, and lift ***(pattern evaluation).***
7. Present insights to decision-makers with visual dashboards ***(knowledge presentation).***
## 2.3-Major Data Mining Techniques

Theses techniques are the backbone of data mining, each addressing different types of Analytical problems.

![iamge](/chapter-2/5.png)
### 2.3.1-Classification

> maps input data to predefined categories or labels, supervised learning: requires labeled data for training

***ex:*** Predicting whether a patient is at high risk of diabetes based on medical
Features.

- **Classification applications:**
	- spam detection
	- medical diagnosis
	- fraud detection 
	- credit scoring:
		- numeric assessment of how risky it is to lend money to someone.
		- **How it works:**
			- Uses ***historical data*** about the borrower (Income, Income, Past loan repayments, Credit card usage)
			- High score → Low risk → Likely to get approved
			- Low score → High risk → Likely to be denied or offered a higher interest rate

![iamge](/chapter-2/6.png)

- **Decision Trees:** tree-based structures that split data based on feature thresholds
- **Naïve Bayes:** Probabilistic models based on Bayes' theorem
- **k-Nearest Neighbors (k-NN):** Predicts labels based on proximity in feature space
- **Support Vector Machines (SVM):** Finds the optimal hyperplane separating classes.
- **Neural Networks:** Can model complex non-linear relationships

![iamge](/chapter-2/7.png)

### 2.3.2-Clustering

![iamge](/chapter-2/8.png)

>unsupervised learning technique for grouping similar data points without pre-existing labels, identifies hidden structures in the data

***Clustering applications:*** Segmenting customers in an e-commerce platform to personalize Recommendations.

*widely used in marketing, anomaly detection, social network analysis, and
Image segmentation.*

- **Clustering algorithms :**
	- ***k-Means:*** Partitions data into k clusters based on proximity 
	- ***Hierarchical Clustering:*** Builds a tree of clusters based on distances
	- ***DBSCAN:*** Density-based clustering, effective for irregular cluster shapes

![iamge](/chapter-2/9.png)
### 2.3.3-Association Rule Mining

![iamge](/chapter-2/10.png)

>uncovers relationships among variables in large datasets. The classic example is market basket analysis *"70% of customers who buy bread also buy butter."* 

- **Applications:**
	- Recommendation engines **Amazon and Netflix**
	- Inventory optimization and cross-selling strategies
		- ***Cross-selling** is a sales strategy where a company encourages a customer to **buy additional, related, or complementary products or services** along with their original purchase.*

- **Algorithms :**
	- ***Apriori***
	- ***FP-Growth***

These algorithms applies (***Support, confidence, lift***)

1. عدد مرات تكرار حدوث الشئ يبقي **support**
2. الجديد اللي اتبني علي القديم **Confidence**
3. بيقيس قوة القاعد اللي اتحطط في فرص عشوائيه يبقي **lift**
### 2.3.4-Regression

![iamge](/chapter-2/11.png)

> predicts continuous outcomes rather than discrete classes 

***widely used in finance, economics, demand forecasting, and risk analysis***

- **Applications:**
	- Predicting house prices based on features such as *location*, *size*, and *Number of bedrooms.*

- **Linear regression:** Models linear relationships
- **Polynomial Regression**: Captures non-linear trends.
- **Random Forest Regression**: Ensemble method for improved accuracy

![iamge](/chapter-2/12.png)

### 2.3.5-Other Techniques

- **Outlier detection:** Identifies unusual data points, crucial for ***fraud detection***.
- **Sequential Pattern Mining:** Detects trends over time, useful in web clickstream Analysis.
	- A ***web clickstream*** is the ***record of a user’s activity on a website***, showing the sequence of pages or links they click as they navigate.
	- tracks (***Pages visited, Links clicked, Device or browser used***)
	- Collected using (***Web server logs, Google Analytics (JS tracking), Google Analytics***)
	- Data mining and ML uses it to (***Recommendation systems, Recommendation systems, Predicting next action***)
	- Home → Electronics → Laptops → Product A → Add to Cart → Checkout we can build a Recommendation system based on previous user navigation
- **Dimensionality Reduction:**
	- Techniques like ***PCA*** reduce high-dimensional data for Easier visualization and computation.

## 2.4-Challenges in Data Mining 

![iamge](/chapter-2/13.png)

**Addressing these challenges often involves preprocessing, feature selection, algorithmic Optimization, and privacy-preserving techniques.**

1. ***Data Quality Issues:*** Missing, inconsistent, or noisy data can lead to misleading results
2. ***Scalability:*** datasets are massive, requiring algorithms that can handle big data Efficiently.
3. ***High Dimensionality:*** Many features increase computational complexity and can reduce Model performance.
4. ***Interpretability:***  Complex models, especially deep learning approaches, may lack Transparency.
5. ***Privacy Concerns:*** Sensitive domains require careful handling of personal data.
6. ***Dynamic Data:*** Continuous data streams require real-time analysis and adaptive Models.
## 2.5-Applications of Data Mining

[[#2.1-Introduction to Data Mining#Industries uses data mining]]

## 2.6-Practical Workflow for Data Mining 

A typical workflow integrates data mining techniques with KDD principles: [[01-Foundations of Data Mining#01-Data Mining – The Art of Discovering Knowledge]]

## Summary 

***Data Mining*** transforms raw data into actionable knowledge through pattern discovery And analysis.

***KDD*** provides a structured framework for the mining process, from data cleaning to
Knowledge presentation.

***Core Techniques:*** Classification, clustering, regression, association rule mining, and
Outlier detection each solve specific analytical problems.

***Challenges***: Include data quality, scalability, dimensionality, interpretability, and privacy Concerns.

***Applications:*** healthcare, finance, e-commerce, scientific research, and social
Medical 

## Problem-Solving

### 01-Given a dataset of 100,000 bank transactions, how would you design a system to detect Fraudulent activity using classification?

![iamge](/chapter-2/14.png)
![iamge](/chapter-2/15.png)
![iamge](/chapter-2/16.png)
![iamge](/chapter-2/17.png)

---
### 02-Implement a clustering algorithm in Python for customer segmentation and explain how To determine the optimal number of clusters
![iamge](/chapter-2/18.png)
![iamge](/chapter-2/19.png)
![iamge](/chapter-2/20.png)
![iamge](/chapter-2/21.png)



---
### 03-Apply association rule mining to supermarket transaction data and identify at least two Strong association rules.


```python
# Import necessary libraries
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder  # For converting transactions into a one-hot encoded format
from mlxtend.frequent_patterns import apriori, association_rules  # For mining frequent itemsets and generating rules

# Example supermarket transactions (list of lists)
transactions = [
    ['Milk', 'Bread'],                  # Transaction 1
    ['Milk', 'Diaper', 'Beer', 'Bread'], # Transaction 2
    ['Milk', 'Diaper', 'Beer'],         # Transaction 3
    ['Bread', 'Butter'],                # Transaction 4
    ['Milk', 'Bread', 'Butter']         # Transaction 5
]

# Convert transactions into a one-hot encoded DataFrame
# Each column represents an item; 1 if the item is in the transaction, 0 otherwise
te = TransactionEncoder()
te_ary = te.fit(transactions).transform(transactions)  # Transform the list of transactions
df = pd.DataFrame(te_ary, columns=te.columns_)         # Create a DataFrame for easier handling
print(df)  # Print the one-hot encoded DataFrame

# Generate frequent itemsets using the Apriori algorithm
# min_support=0.4 means we only consider itemsets appearing in at least 40% of transactions
frequent_itemsets = apriori(df, min_support=0.4, use_colnames=True)
print(frequent_itemsets)  # Display frequent itemsets and their support

# Generate association rules from the frequent itemsets
# metric="confidence", min_threshold=0.7 ensures only rules with confidence >= 0.7 are considered
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

# Sort rules by lift in descending order to see the strongest associations first
rules = rules.sort_values(by='lift', ascending=False)

# Print relevant columns: antecedents (if), consequents (then), support, confidence, lift
print(rules[['antecedents','consequents','support','confidence','lift']])

```

![iamge](/chapter-2/22.png)

---


---
### 04-Suppose you are given a dataset with missing values. Outline step-by-step how Would handle this issue before applying data mining algorithms.

![iamge](/chapter-2/23.png)

![iamge](/chapter-2/24.png)
![iamge](/chapter-2/25.png)



---
### 05-Using regression, predict the fuel efficiency of cars based on attributes such as engine size, weight, and horsepower.

```python 
# Example: Using a CSV file with car data
df = pd.read_csv('cars.csv')  

# Preview the dataset
print(df.head())
# Fill missing numeric values with median
df.fillna(df.median(), inplace=True)
X = df[['EngineSize', 'Weight', 'Horsepower']]  # Independent variables
y = df['MPG']                                   # Dependent variable

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()    # Create linear regression model
model.fit(X_train, y_train)   # Train the model

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Mean Squared Error:", mse)
print("R^2 Score:", r2)

print("Intercept:", model.intercept_)
print("Coefficients:", list(zip(X.columns, model.coef_)))

```

