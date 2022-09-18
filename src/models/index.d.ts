import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type GuessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttemptMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WordListItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WordListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GradeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Guess {
  readonly id: string;
  readonly attemptID: string;
  readonly dateGuessed?: string | null;
  readonly word?: string | null;
  readonly guess?: string | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Guess, GuessMetaData>);
  static copyOf(source: Guess, mutator: (draft: MutableModel<Guess, GuessMetaData>) => MutableModel<Guess, GuessMetaData> | void): Guess;
}

export declare class Attempt {
  readonly id: string;
  readonly user?: string | null;
  readonly dateStarted?: string | null;
  readonly wordlistitemID: string;
  readonly Guesses?: (Guess | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Attempt, AttemptMetaData>);
  static copyOf(source: Attempt, mutator: (draft: MutableModel<Attempt, AttemptMetaData>) => MutableModel<Attempt, AttemptMetaData> | void): Attempt;
}

export declare class WordListItem {
  readonly id: string;
  readonly word?: string | null;
  readonly wordlistID: string;
  readonly Attempts?: (Attempt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WordListItem, WordListItemMetaData>);
  static copyOf(source: WordListItem, mutator: (draft: MutableModel<WordListItem, WordListItemMetaData>) => MutableModel<WordListItem, WordListItemMetaData> | void): WordListItem;
}

export declare class WordList {
  readonly id: string;
  readonly name?: string | null;
  readonly seq?: number | null;
  readonly WordListItems?: (WordListItem | null)[] | null;
  readonly gradeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WordList, WordListMetaData>);
  static copyOf(source: WordList, mutator: (draft: MutableModel<WordList, WordListMetaData>) => MutableModel<WordList, WordListMetaData> | void): WordList;
}

export declare class Grade {
  readonly id: string;
  readonly level?: number | null;
  readonly name?: string | null;
  readonly WordLists?: (WordList | null)[] | null;
  readonly schoolID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Grade, GradeMetaData>);
  static copyOf(source: Grade, mutator: (draft: MutableModel<Grade, GradeMetaData>) => MutableModel<Grade, GradeMetaData> | void): Grade;
}

export declare class School {
  readonly id: string;
  readonly name?: string | null;
  readonly Grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<School, SchoolMetaData>);
  static copyOf(source: School, mutator: (draft: MutableModel<School, SchoolMetaData>) => MutableModel<School, SchoolMetaData> | void): School;
}