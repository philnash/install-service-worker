# Ways to install a service worker

In Chrome 54 an experiment started to provide different ways to install a service worker. This repo has examples of the three ways you can install a service worker.

## Run the project

You'll need Node.js to run the project. Then:

Clone the repo, install the dependencies and run the app.

```bash
$ git clone https://github.com/philnash/install-service-worker.git
$ cd install-service-worker
$ npm install
$ node index.js
```

## Enable the experiment

You will currently need [Chrome Canary](https://www.google.co.uk/chrome/browser/canary.html) to try this experiment. And you will need to turn on experimental web platform features. Open chrome://flags in Canary and enable "Experimental Web Platform Features".

![Find the setting on the Chrome flags page to enable "Experimental Web Platform Features"](https://monosnap.com/file/k2csImcZhhVtcOVgDn1BBu1Bvy60qC.png)

## Test out the feature

Now you can visit [http://localhost:3000](http://localhost:3000), click to each of the experiments and check out the code that powers them.
