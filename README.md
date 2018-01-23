# Project Title

Training template.

## Installing

A step by step series of examples that tell you have to get a development env running

Copy repository from git and enter it

```
git clone https://github.com/shooter3/template.git
cd template/
```

Open template in text editor (atom)

```
atom .
```

Install required dependencies for client

```
cd client/
npm install
```

Start task manager

```
gulp watch:css
```

Install required dependencies for server

```
cd ../server/
npm install
```

Start app

```
node index.js
```

## Server

Server is only serving only 'index.html' at path 'template/client/index.html', and static files at path 'template/client/static'

## HTML

All html code goes into file named 'index.html' in folder 'template/client'

## JS

All javascript code goes into file named 'index.js' in folder 'template/client/static'

## CSS

All styles are inside folder 'template/client/styles'.

All '.scss' files are included into one file named 'interface.scss'.

```
@import 'globals';
@import 'root';
```

Adding a new '.scss' component:

1. Create a new file for desired component.
(e.g. for article component create file named 'article.scss' inside 'template/client/styles/components' folder)

2. Include the file into 'interface.scss'

```
@import 'components/article.scss'
```

3. Write all styles related to article component into the 'article.scss' file.

```
article
{
    height: ...;
    width: ...;
}
```

## Moving around in cli

Few commands used to move around in cli.

### Use tab to autocomplete

e.g. Pro + tab Projects if Projects exists

### Show folder content

```
ls
```

### Move around

Moves you to root
```
cd
```

Moves you to desired folder
```
cd name-of-folder/
```

Moves you one step back
```
cd ../
```

### Create new

Folder
```
mkdir name-of-folder
```

File
```
touch name-of-file.extension
```

### Other

Delete file
```
rm name-of-file
```

Delete folder
```
rm -r name-of-folder/
```
