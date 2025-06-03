---
title: "Leaderboards"
linkTitle: "Leaderboards"
weight: 30
menu:
  main:
    weight: 30
---

<div class="td-content">
	<h1> Leaderboards </h1>
</div>

The novelty of our proposed TDGG and IDGG tasks presents unique challenges, as no existing method can directly address their requirements. For instance, the latest feature-supportive dynamic graph generation models like VRDAG [1] and DG-Gen [2] focus solely on generating node or edge representation features, but lack the capability to handle textual contents in DyTAGs. As far as we know, while GAG [3] is the only existing baseline that incorporates textual attributes, it is specifically designed for bipartite social graph generation and lacks generalizability to diverse DyTAG structures and domains. This gap motivates the development of our proposed `GAG-General`, a more universal framework tailored for DyTAG generation tasks.

As our proposed GAG-General is an LLM-based multi-agent generative framework, for the DyTAG generation in TDGG and IDGG, we benchmark three open-source LLMs: DeepSeek-R1-Distill-Qwen-32B [4] (referred to as DeepSeek), Llama-3-70B-Instruct [5] (Llama), and Qwen2.5-72B-Instruct [6] (Qwen), as well as a closed-source model: GPT-4o-Mini [7] (GPT). Both TDGG and IDGG share basic settings: the first `1,000` edges and the corresponding nodes serve as the initial seed DyTAG, and we set the edge generation size per round as `50`. For TDGG, we set the size of the target expanded DyTAG as `10,000` edges. For IDGG, we set the size of the target expanded DyTAG as `2,000` edges, due to the additional stage of node generation. See [Get Started](/get-started/) for usage details and [Paper]() for more implementation details.

#### Reference

[1] Fan Li, Xiaoyang Wang, Dawei Cheng, Cong Chen, Ying Zhang, and Xuemin Lin. Efficient dynamic attributed graph generation, 2024.

[2] Ryien Hosseini, Filippo Simini, Venkatram Vishwanath, and Henry Hoffmann. A deep probabilistic framework for continuous time dynamic graph generation. In AAAI Conference on Artificial Intelligence, 2024.

[3] Jiarui Ji, Runlin Lei, Jialing Bi, Zhewei Wei, Xu Chen, Yankai Lin, Xuchen Pan, Yaliang Li, and Bolin Ding. Llm-based multi-agent systems are scalable graph generative models, 2025.

[4] DeepSeek-AI. Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning, 2025.

[5] AI@Meta. Llama 3 model card. 2024.

[6] Qwen Team. Qwen2.5: A party of foundation models, September 2024.

[7] OpenAI. Gpt-4o mini: Advancing cost-efficient intelligence. https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/, 2024. Accessed: 2025-04-30.

---

# TDGG

## Sephora {#Sephora}

{{< table file="Sephora_leaderboard_TDGG.md" >}}

## Dianping {#Dianping}

{{< table file="Dianping_leaderboard_TDGG.md" >}}

## WikiRevision {#WikiRevision}

{{< table file="WikiRevision_leaderboard_TDGG.md" >}}

## WikiLife {#WikiLife}

{{< table file="WikiLife_leaderboard_TDGG.md" >}}

## IMDB {#IMDB}

{{< table file="IMDB_leaderboard_TDGG.md" >}}

## WeiboTech {#WeiboTech}

{{< table file="WeiboTech_leaderboard_TDGG.md" >}}

## WeiboDaily {#WeiboDaily}

{{< table file="WeiboDaily_leaderboard_TDGG.md" >}}

## Cora {#Cora}

{{< table file="Cora_leaderboard_TDGG.md" >}}



---

# IDGG

## Sephora {#Sephora}

{{< table file="Sephora_leaderboard_IDGG.md" >}}

## Dianping {#Dianping}

{{< table file="Dianping_leaderboard_IDGG.md" >}}

## WikiRevision {#WikiRevision}

{{< table file="WikiRevision_leaderboard_IDGG.md" >}}

## WikiLife {#WikiLife}

{{< table file="WikiLife_leaderboard_IDGG.md" >}}

## IMDB {#IMDB}

{{< table file="IMDB_leaderboard_IDGG.md" >}}

## WeiboTech {#WeiboTech}

{{< table file="WeiboTech_leaderboard_IDGG.md" >}}

## WeiboDaily {#WeiboDaily}

{{< table file="WeiboDaily_leaderboard_IDGG.md" >}}

## Cora {#Cora}

{{< table file="Cora_leaderboard_IDGG.md" >}}

---