# Freeformers Kickstart/Digi-Links/BLAH

A tiny client-side web-app for filtering a list of resources based on category.

## Contents

* `index.html` - main file, contains Mustache templates used for rendering
* `script.js` - handles logic of filtering resource list based on selections
* `style.css` - any additional styles go here
* `data.json` - JSON file with all the categories and items (see below)

## Tech

This runs entirely on the client side, though you need a tiny web server running
in order for the AJAX-y stuff to work:

```bash
python -m SimpleHTTPServer 8000 .
```

Bootstrap is used for styling, jQuery for DOM manipulation, Mustache for
templating and lodash for general utility.

## Dynamic stuff

We use Mustache for templates because the contents of this app vary depending on
the content in `data.json` -- therefore we have to dynamically build the page up.

The JSON file has two sections:

* `categories`: A list with of the different categories, with their code and name
* `items`: The items to filter down, with the following keys:
    * `categories`: List of one of more category codes relevant to this item
    * `url`: URL for this item
    * `title`: Name of this item
    * `content`: Description of the item

## FAQ

### How do I add new resources?

Update `data.json`.

### I made changes and now the page is blank!

Probably you broke the JSON file's syntax!
