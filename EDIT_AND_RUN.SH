
## Edit this with your own values and run it from   ######### ##
## command line for a quick way to get started.     ######### ##



heroku                          \
    apps:create                 \
    "hn7"                       \



heroku                          \
    addons:create               \
    heroku-postgresql:hobby-dev \
    --version=12                \
    --app  "hn7"                \
    --name "dab-hn7"            \



read -p "[EDIT_AND_RUN:DONE:PRESS_ENTER_TO_EXIT]:"

