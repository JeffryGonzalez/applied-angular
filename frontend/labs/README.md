# Labs for Applied Angular

If you could really learn by just watching someone code, all it would take to be a great programmer is a YouTube Premium or Udemy subscription.

You have to do it. You have to struggle, succeed, fall apart, cry in the shower, then get back at it and have a brief intense moment of joy enough to keep you going through the next grief/shower-crying cycle.

Do these labs _up to the point_ you want to cry in the shower. Remember, this is "Fake", nobody is going to be mad at you if your code sucks, doesn't work quite right, whatever. The point is to stretch and learn, and then experiment.

## Choose Your Own Adventure

The point of these labs is _not_ for me to force you to do some things so you get some kind of gold sticker for following directions. They are meant to be "prompts" to help you find what you need to get good at applying Angular.

Take as little or as much time with each one as you think is beneficial. If you are really trying to get good at "design", spend more time (after a thing works) making it look right, whatever inspires you.

## There is (almost) no such thing as "cheating"

I want you to do the work, but you can ask me or even other people questions. You can google (or Bing, or whatever), I don't care if you use Github CoPilot. But remember, the point isn't to get "done", it's to learn.

## My Intentions With This Course and These Labs

I want you to practice "inside out" development. In other words, if the first thing you do is create services, stores, etc. and you don't 100% know what you are doing already, you can easily create a mess.

- _Start With the UI_ - that is the most important thing in Angular. "How will express this to our customer?". Create "mockups" in templates that have fake data, don't do anything at all. Progress to making it less "fake" until you think you "Have it".

- _Generalize_ after you have something you've got down. Create child components, create services, decide to use formal state management, etc.

  - Note: I _really_ suggest you do this _all the time_. Resist the temptation to think "Oh, this is close enough to what this other person on my team did" and just copy and paste and tweak some code you don't understand. You might _think_ it is faster, your lead or whatever might think that too, but just look at them and smile and do your thing. They will all be happy - and so will - with the results. \*\*Most frustration in coding isn't a "skills issue", it is you are using someone else's ideas of how something should work even when it isn't the right thing or you don't understand it. Remember your job isn't an "Angular Developer", it's an "Application Developer" in your company that applies Angular to create business value. You are not a paid typist or copy-pasta.

- _Pay Attention To State_ and data flow. Get good at `inputs`, `signals`, and experiment with the control flow syntax in templates. Try (in these labs) to find excuses to use `@for`, `@if`, `@switch`. You want these in your toolbox for when you need them.
  - Create `computed` fields for weird things nobody will care about, even if it isn't in the lab.
    - How many pages of books were written in each century?
    - Can I show if the current value of the counter is a prime number or not?
    - You all write _very important code_ for a living where you have to "stick to requirements" and deal with _process_. This ain't that. Have fun.
    - If you have a lightbulb moment on _anything_ revel in that for a bit. See you if you can use that insight in other ways _even if it doesn't make sense_.

## Some Lab Suggestions / Options

Read through these, and take a guess at where you should start, based on what interests you, and where your previous skills are. You can even make something up that I didn't suggest here \*\*as long as you are practicing "applying" Angular from the inside-out. Start at the UI, grow "out" from there into services, other components, directives, state management, etc.

I'm listing out each of my suggestions in order of increasing challenge, though each option has levels in it, and you can do as little or as much as you feel you are able/need to.

### Option 1 - Counter [Counter Lab](./options-counter.md)

We did a little of this in class, but it's a good way to get going, I think. No API stuff (unless you want to), about Signals primarily, and "Lifting State" (a technique for working from the inside out).

### Option 2 - Books [Books Lab](./option-books.md)

This is harder, but more "real". Involves API. Will require (at some level) formal state management.

### Option 3 - The Issue Tracker

We have the mockup from class for our Issue Tracker. I did a bit more on the "begin" component. Pick some of those modes from the mockups and create components for them.

See if you can introduce the "application layer" stuff - how we expect our user to progress through the "steps".

How will you manage the state for that "saga" of a user creating an issue? (Hint, it wouldn't be in the FeatureStore we have for their software).

### Option 4 - Fix Issues in the Classroom App

Some examples:

- The routing is ganky.

  - Can we indicate in the nav bar which route is the "active route" some visual way? So if they are on the `/students` route, it will be highlighted, and if they are on the `/labs` route, it will be highlighted?
  - Can we hide the dashboard link on the nav bar until the user is verified?
  - Can we make that nav-bar show children links and make them work?
    - That unused child thing.
  - Urgent: We need the sidebar navigation to match the top menu! It has Tacos in it!

- There is an Accessibility issue about the links and how they are displayed. I took a stab at it already and created a directive to generalize it. We should make sure that is used and applied wherever we show something that is a link.

- It seems like just about every component we navigate to has some random "header" like thing at the top. They are all different. Can we formalize that? Maybe make a "PageHeader" component and use that across the application?

- What else can you find? You do not need to create Github issues - just do it.

### Option 4.a - Code Cleanup

I installed prettier and gave it some basic rules. (in the `.prettierrc.json` file).

Go to a terminal and type "ng lint".

This will give you a list of the issues that prettier found. See which ones you can fix.

If you don't like a certain rule, or want to add more, add it to your pull request.
