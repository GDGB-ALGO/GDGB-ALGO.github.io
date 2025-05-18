---
title: Datasets
linkTitle: Datasets
menu: {main: {weight: 10}}
---
## ML-20M 
**Graph**: `ML-20M`[1] is a widely used benchmark dataset in recommendation research, derived from the MovieLens website. It contains movie rating data, where each record includes the rating score of a user, ranging from 1 to 5, for a specific movie along with the timestamp of the rating. While the ratings represent explicit feedback, we transform this data into implicit feedback for our analysis, following [2]. Consequently, the ML-20M network is represented as a bipartite graph where users and movies serve as nodes, and an edge represents a user's rating of a movie at a given time. 

**Task**: The task is to predict whether a given user will interact with a given item at a given time.

#### References
[1] https://grouplens.org/datasets/movielens/20m/

[2] Xiangnan He, Lizi Liao, Hanwang Zhang, Liqiang Nie, Xia Hu, and Tat-Seng Chua. Neural collaborative filtering. In Proceedings of the 26th international conference on world wide web, pp. 173–182, 2017.

---
## Taobao
**Graph**: `Taobao` [1,2,3,4] is a user behavior dataset derived from the e-commerce platform Taobao. It contains user click data on products from November 25, 2017, to December 3, 2017. The dataset is a bipartite graph where users and products are nodes, and an edge represents a user's click on a product at a given time.

**Task**: The task is to predict whether a given user will interact with a given item at a given time.

#### References
[1] https://tianchi.aliyun.com/dataset/dataDetail?dataId=649

[2] Han Zhu, Xiang Li, Pengye Zhang, Guozheng Li, Jie He, Han Li, and Kun Gai. Learning tree-based deep model for recommender systems. In Proceedings of the 24th ACM SIGKDD international conference on knowledge discovery & data mining, pp. 1079–1088, 2018.

[3] Han Zhu, Daqing Chang, Ziru Xu, Pengye Zhang, Xiang Li, Jie He, Han Li, Jian Xu, and Kun Gai. Joint optimization of tree-based index and deep model for recommender systems. Advances in Neural Information Processing Systems, 32, 2019.

[4] Jingwei Zhuo, Ziru Xu, Wei Dai, Han Zhu, Han Li, Jian Xu, and Kun Gai. Learning optimal tree models under beam search. In International Conference on Machine Learning, pp. 11650–11659. PMLR, 2020.

---
## Yelp
**graph**: `Yelp` [1] is a business review dataset sourced from Yelp, a prominent platform for business recommendations, including restaurants, bars, and beauty salons. It contains user reviews of businesses from 2018 to 2022. The dataset is a bipartite graph where users and businesses are nodes, and an edge represents a user's review of a business at a given time.

**Task**: The task is to predict whether a given user will interact with a given item at a given time.

#### References
[1] https://www.yelp.com/dataset

---
## GoogleLocal
**graph**: `GoogleLocal` [1,2] is a business review dataset derived from Google Maps, with a smaller scale compared to Yelp. It contains user reviews and ratings of local businesses. Following the settings for the ML-20M dataset, we treat these ratings as implicit feedback. The GoogleLocal dataset is a bipartite graph where users and businesses are nodes, and an edge indicates a user's review of a business at a given time.

**Task**: The task is to predict whether a given user will interact with a given item at a given time.

#### References
[1] Jiacheng Li, Jingbo Shang, and Julian J. McAuley. Uctopic: Unsupervised contrastive learning for phrase representations and topic mining. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), ACL 2022, Dublin, Ireland, May 22-27, 2022, pp. 6159–6169, 2022. doi: 10.18653/V1/2022.ACL-LONG.426. 

[2] An Yan, Zhankui He, Jiacheng Li, Tianyang Zhang, and Julian McAuley. Personalized showcases: Generating multi-modal explanations for recommendations. In Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval, pp. 2251–2255, 2023.

---
## Flickr
**Graph**: `Flickr` [1] is a "Who-To-Follow" social network dataset derived from Flickr, a photo-sharing platform with social networking features. 
The dataset was crawled daily from November 2 to December 3, 2006, and from February 3 to March 18, 2007 by [1]. It is estimated to represent 25% of the entire Flickr network. The Flickr dataset is a non-bipartite graph where users are nodes, and an edge represents the friendship established between users at a given time. 

**Task**: The task is to predict whether a given user will follow another specified user at a particular time.

#### References
[1] Meeyoung Cha, Alan Mislove, and Krishna P Gummadi. A measurement-driven analysis of information propagation in the flickr social network. In Proceedings of the 18th international conference on World wide web, pp. 721–730, 2009.

---
## YouTube
**Graph**: `YouTube`[1] is a "Who-To-Follow" social network dataset derived from YouTube, a video-sharing platform that includes a user subscription network. The YouTube dataset is a non-bipartite graph where users are nodes, and an edge indicates the subscription of a user to another user at a given time.

**Task**: The task is to predict whether a given user will follow another specified user at a particular time.

#### References
[1] Alan Mislove, Massimiliano Marcon, Krishna P Gummadi, Peter Druschel, and Bobby Bhattacharjee. Measurement and analysis of online social networks. In Proceedings of the 7th ACM SIGCOMM conference on Internet measurement, pp. 29–42, 2007.

---
## Patent
**Graph**: `Patent`[1] is a citation network dataset of U.S. patents, capturing the citation relationships between patents from 1963 to 1999. The dataset is organized as a non-bipartite graph where patents are nodes, and an edge represents a citation made by one patent to another at the time of publication. 

**Task**: The task is to predict whether a given patent will cite another given patent, given several of their established citations.

#### References
[1] Bronwyn H Hall, Adam B Jaffe, and Manuel Trajtenberg. The nber patent citation data file: Lessons, insights and methodological tools, 2001.

---
## WikiLink
**Graph**: `WikiLink`[1,2] is a web link network dataset derived from Wikipedia, containing the hyperlink relationships between Wikipedia pages. This dataset is a non-bipartite graph, where pages are nodes and edges indicate hyperlinks established from one page to another at a given time. 

**Task**: The task is to predict whether a given page will link to another given page at a given time.

#### References
[1] Paolo Boldi, Bruno Codenotti, Massimo Santini, and Sebastiano Vigna. Ubicrawler: A scalable fully distributed web crawler. Software: Practice and Experience, 34(8):711–726, 2004.

[2] Paolo Boldi, Marco Rosa, Massimo Santini, and Sebastiano Vigna. Layered label propagation: A multiresolution coordinate-free ordering for compressing social networks. In Proceedings of the 20th international conference on World Wide Web, pp. 587–596, 2011.