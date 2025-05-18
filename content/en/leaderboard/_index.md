---
title: "Leaderboards"
linkTitle: "Leaderboards"
weight: 30
menu:
  main:
    weight: 30
description: >
  Performance rankings of temporal graph learning methods across different datasets.
---

<div class="td-content">
	<h1> Leaderboards </h1>
  <!-- {{ with .Params.description }}<div class="lead">{{ . | markdownify }}</div>{{ end }}
	<header class="article-meta">
		{{ partial "taxonomy_terms_article_wrapper.html" . -}}
		{{ if (and (not .Params.hide_readingtime) (.Site.Params.ui.readingtime.enable)) -}}
			{{ partial "reading-time.html" . -}}
		{{ end -}}
	</header> -->
</div>

For all datasets, we sample 100 negative destination nodes for each positive sample in the test set. All the negative samples are fixed and will be downloaded when using `TGBSeqDataLoader`. See [Get Started](/get-started/) for usage details.

---

## ML-20M {#ml-20m}

{{< table file="ML-20M_leaderboard.md" >}}

## Taobao {#taobao}

{{< table file="Taobao_leaderboard.md" >}}

## Yelp {#yelp}

{{< table file="Yelp_leaderboard.md" >}}

## GoogleLocal {#googlelocal}

{{< table file="GoogleLocal_leaderboard.md" >}}

## Flickr {#flickr}

{{< table file="Flickr_leaderboard.md" >}}

## YouTube {#youtube}

{{< table file="YouTube_leaderboard.md" >}}

## Patent {#patent}

{{< table file="Patent_leaderboard.md" >}}

## WikiLink {#wikilink}

{{< table file="WikiLink_leaderboard.md" >}}
