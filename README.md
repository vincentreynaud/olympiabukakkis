# Olympia Bukkakis

Hi! this is the documentation page for [Olympia Bukkakis' Website](https://olympiabukkakis.com/). Find bellow all the information you need to use and update the website. 

##### For a non-programmer tutorial on Github you can have a look at this article: [A Dead Simple Intro to GitHub for the Non-Technical](https://medium.com/crowdbotics/a-dead-simple-intro-to-github-for-the-non-technical-f9d56410a856)

## Contributing new content on `master-source`

### Branches

The website updates you make happen on the [olympiabukkakis repository](https://github.com/vincentreynaud/olympiabukkakis/tree/master-source) in the `master-source` branch. The `master` branch (always the default one when you get to the github repository) is reserved for the final version of the website, i.e. the one that the live site reads from. 

##### Please make sure that you are always on the `master-source` branch when making new contributions!! 
New contributions on the `master` branch will most likely be ineffective and at worst generate bugs.

![branch selection](./static/branch-readme-pic.png)


### Folders

Updating the website's content will happen in 2 places: the `pages` folder, which contains the textual information in Markdown format, and the `images` folder where you will place the visual content. The website is then generated taking the content you provided, passing it through templates, and rendering it into web pages.

### Content requirements

#### Image formats

For images across the whole website, use either `jpg` or `png`

#### General naming conventions

Please use the following naming conventions for new files you add:

- all lower case
- no spaces, dashes instead

Example file names:

```
gender-euphoria.md
gender-euphoria-04.jpg
```

## Images

### Placing images

Under `src/images` are folders dedicated to the relevant sections of the website:

```
src
└── images
   ├── events
   └── work
```

Place new images in their respective sections.

### Naming pattern

Name the images following our [naming conventions](#General-naming-conventions) and following this pattern:

```
[event or work id]-[image number].[extension]
```

For example:
```
gender-euphoria-02.jpg
```

The id you write in the `md` document's frontmatter (see [bellow](#Frontmatter)) **must** correspond to the id you use for naming the image, otherwise the images will not be found. 

#### Numbering

Please write the numbering with always 2 digits, so for example `01` instead of `1`

For example:
```
gender-euphoria-01.jpg 
gender-euphoria-02.jpg
gender-euphoria-03.jpg
gender-euphoria-04.jpg
gender-euphoria-05.jpg
```

## Markdown

Markdown is an easy-to-read, easy-to-write plain text formatting syntax. It allows you to quickly draft a document with some basic structure which we then use to generate the website's pages.
The files in Markdown format end with `.md`.

### Naming `md` files

Under `src/pages` you can find folders dedicated to the relevant sections of the website:

```
src
└── pages
    ├── events
    │   ├── melt-festival.md
    │   └── queens-against-borders-x.md
    └── work
        ├── gender-euphoria.md
        ├── get-fucked.md
        ├── makeup-tutorial.md
        ├── queens-against-borders.md
        ├── tales-from-a-state-of-shemergency.md
        └── work-on-progress.md
```

Again, name the files following our [naming conventions](#General-naming-conventions). A good practice is to name your files the same way you write the id in their frontmatter.

### Writing `md` files

For a quick and easy guide on how to write Markdown, checkout the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). I recommend that you use [CodiMD](https://demo.codimd.org/) to write your documents in Markdown and have a direct view on how the syntax is rendered on a web page. It will help spot mistakes easily.

#### Frontmatter

The frontmatter is a section at the top of the Markdown file that is used to store additional information, for example the document title, the date, etc. This information is used to generate the pages and render their content. 
##### Please be careful of entering these entries without misspellings and by respecting the markdown syntax carefully (i.e. the special characters `:` and `"`).

For example the frontmatter for a file in `src/pages/work` might look like this:

```
---
type: "work"
title: "Work on Progress"
id: "work-on-progress"
startDate: "2019-06-20"
endDate: ""
description: "A performative manifesto presented as part of The Present is Not Enough festival at Hebbel am Ufer (HAU)" 
video: ""
photographer: "Vincent Reynaud"
---
```

The most crucial entries are the `type` and `title` ones, that are used notably for automatically generating the pages' urls.

As an example:
The file `work-on-progress.md` with `type: "work"` and `title: "Work on Progress"` will generate a page under the url https://olympiabukkakis.com/work/work-on-progress/

If these entries are entered incorrectly they will generate bugs and crash the build process for the website. Misspellings in other entries won't necessarily crash the website but will simply appear in the rendered website.

**The titles per section need to be unique, in order for the site to differentiate between different documents**.

#### Pages content

The content following the frontmatter can be written in plain text, and you can freely use the [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to format the content.

#### Dates

Dates need to be written following the [ISO Standard](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) `YYYY-MM-DD`. They are automatically processed and displayed in the desired format.

An example for `27 December 2019`:
```
2019-12-27
```

#### Frontmatters by file type

##### About

```
---
type: "about"
photographer: "Henry Laurisch"
---
```

Change the photographer's name if the photo changes.

##### Work

```
---
type: "work"
title: "Work on Progress"
id: "work-on-progress"
startDate: "2019-06-20"
endDate: ""
description: "A performative manifesto presented as part of The Present is Not Enough festival at Hebbel am Ufer (HAU)" 
video: ""
photographer: "Vincent Reynaud"
---
```

| Entry          | Description                                                 | Content                                                              | Required |
|----------------|-------------------------------------------------------------|----------------------------------------------------------------------|----------|
| `type`         | Type of the document                                        | `work`                                                               | yes      |
| `title`        | Display title                                               | Anything you want to call it                                         | yes      |
| `id`           | The identifier used to find the page's pictures             | Must be unique (not already used), lower case with dashes, no spaces | yes      |
| `startDate`    | Start date of the project                                   | Date in the format mentioned [above](#Dates)                         | yes      |
| `endDate`      | End date of the project. If empty, Only start date is shown | Date in the format mentioned [above](#Dates)                         | no       |
| `description`  | Short preview of the project shown on the homepage          | A sentence                                                           | no       |
| `video`        | Video document                                              | Valid url to a youtube or vimeo video                                | no       |
| `photographer` | Photo credit                                                | Name of the photographer                                             | no       |


To leave an entry empty, leave a `""`, for example:

```
endDate: ""
```

##### Events

```
---
type: "event"
title: "Melt Festival"
id: "melt"
date: "2019-07-19"
time: ""
venue: "Ferropolis"
description: "Hosting at the Garden of Porn by Pornceptual" 
link: "https://www.facebook.com/events/195368511155813/"
artwork: "Severus Heyn"
---
```
| Entry         | Description                                           | Content                                                              | Required |
|---------------|-------------------------------------------------------|----------------------------------------------------------------------|----------|
| `type`        | Type of the document                                  | `event`                                                              | yes      |
| `title`       | Display title                                         | Anything you want to call it                                         | yes      |
| `id`          | The identifier used to find the page's pictures       | Must be unique (not already used), lower case with dashes, no spaces | yes      |
| `date`        | Date of the event                                     | Date in the format mentioned [above](#Dates)                         | yes      |
| `time`        | Time of the event                                     | Write it the way you want to see it shown                            | no       |
| `venue`       | Event venue                                           | Valid url to a Youtube or Vimeo video                                | yes      |
| `description` | Short preview of the project shown on the events page | A sentence                                                           | yes      |
| `link`        | Event link shown at `More info...`                    | Valide url to the event page (possibly on facebook)                  | yes      |
| `artwork`     | Event artwork credit                                  | Name of the designer                                                 | no       |


### Notes on Markdown syntax

For a complete documentation on the Markdown syntax, please refer to the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

#### Line breaks

In plain text (i.e. the text you write without any particular markdown syntax), the syntax to print a new line is to add 2 spaces at the end of your current line.

Example: all the following lines (except for the last one) **end with 2 spaces**:

```
electronic dance floor
soft performative interventions
female gaze video productions
```

electronic dance floor  
soft performative interventions  
female gaze video productions

If you want a bigger break between lines you can use the [horizontal rule](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#horizontal-rule) syntax `---`. Note that you need to have a line break before and after this element. On the lecken website we removed the line that you see bellow so that they appear only as spaces.

Example:

```
electronic dance floor

---

soft performative interventions

---

female gaze video productions
```

electronic dance floor

---

soft performative interventions

---

female gaze video productions


#### Backlash Escapes

Markdown allows to use a backslash to generate literal characters which would otherwise have a special meaning in Markdown’s formatting syntax. Use a backlash just before the character you need to 'escape'.

```
\*literal asterisks\*
```

\*literal asterisks\*

Markdown provides backslash escapes for the following characters:

```
\ backslash
` backtick
* asterisk
_ underscore
{} curly braces
[] square brackets
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
```

You will notice that some of these characters sometimes get away with not having a backlash escape, for example when they are in the middle of a paragraph. You will always be able to spot an transcription error using the editor we suggested [CodiMD](https://demo.codimd.org/).

## Feedback

Let me know if some parts of our documentation are unclear or if something is missing ;)
