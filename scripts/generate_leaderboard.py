import os
import pandas as pd
import markdown

DATASETS = [
    ("ML-20M", "ml-20m"),
    ("Taobao", "taobao"),
    ("Yelp", "yelp"),
    ("GoogleLocal", "googlelocal"),
    ("Flickr", "flickr"),
    ("YouTube", "youtube"),
    ("Patent", "patent"),
    ("WikiLink", "wikilink")
]

def read_leaderboard(filename):
    """Read markdown table from file and convert to pandas DataFrame"""
    with open(filename, 'r') as f:
        content = f.read()
    return content.strip()

def generate_index():
    content = []
    
    # Add header
    content.append("""---
title: "Leaderboards for Node Property Prediction"
linkTitle: "Leaderboards"
weight: 30
menu:
  main:
    weight: 30
description: >
  Performance rankings of temporal graph learning methods across different datasets.
---

Check leaderboards for""")

    # Add dataset links
    for display_name, slug in DATASETS:
        content.append(f"- [{display_name}](/datasets/{slug})")

    content.append("""
The **bold** method name indicates that the implementation is official (by the author of the original paper).
""")

    # Add each dataset's leaderboard
    for display_name, slug in DATASETS:
        content.append(f"""
## {display_name} {{#{slug}}}
The classification accuracy on the test and validation sets. The higher, the better.

| Rank | Method | Test MRR (%) | Contact | References | Hardware | Date |
|:----:|--------|:------------:|---------|------------|----------|------|
{{{{< table "{display_name}_leaderboard.md" >}}}}
""")

    # Add submission guidelines
    content.append("""
## Submission Guidelines

To submit your results to our leaderboards, please fill out our [submission form](https://docs.google.com/forms/d/e/1FAIpQLSchjDliqcIO2FYY0qmjenHcLSNvqa-0poV1PrbRGph2XwZ8RA/viewform).
""")

    # Write to file
    with open('content/en/leaderboard/_index.md', 'w') as f:
        f.write('\n'.join(content))

if __name__ == "__main__":
    generate_index()