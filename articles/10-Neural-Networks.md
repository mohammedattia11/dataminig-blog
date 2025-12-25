---
title: "09-Neural Networks"
category: "data-mining"
date: "12-23-2025"
background_image: "/chapter-9/4.webp"
tags: ["DL"]
description: "This chapter provides a comprehensive overview of the systems that serve as the foundation of Deep Learning, inspired by the structure of the human brain to process complex information"
readTime: "25 min read"
---
## 9.1-Introduction

![image](/chapter-9/1.webp)

>**synapses:** billions of neurons process information simultaneously through complex connections in human brain

**How Artificial neural networks (`ANNs`) mimics synapses:**
- Connecting simple computational units (`neurons`) in layers
- Each neuron receives input
- Applies a weight
- Adds a bias
- Passes the result through a nonlinear activation function 

Applying the previous process, enabling the network to **capture complex relationships**

**Architecture of neural networks layers:**
- **Input layer:** receives raw features from the data
- **Hidden layers:** transform these inputs into increasingly abstract representations
- **Output layer:** generates predictions or decisions

This feed forward structure allows the network to learn **hierarchical representations**

**Early layers:** detecting simple patterns like **edges in images** or **word n-grams** in text
**Deeper layers:** capturing complex features such as **faces** or **semantic relationships**.

**Neural network use cases:**
- Predicting housing prices
- Generating realistic `text`, `images`, and `audio`

**Neural network challenges:**
- Risk of overfitting
- High computational requirements
- Need for careful **architectural design** and **hyper parameter tuning**

## 9.2-Historical Background: Perceptron and Multi-Layer Networks 

![image](/chapter-9/2.webp)

> **perceptron (binary classifier):** the earliest neural network model, introduced by **Frank Rosenblatt** in 1958

**How perceptron works:**
- Computes a weighted sum of input features 
- Applies a step activation function (to determine the output)

**Perceptron limitations:**
- Can only solve linearly separable problems, can't handle(`complex`,`non-linear patterns`)

And to solve this problem we need to make theses networks **approximate nonlinear decision boundaries**, which make them capable of handling real-world datasets with intricate structures

![image](/chapter-9/3.webp)

**How Multi-layer perceptrons (`MLPs`) the problem solution works:**
- Includes one or more **hidden layers**
- Differentiable **activation functions** 

**The universal approximation theorem:**
- Formalizes this ability 
- Stating that a feed forward neural network with at least **one hidden layer** and **nonlinear activations** can approximate any continuous function on a compact domain

**Factors for this success and theoretical power:**
- Network design 
- Optimization methods 
- Regularization strategies
- Data quantity.

## 9.3-Forward and Backward Propagation 

![image](/chapter-9/4.webp)

**Training neural network process:**  adjusting the weights of each neuron to minimize a loss function, which measures the discrepancy between **predicted outputs** and **true labels**

**Training process is not simply algorithmic it  involves:**
- Hyperparameter tuning 
- Data preprocessing 
- Careful monitoring

**Factors that can prevent network from learning effectively**
- Vanishing gradients 
- Exploding gradients 
- inadequate regularization

---
### 9.3.1-Forward Propagation 

**How forward propagation works:**
- Data flows through the network layer by layer 
- Each neuron calculates a weighted sum of inputs 
- Applies the activation function 
- Passes the result forward 
- The output layer produces predictions (evaluated against the true labels using a **loss function**)

**Different tasks loss functions:**
- **Regression:**
	- Mean Squared Error (`MSE`)
	- Mean Absolute Error (`MAE`)
- **classification:**
	- cross-entropy
	- categorical cross-entropy (**widely used**)

---
### 9.3.2-Backward Propagation 

**How backward propagation works:**
- Gradients of the loss with respect to each weight are computed using (`chain rule`,`calculus,`) this step **allowing the network to understand how each weight contributes to error**
- Optimizers like (`Stochastic Gradient Descent (SGD)`, `Adam`,`RMSProp`) use these gradients to update weights iteratively
- Training proceeds over multiple **epochs** with hyperparameters (`learning rate`,`batch size`) 
- The number of **hidden layers** critically influencing `convergence` and `generalization`.

## 9.4-Activation Functions 

![image](/chapter-9/5.webp)

The expressive power of neural networks comes from **nonlinearity introduced by Activation functions**

