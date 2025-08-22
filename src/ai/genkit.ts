
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {googleCloud} from '@genkit-ai/google-cloud';

// Note: The genkit init must be a synchronous function.
//
// This is because it is run when the server starts, and we can't
// block the server startup on an async function.
export const ai = genkit({
  plugins: [
    googleAI({
      // We recommend using project-level credentials for Google Cloud.
      //
      // This is the most secure way to authenticate, and it is the
      // default for all Google Cloud services, including Genkit.
      //
      // You can find more information about how to authenticate with
      // Google Cloud here:
      //
      // https://cloud.google.com/docs/authentication/production
      //
      // If you are developing locally, you can use the Google Cloud
      // CLI to authenticate:
      //
      // gcloud auth application-default login
      //
    }),

    // The Google Cloud plugin is used to store traces in Google
    // Cloud Logging.
    googleCloud(),
  ],

  // Where to store traces.
  traceStore: 'googleCloud',

  // By default, Genkit will log to the console. You can turn this
  // off by setting `logLevel` to `silent`.
  logLevel: 'debug',

  // You can also specify a different log sink.
  // logSinks: [ new MyLogSink() ],
});
