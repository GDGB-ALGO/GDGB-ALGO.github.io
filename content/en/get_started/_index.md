---
title: Get Started
linkTitle: Get Started
menu: {main: {weight: 05}}
show_toc: true
---

### Overview
Dynamic Text-Attributed Graphs (DyTAGs), which intricately integrate structural, temporal, and textual attributes, are crucial for modeling complex real-world systems.
However, most of the existing DyTAG datasets exhibit poor textual quality, which severely limits their utility for DyTAG generation tasks requiring semantically rich inputs.
Additionally, prior work mainly focus on discriminative tasks on DyTAGs, resulting in a lack of standardized task formulations and evaluation protocols tailored for DyTAG generation.
To address these critical issues, we propose the first **G**enerative **D**yTA**G** **B**enchmark (GDGB), which comprises eight meticulously curated DyTAG datasets with high-quality textual features for both nodes and edges, overcoming limitations of prior datasets.
Building on GDGB, we define two novel DyTAG generation tasks: Transductive Dynamic Graph Generation (TDGG) and Inductive Dynamic Graph Generation (IDGG). 
TDGG transductively generates a target DyTAG based on the given source and destination node sets, while the more challenging IDGG introduces new node generation to inductively model the dynamic expansion of real-world graph data. 
To enable holistic evaluation, we design multifaceted metrics that assess the structural, temporal, and textual quality of the generated DyTAGs.
We further propose GAG-General, an LLM-based multi-agent generative framework tailored for reproducible and robust benchmarking of DyTAG generation.
Experimental results demonstrate that GDGB enables rigorous evaluation of TDGG and IDGG, with key insights revealing the critical interplay of structural and textual features in DyTAG generation. 
These findings establish GDGB as a foundational resource for advancing generative DyTAG research and unlocking further practical applications in DyTAG generation. 

### Benchmark Instructions for GAG-General Framework

**1. Prepare Experimental Environment**

create a virtual environment for LLMGraph
```cmd
    conda env create -f LLMGraph_environment.yml
    conda activate LLMGraph
```

pip install agentscope\[distributed\] v0.0.4 from https://github.com/modelscope/agentscope/
```cmd
    git clone https://github.com/modelscope/agentscope/
    git reset --hard 1c993f9
    # From source
    pip install -e .[distribute]
```

**2. Prepare GDGB Dataset**

Our proposed GDGB comprises eight carefully selected and rigorously processed DyTAG datasets, hosted through a **[private anonymous link](https://kaggle.com/datasets/f5e51c13e31f34cc84177d121c5902e0076c826d24e40414186024232e62973e)** on Kaggle, covering domains such as e-commerce recommendations, social networks, biographies of celebrities, citation networks, and movie collaboration networks. All datasets include nodes and edges endowed with rich semantic textual information. Thus, the newly proposed datasets resolve many key problems associated with previous dynamic graph datasets, such as poor quality of textual features, which subsequently results in the inability to support DyTAG generation tasks. For more details of our datasets, please see our submitted manuscript.

To get our GDGB datasets from **[private anonymous link](https://kaggle.com/datasets/f5e51c13e31f34cc84177d121c5902e0076c826d24e40414186024232e62973e)**, please firstly click “Download” and choose “Download dataset as zip”, then put the datasets at GDGB/GDGB_dataset and unzip it.
For each GDGB dataset, it contains two csv files (node_{datase_tname}.csv and edge_{dataset_name}.csv).

Format like
```cmd
GDGB/GDGB_dataset/Sephora/node_sephora.csv
GDGB/GDGB_dataset/Sephora/edge_sephora.csv
...
```

**3. LLM Backbone Config**

Set your api key and base url in "TDGG/LLMGraph/llms/default_model_configs.json" and "IDGG/LLMGraph/llms/default_model_configs.json", and format it like:
```json
[
    {
        "config_name": "gpt-4o-mini-2024-07-18",
        "model_type": "openai_chat",
        "model_name": "gpt-4o-mini-2024-07-18",
        "api_key": "your_api_key",
        "client_args": {
            "base_url": "your_base_url"
        },
        "generate_args": {
            "temperature": 0.8,
            "max_tokens": 2000,
            "top_p": 0.9,
            "frequency_penalty": 1.1
        }
    },
    {
        "config_name": "llama3_70B",
        "model_type": "openai_chat",
        "model_name": "llama3_70B",
        "api_key": "your_api_key",
        "client_args": {
            "base_url": "your_base_url"
        },
        "generate_args": {
            "temperature": 0.8,
            "max_tokens": 2000,
            "top_p": 0.9,
            "frequency_penalty": 1.1
        }
    },
]
```

**4. Experimental Config**
Before running experiments, please check the configuration in "TDGG/LLMGraph/tasks/general/configs/{dataset_name}/config.yaml" or "IDGG/LLMGraph/tasks/general/configs/{dataset_name}/config.yaml".

Specifically, *start_edge* denotes the size of the seed DyTAG, *edge_delta* denotes the size of edge generation for each round, and *end_edge* denotes the target size of generated DyTAG. model_config_name denotes the used LLM backbone. For IDGG, *new_nodes_generation* configures the size of node generation for each round. For more implementation details, please see our submitted manuscript.

**5. Run TDGG/IDGG**

- Start the launcher in one terminal:

Example of running TDGG on sephora:
```cmd
cd TDGG
python start_launchers.py --launcher_num 20 --launcher_save_path "LLMGraph/llms/launcher_info_sephora_tdgg.json"
```

Example of running IDGG on sephora:
```cmd
cd IDGG
python start_launchers.py --launcher_num 20 --launcher_save_path "LLMGraph/llms/launcher_info_sephora_idgg.json"
```

- Start DyTAG generation in another terminal:

Example of running TDGG on sephora:
```cmd
cd TDGG
python main.py --task general --config sephora --build --launcher_save_path "LLMGraph/llms/launcher_info_sephora_tdgg.json"

```

Example of running IDGG on sephora:
```cmd
cd IDGG
python main.py --task general --config sephora --build --launcher_save_path "LLMGraph/llms/launcher_info_sephora_idgg.json"

```

Or you optionaly use reflection mechanism in another terminal:
```cmd
python main.py --task general --config sephora_re --build --launcher_save_path "LLMGraph/llms/launcher_info_sephora_tdgg.json"

```

The generated DyTAGs are saved at "TDGG/LLMGraph/tasks/general/configs/{dataset_name}/generated_data" or "IDGG/LLMGraph/tasks/general/configs/{dataset_name}/generated_data".

**5. Evaluate the Quality of DyTAG Generation**

- Start the evaluation launcher in one terminal:

```cmd
cd TDGG
python start_launchers.py --launcher_num 20 --launcher_save_path "LLMGraph/llms/launchers_general_eval.json"

```

Example of evaluating TDGG on sephora:
```cmd
cd TDGG
bash evaluate.sh
```

Example of evaluating IDGG on sephora:
```cmd
cd IDGG
bash evaluate.sh
```

The evaluation results on graph structure, textual quality, and graph embedding are saved at "evaluate/general/graph_structural_results", "evaluate/general/textual_quality_results", and "evaluate/general/graph_embedding_results".


### Acknowledge

Thanks to the authors of [GAG](https://arxiv.org/abs/2410.09824), [VRDAG](https://arxiv.org/abs/2412.08810), [DG-Gen](https://arxiv.org/abs/2412.15582), and [JL-Metric](https://arxiv.org/abs/2503.01720) for making their project codes publicly available. 

### Citing GDGB
If you use GDGB datasets, please cite [our paper]().