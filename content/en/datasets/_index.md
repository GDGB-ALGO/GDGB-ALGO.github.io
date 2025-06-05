---
title: Datasets
linkTitle: Datasets
menu: {main: {weight: 10}}
---

Our proposed GDGB comprises eight carefully selected and rigorously processed DyTAG datasets, hosted through a **[sharing link](https://kaggle.com/datasets/f5e51c13e31f34cc84177d121c5902e0076c826d24e40414186024232e62973e)** on Kaggle, covering domains such as e-commerce recommendations, social networks, biographies of celebrities, citation networks, and movie collaboration networks. All datasets include nodes and edges endowed with rich semantic textual information. Thus, the newly proposed datasets resolve many key problems associated with previous dynamic graph datasets, such as poor quality of textual features, which subsequently results in the inability to support DyTAG generation tasks. More details of our datasets are shown as follows.

---

## Sephora
`Sephora` [1] is a dataset collected from Kaggle, documenting user reviews of beauty and skincare products on the Sephora e-commerce platform. The temporal span of the dataset ranges from August 28, 2008, to March 21, 2023. Specifically, the dataset includes rich textual information about users, such as skin tone, skin type, hair color, eye color, and historical review statistics. 
Notably, it also contains detailed textual features of beauty products from the Sephora online store, including product and brand names, prices, ingredients, ratings, and all associated attributes, which support the construction of textual features for nodes in this DyTAG. For user reviews of beauty and skincare products, the dataset provides review ratings (ranging from 1 to 5) as edge labels, and detailed textual reviews as edge content. Consequently, the Sephora dataset is represented as a bipartite DyTAG, where users and beauty products serve as nodes with textual features, and an edge represents a user's rating and textual review of a product at a given time.

#### References
[1] https://www.kaggle.com/datasets/nadyinky/sephora-products-and-skincare-reviews/

---
## Dianping
`Dianping` [1,2,3] is a business review dataset derived from Dianping, a prominent platform for business recommendations (e.g., restaurants), spanning from July 3, 2009, to February 8, 2012. The dataset records Dianping users' historical review statistics, frequently reviewed cities, and detailed business information, including store names, addresses, cuisine styles, average costs, and historical scores. User reviews of businesses include multi-dimensional ratings (e.g., flavor, environment, service) in addition to overall scores (ranging from 0 to 5) as edge labels. 
Reviews also contain rich textual content and supplementary evaluations for specific items such as recommended dishes or special services, providing extensive edge textual features. The dataset is structured as a bipartite DyTAG, where Dianping users and businesses are nodes with textual features, and an edge represents a user's detailed textual review of a business at a given time.

#### References

[1] http://www.dianping.com

[2] Yongfeng Zhang, Min Zhang, Yiqun Liu, Shaoping Ma, and Shi Feng. Localized matrix factorization for recommendation based on matrix block diagonal forms. In Proceedings of the 22nd International Conference on World Wide Web, WWW ’13, page 1511–1520, New York, NY, USA, 2013. Association for Computing Machinery.

[3] Yongfeng Zhang, Guokun Lai, Min Zhang, Yi Zhang, Yiqun Liu, and Shaoping Ma. Explicit factor models for explainable recommendation based on phrase-level sentiment analysis. In Proceedings of the 37th International ACM SIGIR Conference on Research & Development in Information Retrieval, SIGIR ’14, page 83–92, New York, NY, USA, 2014. Association for Computing Machinery.

---

## WikiRevision
`WikiRevision` [1] is a dataset cleaned and processed from Wikipedia's official data dumps, recording user revisions and modifications to Wikipedia pages with the selected dumps corresponding to December 1, 2024. The temporal span ranges from January 30, 2001, to December 3, 2024. The dataset includes Wikipedia users' usernames, historical editing statistics, frequently edited pages, and all revised Wikipedia page titles. To enrich textual features for page nodes, we crawl the first paragraph of each corresponding Wikipedia page from Wikipedia. User revisions are categorized into two edge classes (minor vs. non-minor edits), with the accompanying revision comments serving as edge textual features. The dataset is structured as a bipartite DyTAG, where Wikipedia users and pages are nodes with textual features, and an edge represents a user's textual revision summary on a page at a given time.

#### References
[1] https://dumps.wikimedia.org/enwiki/20241201/

---

## WikiLife
`WikiLife` [1] is a dataset derived from Wikipedia's official data dumps, recording historical records of notable individuals being physically present at specific locations. The temporal span ranges from 202 to 2024. The original dataset [1] is extracted from English Wikipedia's biography pages as person-time-location triplets. We extend this by crawling the first paragraphs of corresponding Wikipedia pages for persons and locations as extra textual features. Additionally, we utilize 24 life trajectory activity categories (e.g., birth/death, education, career) from [1] as edge labels and map the original Wikipedia text of triplets to describe the specific activities of individuals at locations. The WikiLife dataset is structured as a bipartite DyTAG, where persons and locations are nodes with textual features, and an edge represents a person's textual life trajectory activity in a location at a given time.

#### References
[1] Ying Zhang, Xiaofeng Li, Zhaoyang Liu, and Haipeng Zhang. Paths of a million people: Extracting life trajectories from wikipedia, 2024.

---

## IMDB
`IMDB` [1] is a dataset based on IMDB's official data, documenting actor/actress collaboration networks. The temporal span ranges from 1988 to 2031 (including collaboration information of official future films like Avatar 3). The dataset includes actors' and actresses' names, birth/death years, primary professions, and extra biographical information crawled from Wikipedia to enrich node textual features. Edge categories correspond to 20 types of movie genres (e.g., comedy, drama, crime, action), with edge texts comprising the title of the collaborated movie and roles played by actors/actresses, respectively. The IMDB dataset is a non-bipartite DyTAG, where actors/actresses are nodes with textual features, and an edge represents a movie collaboration relationship between them at a given time.

#### References
[1] https://datasets.imdbws.com/

---

## WeiboTech
`WeiboTech` [1] is a dataset collected from the Weibo social platform, recording user interactions (comments and reposts). The temporal span ranges from December 29, 2023, to January 5, 2024. The original dataset [1] focuses on advertising strategies for electric toothbrushes. We reprocess the raw data to extract temporal information and restructure it into the DyTAG format. The dataset includes user profiles (e.g., usernames, gender, regions, follower/followee counts, self-introductions) and interaction edges categorized as comment or repost, with edge texts comprising source post content and destination user comments/reposts. Named WeiboTech due to its focus on technology-related topics (e.g., electronics, automobiles), the dataset is a non-bipartite DyTAG, where Weibo users are nodes with textual features, and an edge represents user interactions at a given time.

#### References
[1] Xiaoqing Zhang, Xiuying Chen, Yuhan Liu, Jianzhou Wang, Zhenxing Hu, and Rui Yan. Sagraph: A large-scale text-rich social graph dataset for advertising campaigns, 2024.528

---

## WeiboDaily
`WeiboDaily` [1] is also a dataset collected from the Weibo social platform, recording user interactions (comments and reposts). Different from WeiboTech, the temporal span ranges from December 1, 2023, to December 31, 2023, and the original dataset [1] focuses on advertising strategies for ABCReading. Thus, WeiboDaily spans a full month and targets daily life topics (e.g., lifestyle sharing), enabling continuous modeling analysis. Similarly, the dataset includes user profiles (e.g., usernames, gender, regions, follower/followee counts, self-introductions) and interaction edges categorized as comment or repost, with edge texts comprising source post content and destination user comments/reposts. The dataset is a non-bipartite DyTAG, where Weibo users are nodes with textual features, and an edge represents user interactions at a given time.

#### References
[1] Xiaoqing Zhang, Xiuying Chen, Yuhan Liu, Jianzhou Wang, Zhenxing Hu, and Rui Yan. Sagraph: A large-scale text-rich social graph dataset for advertising campaigns, 2024.528

---

## Cora
`Cora` is an extended version of the classic citation network dataset Cora [1], documenting academic paper citation relationships. The temporal span ranges from February 1, 1985, to September 1, 2024. The original Cora dataset records citation relationships and node categories [1]. We expand the dataset by crawling first-order and second-order paper information via references, enriching the size of the citation network. Node textual features include paper titles, abstracts, authors, and citation counts. Edge texts are extracted from the exact sentence in the citing paper that references the cited paper. With regards to the edge labels, based on the section name of each citation in the citing paper, they are mapped to five categories: 1) Intro \& Background, 2) Tech \& Methodology, 3) Experiment \& Conclusion, 4) Topic-specific, and 5) Others. The Cora dataset is a non-bipartite DyTAG, where papers are nodes with textual features, and an edge indicates a citation relationship at a given time.

#### References
[1] Prithviraj Sen, Galileo Namata, Mustafa Bilgic, Lise Getoor, Brian Galligher, and Tina Eliassi-Rad. Collective classification in network data. AI magazine, 29(3):93–93, 2008.

---