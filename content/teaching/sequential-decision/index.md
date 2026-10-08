---
title: Sequential Decision
summary: Bandits, reinforcement learning and learning from preferences (ESIEE Paris, 5th year, 2026-2027)
type: landing

sections:
  - block: markdown
    content:
      title: Sequential Decision
      text: |-
        **ESIEE Paris, 5th year (work-study program), 2026-2027.**

        A system learns sequentially when its decisions determine the data it observes
        next: recommending an article, setting a price, choosing the answer of an
        assistant. The course starts with multi-armed bandits, where the whole problem
        is the trade-off between exploration and exploitation, then moves to
        reinforcement learning, and ends with the alignment of language models from
        human preferences. It consists of 10 sessions of 3 hours, each combining a
        lecture, a tutorial and a lab. All materials are in English.

        ## Materials

        | Session | Topic | Materials |
        |---|---|---|
        | 1 | The K-armed bandit: regret, Hoeffding's inequality, greedy, epsilon-greedy, explore-then-commit | [slides](/teaching/sequential-decision/lecture01.pdf) · [handout](/teaching/sequential-decision/lecture01-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial01.pdf) · [lab folder](/teaching/sequential-decision/sequential-decision-labs.zip) |
        | 2 | Optimism: UCB | [slides](/teaching/sequential-decision/lecture02.pdf) · [handout](/teaching/sequential-decision/lecture02-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial02.pdf) · [lab folder](/teaching/sequential-decision/sequential-decision-labs.zip) |
        | 3 | Thompson sampling and linear bandits | |
        | 4 | Pure exploration, experimental design and Gaussian processes | |
        | 5 | Exponential weights and off-policy evaluation | |
        | 6 | Learning from preferences | |
        | 7 | Markov decision processes and Q-learning | |
        | 8 | Policy gradient | |
        | 9 | Preferences and RLHF | |
        | 10 | Projects | |

        The materials of each session are added after the session.

        ## Labs

        The labs are Jupyter notebooks in Python. They run on a laptop CPU, or online
        with Google Colab.

        [Download the lab folder](/teaching/sequential-decision/sequential-decision-labs.zip)
        (zip archive). It contains:

        - `SETUP.pdf`: installation page, to read first;
        - `lab01-02.ipynb`: Labs 1 and 2 (naive strategies and UCB), and `lab00.ipynb`,
          an optional warm-up on Python, numpy and matplotlib;
        - a `-colab` version of each notebook, which runs on Google Colab without
          installation;
        - `seqlearn/`, the Python package used in the labs, `environment.yml` and
          `check_install.py`.

        ## References

        - T. Lattimore, C. Szepesvári, *Bandit Algorithms*, Cambridge University Press, 2020.
        - A. Slivkins, *Introduction to Multi-Armed Bandits*, Foundations and Trends in Machine Learning, 2019.
        - R. Sutton, A. Barto, *Reinforcement Learning: An Introduction*, 2nd edition, MIT Press, 2018.
        - N. Lambert, *Reinforcement Learning from Human Feedback*, 2025.
    design:
      columns: '1'
---
