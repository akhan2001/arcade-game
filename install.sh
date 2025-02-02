#!/bin/bash

# Check if Git is already installed
if command -v git &>/dev/null; then
    echo "Git is already installed. Exiting."
    exit 0
fi

sudo apt install -y git
git --version
echo "Git has been successfully installed."

git clone "https://gitlab.socs.uoguelph.ca/cis4250_w24/team_5.git"

echo "Git lab directory has been cloned"


#Make it executable with this command, "chmod +x install.sh"
#In order to execute, run this command, "./install.sh"