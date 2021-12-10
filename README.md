# Create React App Template for Web Applications

This app is set up with:

- Create React App
- Atomic Design
- ECMAScript
- Materia-UI (MUI)
- Context API
- Storybook
- Cypress
- Commitlint

## How to use

To run this app in development against a local Mirage server:

```sh
yarn start
```

To run the React Testing Library tests:

```sh
yarn test
```

To run the Cypress tests:

```sh
yarn cypress:dev
```

## ATOMIC DESIGN

<https://bradfrost.com/blog/post/atomic-web-design/>

### ATOMS

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms
are our HTML tags, such as a form label, an input or a button. Atoms can also
include more abstract elements like color palettes, fonts and even more
invisible aspects of an interface like animations.

Like atoms in nature they’re fairly abstract and often not terribly useful on
their own. However, they’re good as a reference in the context of a pattern
library as you can see all your global styles laid out at a glance.

The smallest represetnation of something in your project. For example, a custom
anchor `<a/>`.

- Text
- Button

### MOLECULES

Things start getting more interesting and tangible when we start combining atoms
together. Molecules are groups of atoms bonded together and are the smallest
fundamental units of a compound. These molecules take on their own properties
and serve as the backbone of our design systems.

For example, a form label, input or button aren’t too useful by themselves, but
combine them together as a form and now they can actually do something together.

Building up to molecules from atoms encourages a “do one thing and do it well”
mentality. While molecules can be complex, as a rule of thumb they are
relatively simple combinations of atoms built for reuse.

A set of Atoms, for exmaple: A label and an input tag together.

- Icon + Text
- Set of Buttons
- Footer

### ORGANISMS

Molecules give us some building blocks to work with, and we can now combine them
together to form organisms. Organisms are groups of molecules joined together to
form a relatively complex, distinct section of an interface.

We’re starting to get increasingly concrete. A client might not be terribly
interested in the molecules of a design system, but with organisms we can see
the final interface beginning to take shape. Dan Mall (who I’m working with on
several projects) uses element collages, which articulate ideas for a few key
organisms to facilitate client conversations and shape the visual direction (all
without having to construct full comps).

Organisms can consist of similar and/or different molecule types. For example, a
masthead organism might consist of diverse components like a logo, primary
navigation, search form, and list of social media channels. But a “product grid”
organism might consist of the same molecule (possibly containing a product
image, product title and price) repeated over and over again.

Building up from molecules to organisms encourages creating standalone,
portable, reusable components.

A set of Molecules, for example: A form, which is a set of labels, inputs and
buttons

- Menu
- Trending List
- Contact Form

### TEMPLATES

At the template stage, we break our chemistry analogy to get into language that
makes more sense to our clients and our final output. Templates consist mostly
of groups of organisms stitched together to form pages. It’s here where we start
to see the design coming together and start seeing things like layout in action.

Templates are very concrete and provide context to all these relatively abstract
molecules and organisms. Templates are also where clients start seeing the final
design in place. In my experience working with this methodology, templates begin
their life as HTML wireframes, but over time increase fidelity to ultimately
become the final deliverable. Bearded Studio in Pittsburgh follow a similar
process, where designs start grayscale and layout-less but slowly increase
fidelity until the final design is in place.

### PAGES

Pages are specific instances of templates. Here, placeholder content is replaced
with real representative content to give an accurate depiction of what a user
will ultimately see.

Pages are the highest level of fidelity and because they’re the most tangible,
it’s typically where most people in the process spend most of their time and
what most reviews revolve around.

The page stage is essential as it’s where we test the effectiveness of the
design system. Viewing everything in context allows us to loop back to modify
our molecules, organisms, and templates to better address the real context of
the design.

Pages are also the place to test variations in templates. For example, you might
want to articulate what a headline containing 40 characters looks like, but also
demonstrate what 340 characters looks like. What does it look like when a user
has one item in their shopping cart versus 10 items with a discount code
applied? Again, these specific instances influence how we loop back through and
construct our system.

## COMMIT PROCESS

We are using Commitlint to improve the quality of the messages for the pushing
process. Use lowercase always.

<https://github.com/conventional-changelog/commitlint>

### OPTIONS

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

Examples:

- `git commit -m "chore: lint on commitmsg"` # passes
- `git commit -m "foo: some message"` # fails
- `git commit -m "fix: some message"` # passes
- `git commit -m "fix: some message that is way too long and breaks the line max-length by several characters"` #
  fails
- `git commit -m "fix: some message"` # passes
