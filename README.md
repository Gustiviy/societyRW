# societyRW
public discord bot in https://discord.gg/RrksG7GpJD

# changes from old bot
- token in external file
- new better commands coming
- status

# why?
- idk bored
- USEFUL
- kypper

# how to host:

## server setup:
- make channel named *tickets*.
- mod / admin role must have MANAGE_MESSAGES permission in order to do /admin [sub]

## step 1:
- download the required files
- make discord bot (https://discord.com/developers/applications)
- write down (token, client id)
- go to your server and copy the id of the guild ( enable developer mode first)

## step 2:
- install node.js
- install all required libraries (look at import statements)
- (this may not be required, if there are no errors if you run slash.js, youre good)
- if there are import errors just do **npm i [library]** to install it

![image](https://user-images.githubusercontent.com/79268434/166147834-0464e196-bb87-4dca-b1ef-df0c01335d31.png)

(npm i discord.js)

## step 3:

- replace these 2 placeholders with their respective values. (guild id is server id)

![image](https://user-images.githubusercontent.com/79268434/166147409-a50e1d2e-a8cd-41c2-ae65-4184413ec443.png)


- important: place your token here in token.js (anyone can login to your bot with this string, be careful!)

![image](https://user-images.githubusercontent.com/79268434/166147480-10549e5e-bab9-4457-bc32-a5c2232c4efa.png)

## step 4:
- open your command line in the folder
- do **node ./main.js**
- if any issues occur, create an issue on this repo
