// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WordListItem, WordList, Grade, School } = initSchema(schema);

export {
  WordListItem,
  WordList,
  Grade,
  School
};