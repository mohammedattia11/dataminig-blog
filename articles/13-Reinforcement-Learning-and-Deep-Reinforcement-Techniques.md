---
title: "16-Reinforcement Learning and Deep Reinforcement Techniques"
category: "data-mining"
date: "12-25-2025"
background_image: "/chapter-16/1.webp"
tags: ["ML","DL"]
description: "This chapter explores a dynamic branch of machine learning focused on how an agent learns to take optimal actions within an environment to maximize a cumulative reward"
readTime: "12 min read"
---
## 16.1-Introduction to Reinforcement Learning

![image](/chapter-16/2.webp)

> **Reinforcement Learning (`RL`):** branch of machine learning focused on how an **agent** should take actions in an environment **to maximize cumulative reward**

**Difference between supervised learning and Reinforcement Learning:**
- **Supervised Learning:** model learns from labeled input-output pairs
- **Reinforcement Learning:** 
	- Relies on **trial** and **error**
	- Agent learns from feedback (**rewards** or **penalties**) after each action

`RL` is especially effective for **sequential decision-making tasks**, such as:
- Game-playing (Chess, video games)
- Robotics and autonomous control systems
- Navigation and path planning
- Finance (trading and portfolio optimization)

> **Deep Reinforcement Learning (Deep `RL`):** combining reinforcement learning with deep learning

**The power of combining `RL` and deep learning:**
- Handle large or continuous state and action spaces
- Enabling agents to operate in highly complex environments.

## 16.2-Core concepts

![image](/chapter-16/3.webp)

The heart of `RL` is the interaction between `agent` and `environment`:
- The agent observes the current **state** `sₜ` at **time** `t`.
- The agent selects an **action** `aₜ`.
- The environment responds with a **reward** `rₜ` and transitions to a **new state** `sₜ₊₁`.

The goal is to **learn a policy** `π` which maps states to actions:
- `π(s) = a`

![image](/chapter-16/4.webp)

The policy **aims to maximize the expected cumulative reward**, often discounted over time: `Gₜ = Σ (from k=0 to ∞) γᵏ rₜ₊ₖ`
- `Gₜ` : Return from **time step** `t`
- `γ` : Discount factor (0 ≤ `γ` ≤ 1)
- `rₜ₊ₖ` : Reward received at time `t+k`

![image](/chapter-16/5.webp)

This framework is formalized as a **Markov Decision Process (`MDP`)**, defined as:
- `MDP = (S, A, P, R, γ)`
	- `S` : Set of states
	- `A` : Set of actions 
	- `P(s' | s, a)` : **Transition probability to next state** `s'` given **state** `s` and **action** `a`
	- `R(s, a)` : Reward function 
	- `γ` : Discount factor 

![image](/chapter-16/6.webp)

Key challenge in `RL` is the **exploration** vs **exploitation dilemma(problem)**:
- **Exploration:** Try unknown actions to discover their rewards.
- **Exploitation:** Choose the best-known action to maximize immediate reward.

## 16.3-Value Based Methods Q-Learning and Deep Q-Networks

![image](/chapter-16/7.webp)

> **Q-Learning:** a foundational value-based `RL` algorithm, learns the **optimal action-value function**

**optimal action-value function:**
- `Q^*(s,a)`
- Represents the **expected cumulative reward** when:
	- taking action `a`
	- in state `s`
	- and following the **optimal policy thereafter**

![image](/chapter-16/8.webp)

**optimal policy thereafter:**
- `Q(s, a) ← Q(s, a) + α [ r + γ maxₐ ' Q(s', a') − Q(s, a)]`
	- `α` : Learning rate
	- `γ` : Discount factor
	- `r` : Reward 
	- `s'` : Next state 
	- `a'` :  Possible next actions

For **large** or **continuous state spaces**, tabular `Q-Learning` is infeasible(**not possible to achieve or accomplish**)

![image](/chapter-16/9.webp)

**Deep Q-Networks (`DQN`):**
- Use a neural network to approximate `Q(s, a; θ)`
- Where (`θ`) represents: **network parameters.**

**Key stabilizing techniques in `DQN`:**
- **Experience replay:** Randomly sample past transitions to **break correlations between consecutive samples.**
- **Target network:** Maintain a delayed copy of network weights to **stabilize updates**

Deep Mind famously applied `DQNs` to achieve human-level performance on **Atari games.**

## 16.4-Policy-Based Methods and Actor-Critic Models

![image](/chapter-16/10.webp)

> **Policy-based methods:** learn the policy function `π(a∣s;θ)` directly.

The policy can be **optimized using gradient ascent** on the **expected reward**:
- `∇θ J(θ) = Eπ [ ∇θ log π(a | s; θ) · Gₜ ]`
	- `J(θ)` : Expected return under policy `π`
	- `Gₜ`  Return from time `t`

> **Actor-Critic methods:** combine value and policy learning 

- **Actor:**  Updates the policy `π(a∣s;θ)`
- **Critic:** Estimates a value function (`V(s)`) or (`Q(s,a)`) to **reduce variance in updates**

![image](/chapter-16/11.webp)

**Popular deep RL algorithms:**
- **DDPG:** Deep Deterministic Policy Gradient (**continuous actions**)
- **PPO:** Proximal Policy Optimization (**stable updates**)
- **A2C/A3C:** Advantage Actor-Critic (**parallel learning**)
## 16.5-Exploration, Discounting, and Stability

**Exploration strategies:**
- **Epsilon-greedy:** Randomly **explore with probability** (`ε`)
- **Softmax (Boltzmann):** Choose actions probabilistically based on `Q-values`
- **Upper Confidence Bound (`UCB`):** Balances **exploration**/**exploitation** using **confidence intervals**

**Discount factor (`γ`):**  controls trade-off between **short-term** and **long-term** rewards

**Stability in Deep RL:**
- Reward clipping
- Normalization 
- Learning rate scheduling 
- Careful neural network architecture design

## 16.6-Deep Q-Network in python

![image](/chapter-16/12.webp)

**Code illustrates:**
- Neural network approximating `Q-values`
- Target network for stability 
- Experience replay 
- Gradient-based updates

**Raw Code from the book:**

![image](/chapter-16/13.webp)
## 16.7-Applications of Reinforcement Learning

![image](/chapter-16/14.webp)

- **Gaming:** AlphaGo, Atari, Dota2 (games name and consoles)
- **Robotics:** Robot arm manipulation, locomotion
- **Finance:** Portfolio optimization, trading strategies
- **Healthcare:** Treatment planning and sequential decision making
- **Autonomous Vehicles:** Navigation and control
## 16.8-Future Directions

![image](/chapter-16/15.webp)

**Deepl RL  research focuses on:**
- **Sample efficiency:** Reducing number of interactions needed to learn
- **Safe RL:** Ensuring agents avoid catastrophic failures
- **Multi-agent RL:** Coordination in competitive/cooperative environments
- **Integration with LLMs:** Language-guided RL and reasoning agents
- **Combining model-based and model-free RL:** Leveraging environment models to improve learning
## Summary 

![image](/chapter-16/16.webp)