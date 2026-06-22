---
title: Teaching
summary: My courses and lab sessions
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: markdown
    content:
      text: |-
        ## Formation Machine Learning

        **Travaux pratiques (notebooks Jupyter).**
        Trois TP en Python, à faire dans l'ordre. Chaque notebook est une version
        « étudiant » avec des blocs `# A COMPLETER` à remplir. Téléchargez le fichier
        (clic droit, enregistrer le lien) puis ouvrez-le avec Jupyter.

        - **TP0 : Prise en main Python** (optionnel) : Python, NumPy, Matplotlib,
          pandas et un premier modèle scikit-learn de bout en bout.
          [Télécharger le notebook](/teaching/formation-ml/tp0_intro_python_etudiant.ipynb)
          · [corrigé](/teaching/formation-ml/tp0_intro_python_corrige.ipynb)
        - **TP1 : Apprentissage supervisé** : kNN, régression linéaire, perceptron
          codé à la main, LDA/QDA vs régression logistique, évaluation (ROC/AUC),
          pipeline sur tabulaire / images / texte.
          [Télécharger l'archive](/teaching/formation-ml/tp1_apprentissage_supervise.zip)
        - **TP2 : Apprentissage non supervisé** : K-means et compression d'image,
          PCA, puis modules à la carte (détection d'anomalies, NMF, réseaux de
          neurones, clustering spectral).
          [Télécharger le notebook](/teaching/formation-ml/tp2_non_supervise_etudiant.ipynb)

        Environnement : `numpy`, `scikit-learn`, `matplotlib`, `pandas`, et `torch`
        pour le TP2. Tout tourne hors ligne sur CPU.
    design:
      columns: '1'
---
