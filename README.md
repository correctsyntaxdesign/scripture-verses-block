# Scripture Verses Block

Simple Wordpress plugin providing a Gutenburg block to add Scripture verses to your WordPress posts and pages.

Unlike other plugins, this plugin assumes you "bring-your-own" verses, as in you are expected to copy and paste the verses you want into this block.

The advantage is that the resulting page loads faster since this plugin makes no third-party API calls to retrieve verses, is lightweight and doesn't depend on any other services in order to function properly.


# Usage

Zip the repo contents and install just like any other Wordpress plugin. You should then find a new Gutenburg block in the editor called, "Scripture Verses".

The block can be used a few different ways:

- Multiple verses in the same block (e.g: a full chapter)
- Multiple blocks with a verse in each

Since the Scripture Verses block is made up of the Wordpress core Paragraph blocks, you can have as many verses within one block as you like.


# Development

- Clone this repository into the plugin's directory of your local WordPress environment.
- On the command line, `cd` into this plugin's folder
- Create a new branch to develop on
- Run `npm start` to compile the block for development, and watch for changes.
- When your happy with your changes, you can run `npm run build` to compile the block for production


# Contributing

Ideas, bug reports and pull requests are always welcome!


# License

Licensed under the GPL-2.0 license.
