# team_5



## Sprint 8


This sprint involves refining the new games we added last sprint (Farkle and blackjack). For Farkle we added a mode that allows 2 players to play against each other and for blackjack we updated the visuals

## Installation

**Setting up local development environment**

Please refer to the following pdf for instructions on setting up a local development environment: [Local_Dev_Setup](documents/Local_Dev_Setup.pdf) (*Credit goes to Brandon Tu*)

**Setting up software on VM**

To connect to VM, ssh username@sitename, then use password given. Once connected to VM, go to var/wwww/html to see the production site.

To install git and additional software, run the following command to make the installation script executable `chmod +x install.sh`
Then to run the script, `./install.sh`

**Updating webpages**

Code snippets should be added to the appropriate folder (about_snippet), which are then called into the main page, using `include(path/filename)`.

**Adding test cases**

Testing files should be added to the `__test__` folder and follow this naming convention: `<stage><filename>.test.js` for JavaScript. The `<stage>` field is for `pre` (testing during CI) or `post` (testing after deployment).
The `TestSite.php` file is used to add testing functions for php.

**JavaScript code**

JavaScript snippets should be added to the appropriate folder (js), which are then called into the appropriate webpage, using `<script src=<filename>`.

## Usage
Please visit our website: <https://cis4250w24-05.socs.uoguelph.ca>

![Updated Main Page](documents/mainpage8.png "Updated Main Page")
![Farkle](documents/farkleProof.png "updated Farkle")
![BlackJack](documents/pinballproof.png "Added BlackJack")

## Credits

**Brandon** Developer  
**Abdullah** Developer  
**Jacob** Developer  
**Manmeet** Developer    
**Joudi** Developer  
**Jose** Developer  
**Megh** Sprint Lead  

