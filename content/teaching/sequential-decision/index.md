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

        <div class="glance">

        ## Key information

        - **Next session:** <span data-next-session>see the table of materials</span>.
        - **Projects:** pairs and topic by email by November 4; task 1 done for session 8
          (November 25); notebook due on December 8; defenses at session 10 (December 9).
          [Subject](/teaching/sequential-decision/projects.pdf), [starter notebooks](#projects).
        - **Lab setup:** [setup archive](/teaching/sequential-decision/sequential-decision-setup.zip)
          (current `seqlearn`: version 2026.10.30), [instructions](#setup).
        - **Assessment:** project and written exam; details to come.
        - **Contact:** [igor.colin@esiee.fr](mailto:igor.colin@esiee.fr).
        - **Latest updates:** 30 Oct, the project notebooks check the version of `seqlearn`
          in their first cell; 29 Oct, materials of session 7 and the projects; 28 Oct,
          materials of session 6.

        </div>

        ## Materials

        | Session | Date | Room | Topic | Slides | Handout | Tutorial | Lab |
        |---|---|---|---|---|---|---|---|
        | 1 | <time datetime="2026-10-06T13:00">Tue 6 Oct, 13:00</time> | PER 5403 | The K-armed bandit: regret, Hoeffding's inequality, greedy, epsilon-greedy, explore-then-commit | [pdf](/teaching/sequential-decision/lecture01.pdf) | [pdf](/teaching/sequential-decision/lecture01-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial01.pdf) | [warm-up](/teaching/sequential-decision/lab00.ipynb) · [Colab](/teaching/sequential-decision/lab00-colab.ipynb) |
        | 2 | <time datetime="2026-10-08T09:00">Thu 8 Oct, 9:00</time> | PER 5309 | Optimism: UCB (Labs 1 and 2) | [pdf](/teaching/sequential-decision/lecture02.pdf) | [pdf](/teaching/sequential-decision/lecture02-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial02.pdf) | [ipynb](/teaching/sequential-decision/lab01-02.ipynb) · [Colab](/teaching/sequential-decision/lab01-02-colab.ipynb) |
        | 3 | <time datetime="2026-10-15T09:00">Thu 15 Oct, 9:00</time> | PER 5401 | Thompson sampling and linear bandits | [pdf](/teaching/sequential-decision/lecture03.pdf) | [pdf](/teaching/sequential-decision/lecture03-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial03.pdf) | [ipynb](/teaching/sequential-decision/lab03.ipynb) · [Colab](/teaching/sequential-decision/lab03-colab.ipynb) |
        | 4 | <time datetime="2026-10-26T09:00">Mon 26 Oct, 9:00</time> | PER 5401 | Recap of session 3, Lab 3 and a bandit challenge (Lab 4) | [pdf](/teaching/sequential-decision/lecture04.pdf) | [pdf](/teaching/sequential-decision/lecture04-handout.pdf) |  | [ipynb](/teaching/sequential-decision/lab04.ipynb) · [Colab](/teaching/sequential-decision/lab04-colab.ipynb) |
        | 5 | <time datetime="2026-10-27T13:00">Tue 27 Oct, 13:00</time> | PER 5401 | Contextual bandits, exponential weights and off-policy evaluation | [pdf](/teaching/sequential-decision/lecture05.pdf) | [pdf](/teaching/sequential-decision/lecture05-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial05.pdf) | [ipynb](/teaching/sequential-decision/lab05.ipynb) · [Colab](/teaching/sequential-decision/lab05-colab.ipynb) |
        | 6 | <time datetime="2026-10-28T13:00">Wed 28 Oct, 13:00</time> | PER 5403 | Pure exploration and learning from preferences | [pdf](/teaching/sequential-decision/lecture06.pdf) | [pdf](/teaching/sequential-decision/lecture06-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial06.pdf) | [ipynb](/teaching/sequential-decision/lab06.ipynb) · [Colab](/teaching/sequential-decision/lab06-colab.ipynb) |
        | 7 | <time datetime="2026-10-29T09:00">Thu 29 Oct, 9:00</time> | PER 5309 | Markov decision processes and Q-learning; presentation of the [projects](#projects) | [pdf](/teaching/sequential-decision/lecture07.pdf) | [pdf](/teaching/sequential-decision/lecture07-handout.pdf) | [pdf](/teaching/sequential-decision/tutorial07.pdf) | [ipynb](/teaching/sequential-decision/lab07.ipynb) · [Colab](/teaching/sequential-decision/lab07-colab.ipynb) |
        | 8 | <time datetime="2026-11-25T13:00">Wed 25 Nov, 13:00</time> | PER 5403 | Policy gradient |  |  |  |  |
        | 9 | <time datetime="2026-12-02T13:00">Wed 2 Dec, 13:00</time> | PER 5403 | Preferences and RLHF |  |  |  |  |
        | 10 | <time datetime="2026-12-09T13:00">Wed 9 Dec, 13:00</time> | PER 5403 | Project defenses |  |  |  |  |

        Slides and tutorial sheets are added after each session, lab notebooks on the day
        of the session. The handout is the slides without the animation steps, for
        printing.

        ## Labs

        The labs are Jupyter notebooks in Python. They run on a laptop CPU, or online
        with Google Colab.

        ### Setup

        To run the labs on your laptop:

        1. Download the [setup archive](/teaching/sequential-decision/sequential-decision-setup.zip)
           once and unzip it. It contains `SETUP.pdf`, `seqlearn/` (the Python package used
           in the labs), `environment.yml` and `check_install.py`.
        2. Install the environment as described in `SETUP.pdf`, and run `check_install.py`.
        3. For each lab, download the notebook (column Lab of the table above) and save it in
           the same folder, next to `seqlearn/`.

        ### Google Colab

        Nothing needs to be installed: upload the Colab version of the notebook
        (File > Upload notebook), and run the cells of its section "Framework" first.

        ### Troubleshooting

        <details>
        <summary>A notebook stops with a <code>ModuleNotFoundError</code> on a part of <code>seqlearn</code></summary>

        Most labs need a new version of `seqlearn` (for instance `seqlearn.challenge` for Lab 4).
        Download the setup archive again and replace your `seqlearn/` folder with the new one.
        Your own notebooks are not modified. The project starter notebooks do this
        themselves in their first cell.

        </details>

        <details>
        <summary>Lab 3 stops on <code>ipywidgets</code></summary>

        If you installed the course environment before Lab 3, install the package `ipywidgets`:

        - with Miniforge (option A of `SETUP.pdf`):
          `conda install -n esiee-sequential -c conda-forge ipywidgets`
        - with a virtual environment (option B): activate `.venv` as in `SETUP.pdf`, then
          run `pip install ipywidgets`

        Then restart Jupyter from the course folder.

        </details>

        ## Projects

        The project is done in pairs, on one of the five topics below. The
        [subject](/teaching/sequential-decision/projects.pdf) describes the topics, what is
        expected and the calendar: pairs and topic by email by November 4, task 1 done for
        session 8 (November 25), notebook due on December 8, defenses at session 10
        (December 9). Each topic has a starter notebook, to save next to `seqlearn/`
        (download the setup archive again first: it contains the simulators of the projects,
        in `seqlearn/projects/`).

        | # | Topic | Starter notebook |
        |---|---|---|
        | 1 | Recommendation under drift | [ipynb](/teaching/sequential-decision/project1-drift.ipynb) · [Colab](/teaching/sequential-decision/project1-drift-colab.ipynb) |
        | 2 | Bayesian optimization | [ipynb](/teaching/sequential-decision/project2-bayesopt.ipynb) · [Colab](/teaching/sequential-decision/project2-bayesopt-colab.ipynb) |
        | 3 | Exploration in reinforcement learning | [ipynb](/teaching/sequential-decision/project3-explore.ipynb) · [Colab](/teaching/sequential-decision/project3-explore-colab.ipynb) |
        | 4 | Model arena | [ipynb](/teaching/sequential-decision/project4-arena.ipynb) · [Colab](/teaching/sequential-decision/project4-arena-colab.ipynb) |
        | 5 | Rating the players of a team game | [ipynb](/teaching/sequential-decision/project5-league.ipynb) · [Colab](/teaching/sequential-decision/project5-league-colab.ipynb) |

        ## References

        - T. Lattimore, C. Szepesvári, *Bandit Algorithms*, Cambridge University Press, 2020.
        - A. Slivkins, *Introduction to Multi-Armed Bandits*, Foundations and Trends in Machine Learning, 2019.
        - R. Sutton, A. Barto, *Reinforcement Learning: An Introduction*, 2nd edition, MIT Press, 2018.
        - N. Lambert, *Reinforcement Learning from Human Feedback*, 2025.
    design:
      columns: '1'
      toc: true
---
