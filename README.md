Milton High School Job Board
===
A static page generated using [Middleman](http://middlemanapp.com/).  This page displays advertisements for job opportunities for Milton High School students.

## Setting Up Middleman

### Install Ruby and RubyGems
_**Mainly for Windows computers.** If you are on a Mac or Linux computer, you probably already have Ruby.  Run `ruby --version` in a Terminal to verify it is installed correctly._

1. Download RubyInstaller 1.9.3 and the Development Kit from [this webpage](http://rubyinstaller.org/downloads/)
2. Run RubyInstaller 1.9.3 first.
    * When prompted, check the boxes to "Add Ruby variables to your PATH" and "Associate .rb and .rbw files with this Ruby installation."
3. Open a Command Prompt and make sure Ruby was installed correctly by running `ruby --version`
4. Extract the DevKit by double-clicking it.  Put it somewhere safe (ideally, `C:\DevKit`)
5. In Command Prompt, run:
    
    `chdir C:\DevKit`
    
    `ruby dk.rb init`
    
    `ruby dk.rb install`

### Install Middleman

1. In Terminal (or Command Prompt, I will use these interchangeably), run `gem install middleman`
2. Your screen should start installing packages from RubyGems.
3. Once it is finished (successfully, I hope!), run `middleman version`.  The version number of Middleman should print out.

## Set up this project
1. Point the terminal to this directory (using `cd` or `chdir`)
2. Run `bundle install`

## Testing Using Middleman
Run `middleman server` and open a web browser.  Go to `http://0.0.0.0:4567` (same as `http://localhost:4567`).

## Publishing Using Middleman
Run `middleman build`.
Files will appear in the `build` directory.

Adding a new advertisement
---
Edit `data/companies.yaml` and add an identifier for the new advertisement you are creating. They should be added in YAML list format. For example, if I was adding a posting for a company called "Code Team One" (the second listing):

    jobs_postings:
      - stackpushers
      - codeteamone
      
The listing entry must be indented by two spaces, followed by a dash (-) and then a space and then your identifier. _Note: postings show up in the order in the list above._

In `data/pages/` create a new YAML file that matches the name of the identifier exactly.  For example: `codeteamone.yaml`

In YAML, types are automatically determined (String, number, etc).   However, commas, colons, and dashes can affect autodetected Strings, so you should put any fields that contain these in single quotes.  Other issues with YAML should be addressed by using [this guide](http://www.yaml.org/YAML_for_ruby.html#strings).

The YAML file should conform to this format:
    
    name: Code Team One
    job_desc: 'Code Team One is looking for a web developer with experience in Ruby, HTML5, CSS3, and Javascript.  Knowing Middleman is a plus!' # Good practice to quote this.
    requirements: # Two space indented list
      - HTML5
      - CSS3
      - Javascript
      - Ruby
      - Middleman
    howtoapply: 'To apply, please call 555-1212 or visit http://codeteamone.fake' # Note, you can put HTML code here (or anywhere).
    contact: # all fields are optional
      company: Code Team One Hiring
      name: Bob Jones
      position: Internship Hiring Manager
      phone: 404-555-1234
      address: '13122 Coder Drive, Atlanta, GA 30322'
      website:
        url: http://codeteamone.fake/
        display_name: http://codeteamone.fake/

After creating your YAML file, test it using the Middleman server, and then build and deploy to Github Pages.