Without them, multiple linear layers would collapse into a **single linear function**

**Why selecting activation function is crucial:**
- For network stability 
- Convergence
- Overall performance.

**Common activation functions:**
- **Sigmoid:** 
	- maps inputs to [0,1]
	- useful for `binary classification`
	- suffers from **vanishing gradients** in deep networks
- **Tanh:** 
	- maps inputs to [-1,1]
	- reducing output bias 
	- prone to **vanishing gradients** 
- **Rectified Linear Unit(`ReLU`):**
	- outputs zero for negative inputs 
	- passes positive values unchanged
	- computationally efficient
	- mitigates **vanishing gradients** though some neurons may “die” and never activate, `Leaky ReLU`, `ELU` address this problem 
- **Softmax:**
	- converts output scores into probabilities
	- used in multi-class classification tasks.
- **Linear:** Suitable for regression problems where outputs can be any real number

## 9.5-Neural Networks Types 

### 9.5.1-Feedforward Neural Networks (FNNs) 

> **FNNs:** the simplest type, where information flows in one direction from input to output 

Multi-layer perceptrons (`MLPs`) are the most common example

Can handle a wide range of structured data tasks. 

---
### 9.5.2-Convolutional Neural Networks (CNNs) 

![image](/chapter-9/6.webp)

> **CNNs:** specialized for image and spatial data 


**How it works:** 
- Apply **convolutional filters** to detect local patterns such as `edges`, `textures`, and `shapes`
- Pooling layers reduce dimensionality while retaining important features 
- Architectures like `VGG`, `ResNet`, and `Inception` have achieved state-of-the-art results in **image classification** and **object detection**.

> **convolutional filters (kernels):** **small matrices of numbers** that a Convolutional Neural Network (`CNN`) slides over an image to detect specific patterns

---

### 9.5.3-Recurrent Neural Networks (RNNs) 

![image](/chapter-9/7.webp)

`RNNs` process sequential data such as **text**, **speech**, or **time series**.

Maintain hidden states to capture temporal dependencies 

Vanilla `RNNs` struggle with long sequences, which are Addressed by `LSTMs` and `GRUs`, which use **gating mechanisms** to preserve long term memory

---
### 9.5.4-Transformer Networks 

![image](/chapter-9/8.webp)

Transformers, based on **self-attention mechanisms**, **process sequences** in parallel and capture global dependencies.

Revolutionized `NLP`

Powering models like `BERT`, `GPT`, and `T5`

Expanding into **computer vision** and **multimodal tasks.**

## 9.6-Regularization Techniques

![image](/chapter-9/9.webp)

Neural networks are prone to **overfitting**, especially when **datasets are small** or **networks are large**

![image](/chapter-9/10.webp)

**Regularization techniques:**
- **`L1` and `L2` penalties:** Add a constraint to the loss function to **shrink weights**
- **Dropout:** 
	- Randomly deactivates neurons during training 
	- forcing the network to learn redundant representations. 
- **Early stopping:** stop training when validation performance stops improving.
- **Data Augmentation:** 
	- generates additional training examples through **transformations**
	- improving generalization 
## 9.7-Optimization Challenges 

Deep networks often face **vanishing** or **exploding gradients**, which destabilize training. 

> **Gradient:** How much should you change to reduce the error? 

During backpropagation, gradients are passed **from the output layer backward** through many layers.

> **vanishing Gradient:** Gradients become **very small (close to zero)** as they move backward

- Early layers receive **almost no update**
- Network **stops learning** meaningful features    
- Training becomes **very slow or stuck**

>**Exploding Gradient:** Gradients become **extremely large** as they move backward.

- Weight updates become **huge**
- Loss becomes **NaN or ∞**
- Training becomes **unstable or diverges**

**Solutions:**
- Careful weight initialization 
- Residual connections (`ResNets`)
- Batch normalization.

The second problem is large networks demand **high computational resources** and the solutions are 
- Transfer learning 
- Model quantization 
- Pruning

## 9.8-Python keras 

![image](/chapter-9/11.webp)

**Keras** offers high-level APIs for rapid prototyping

![image](/chapter-9/12.webp)

## 9.9-Python PyTorch 

![image](/chapter-9/13.webp)

**PyTorch** provides modular control for experimentation

## 10-Summary 

![image](/chapter-9/14.webp)