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
        | 1 | The K-armed bandit: regret, Hoeffding's inequality, greedy, epsilon-greedy, explore-then-commit | [slides](/teaching/sequential-decision/lecture01.pdf) · [handout](/teaching/sequential-decision/lecture01-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial01.pdf) · [warm-up notebook](/teaching/sequential-decision/lab00.ipynb) ([Colab](/teaching/sequential-decision/lab00-colab.ipynb)) |
        | 2 | Optimism: UCB | [slides](/teaching/sequential-decision/lecture02.pdf) · [handout](/teaching/sequential-decision/lecture02-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial02.pdf) · [Labs 1 and 2 notebook](/teaching/sequential-decision/lab01-02.ipynb) ([Colab](/teaching/sequential-decision/lab01-02-colab.ipynb)) |
        | 3 | Thompson sampling and linear bandits | [slides](/teaching/sequential-decision/lecture03.pdf) · [handout](/teaching/sequential-decision/lecture03-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial03.pdf) · [Lab 3 notebook](/teaching/sequential-decision/lab03.ipynb) ([Colab](/teaching/sequential-decision/lab03-colab.ipynb)) |
        | 4 | Recap of session 3, Lab 3 and a bandit challenge (Lab 4) | [slides](/teaching/sequential-decision/lecture04.pdf) · [handout](/teaching/sequential-decision/lecture04-handout.pdf) · [Lab 4 notebook](/teaching/sequential-decision/lab04.ipynb) ([Colab](/teaching/sequential-decision/lab04-colab.ipynb)) |
        | 5 | Contextual bandits, exponential weights and off-policy evaluation | [slides](/teaching/sequential-decision/lecture05.pdf) · [handout](/teaching/sequential-decision/lecture05-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial05.pdf) · [Lab 5 notebook](/teaching/sequential-decision/lab05.ipynb) ([Colab](/teaching/sequential-decision/lab05-colab.ipynb)) |
        | 6 | Pure exploration and learning from preferences | [slides](/teaching/sequential-decision/lecture06.pdf) · [handout](/teaching/sequential-decision/lecture06-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial06.pdf) · [Lab 6 notebook](/teaching/sequential-decision/lab06.ipynb) ([Colab](/teaching/sequential-decision/lab06-colab.ipynb)) |
        | 7 | Markov decision processes and Q-learning; presentation of the projects | [slides](/teaching/sequential-decision/lecture07.pdf) · [handout](/teaching/sequential-decision/lecture07-handout.pdf) · [tutorial sheet](/teaching/sequential-decision/tutorial07.pdf) · [Lab 7 notebook](/teaching/sequential-decision/lab07.ipynb) ([Colab](/teaching/sequential-decision/lab07-colab.ipynb)) · [projects](#projects) |
        | 8 | Policy gradient | |
        | 9 | Preferences and RLHF | |
        | 10 | Project defenses | |

        The slides and tutorial sheets of each session are added after the session, the
        lab notebooks on the day of the session.

        ## Labs

        The labs are Jupyter notebooks in Python. They run on a laptop CPU, or online
        with Google Colab.

        To run them on your laptop, download the
        [setup archive](/teaching/sequential-decision/sequential-decision-setup.zip) once and
        unzip it. It contains `SETUP.pdf` (installation page, to read first), `seqlearn/`
        (the Python package used in the labs), `environment.yml` and `check_install.py`.
        Then download the notebook of each lab from the line of its session above, and save
        it in the same folder, next to `seqlearn/`.

        On Google Colab, nothing needs to be installed: upload the Colab version of the
        notebook (File > Upload notebook), and run the cells of its section "Framework"
        first.

        ### Updating `seqlearn`

        Most labs need a new version of `seqlearn`. If a notebook stops with
        a `ModuleNotFoundError` on a part of `seqlearn` (for instance `seqlearn.challenge`),
        download the setup archive again and replace your `seqlearn/` folder with the new one. Your own notebooks are
        not modified.

        Lab 3 also needs the package `ipywidgets`. If you installed the course environment
        before Lab 3, install it:

        - with Miniforge (option A of `SETUP.pdf`):
          `conda install -n esiee-sequential -c conda-forge ipywidgets`
        - with a virtual environment (option B): activate `.venv` as in `SETUP.pdf`, then
          run `pip install ipywidgets`

        Then restart Jupyter from the course folder.

        ## Projects

        The project is done in pairs, on one of the five topics below. The
        [subject](/teaching/sequential-decision/projects.pdf) describes the topics, what is expected and the calendar.
        Each topic has a starter notebook, to save next to `seqlearn/` (download the setup
        archive again first: it contains the simulators of the projects, in
        `seqlearn/projects/`).

        | Topic | | Starter notebook |
        |---|---|---|
        | 1 | Recommendation under drift | [notebook](/teaching/sequential-decision/project1-drift.ipynb) ([Colab](/teaching/sequential-decision/project1-drift-colab.ipynb)) |
        | 2 | Bayesian optimization | [notebook](/teaching/sequential-decision/project2-bayesopt.ipynb) ([Colab](/teaching/sequential-decision/project2-bayesopt-colab.ipynb)) |
        | 3 | Exploration in reinforcement learning | [notebook](/teaching/sequential-decision/project3-explore.ipynb) ([Colab](/teaching/sequential-decision/project3-explore-colab.ipynb)) |
        | 4 | Model arena | [notebook](/teaching/sequential-decision/project4-arena.ipynb) ([Colab](/teaching/sequential-decision/project4-arena-colab.ipynb)) |
        | 5 | Rating the players of a team game | [notebook](/teaching/sequential-decision/project5-league.ipynb) ([Colab](/teaching/sequential-decision/project5-league-colab.ipynb)) |

        ## References

        - T. Lattimore, C. Szepesvári, *Bandit Algorithms*, Cambridge University Press, 2020.
        - A. Slivkins, *Introduction to Multi-Armed Bandits*, Foundations and Trends in Machine Learning, 2019.
        - R. Sutton, A. Barto, *Reinforcement Learning: An Introduction*, 2nd edition, MIT Press, 2018.
        - N. Lambert, *Reinforcement Learning from Human Feedback*, 2025.
    design:
      columns: '1'
---
