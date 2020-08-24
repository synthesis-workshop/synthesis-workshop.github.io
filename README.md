# Synthesis Workshop Website

## 1 Running Locally

Whenever you want to make changes, it helps to run the website locally so that you can view your changes before deciding to deploy them. In order to do this, make sure you have completed the following steps:

### 1.1 One-time Setup Tasks

1) Open Terminal on your Mac and generate a public / private ssh keypair on your laptop using the following command using your github e-mail (with quotes):

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

Press "Enter" at each of these prompts to use the default values:

```
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

2) Add the generated public key to your github ssh tokens

In Terminal, run the following command to copy your public key to the clipboard:

`pbcopy < ~/.ssh/id_rsa.pub`

In GitHub, navigate to your profile settings > "SSH and GPG Keys" > "New SSH Key". Give your ssh key a descriptive title "macbook pro - personal" or something like that and past the public key from your clipboard into the box. DO NOT ADD ANY SPACES OR PRESS ENTER OR ANYTHING LIKE THAT.

3) Download and install [Node.js](https://nodejs.org/en/download/). If you already have a terminal open, you will need to close it and open a new one when this installation is done.

4) Clone the repository to your machine. Do this by opening Terminal and run

`cd path/to/where/you/want/the/project`

to navigate to the directory you want to store the project in. Then run

`git clone git@github.com:synthesis-workshop/synthesis-workshop.github.io.git`

to clone the project to your machine.

### 1.2 Starting the project locally

1) Navigate INTO the project directory in Terminal with

`cd path/to/project`

Make sure you include the name of the project directory in this path so that you're inside the project. Verify this by running `ls` and you should see something like the following output:

```
$ ls
> README.md    build        node_modules package.json public       src          yarn.lock
```

2) Once inside the project, make sure you have run the following command at least once to install dependencies:

`yarn install`

3) Start the project

`yarn start`

The project should now be running and you can access the site by navigating your browser to http://localhost:3000

## 2 Making updates to the site

### 2.1 Adding a video

There is a data file `videos.json` located at `/src/shared/videos.json` that contains the information for all of the videos. To add a video, open that file in your favorite text editor and add an entry to the appropriate array. Each video is represented by a curly-bracketted object, such as this:

```
{
    "episodeNumber": 20,
    "displayTitle": "Synthesis of Quinine and Quinidine",
    "videoId": "ulxxfL6X3Ig"
}
```

Make sure to add a comma after the closing brace, because the arrays are comma-separated. Make sure to include the correct episode number, the title you want to display on the site and in the episode directory (follow the same pattern as all the others), and the videoId. You can find the videoId by opening the video in youtube and pulling it from the URL. For example, if the URL is https://www.youtube.com/watch?v=fYhV8nAhlQI, then the videoId is "fYhV8nAhlQI".

### 2.2 Updating Counts

In the same videos.json file, you can also update the counts object to show updated numbers:

```
"counts": {
    "subscribers": "1.12K+",
    "featuredGuests": 6,
    "totalViews": "14.3K+"
}
```

### 2.3 Pushing your changes to the repository

After you have made your changes locally on your machine, you need to push the changes to the repository to keep it up to date. Do this by running the following commands in the Terminal (after you have navigated to the project directory):

```
git add -A
git commit -m "Description of changes made"
git push origin master
```

Now your changes should be pushed up to the repository. Next you need to create a production build of the site and deploy it. Run the following command to create the build:

`yarn predeploy`

Then run the following command to deploy the site to live:

`yarn deploy`

## All set!

After you have done this process once, you should only need to follow the steps in Part 2 of this guide to make any changes you want to make.