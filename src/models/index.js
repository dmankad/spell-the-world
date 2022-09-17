// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Guess, Attempt, WordListItem, WordList, Grade, School } = initSchema(schema);

export {
  Guess,
  Attempt,
  WordListItem,
  WordList,
  Grade,
  School
};