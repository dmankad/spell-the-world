import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

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

type EagerGuess = {
  readonly id: string;
  readonly attemptID: string;
  readonly dateGuessed?: string | null;
  readonly word?: string | null;
  readonly guess?: string | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGuess = {
  readonly id: string;
  readonly attemptID: string;
  readonly dateGuessed?: string | null;
  readonly word?: string | null;
  readonly guess?: string | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Guess = LazyLoading extends LazyLoadingDisabled ? EagerGuess : LazyGuess

export declare const Guess: (new (init: ModelInit<Guess, GuessMetaData>) => Guess) & {
  copyOf(source: Guess, mutator: (draft: MutableModel<Guess, GuessMetaData>) => MutableModel<Guess, GuessMetaData> | void): Guess;
}

type EagerAttempt = {
  readonly id: string;
  readonly user?: string | null;
  readonly dateStarted?: string | null;
  readonly wordlistitemID: string;
  readonly Guesses?: (Guess | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttempt = {
  readonly id: string;
  readonly user?: string | null;
  readonly dateStarted?: string | null;
  readonly wordlistitemID: string;
  readonly Guesses: AsyncCollection<Guess>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attempt = LazyLoading extends LazyLoadingDisabled ? EagerAttempt : LazyAttempt

export declare const Attempt: (new (init: ModelInit<Attempt, AttemptMetaData>) => Attempt) & {
  copyOf(source: Attempt, mutator: (draft: MutableModel<Attempt, AttemptMetaData>) => MutableModel<Attempt, AttemptMetaData> | void): Attempt;
}

type EagerWordListItem = {
  readonly id: string;
  readonly word?: string | null;
  readonly wordlistID: string;
  readonly Attempts?: (Attempt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWordListItem = {
  readonly id: string;
  readonly word?: string | null;
  readonly wordlistID: string;
  readonly Attempts: AsyncCollection<Attempt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WordListItem = LazyLoading extends LazyLoadingDisabled ? EagerWordListItem : LazyWordListItem

export declare const WordListItem: (new (init: ModelInit<WordListItem, WordListItemMetaData>) => WordListItem) & {
  copyOf(source: WordListItem, mutator: (draft: MutableModel<WordListItem, WordListItemMetaData>) => MutableModel<WordListItem, WordListItemMetaData> | void): WordListItem;
}

type EagerWordList = {
  readonly id: string;
  readonly name?: string | null;
  readonly seq?: number | null;
  readonly WordListItems?: (WordListItem | null)[] | null;
  readonly gradeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWordList = {
  readonly id: string;
  readonly name?: string | null;
  readonly seq?: number | null;
  readonly WordListItems: AsyncCollection<WordListItem>;
  readonly gradeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WordList = LazyLoading extends LazyLoadingDisabled ? EagerWordList : LazyWordList

export declare const WordList: (new (init: ModelInit<WordList, WordListMetaData>) => WordList) & {
  copyOf(source: WordList, mutator: (draft: MutableModel<WordList, WordListMetaData>) => MutableModel<WordList, WordListMetaData> | void): WordList;
}

type EagerGrade = {
  readonly id: string;
  readonly level?: number | null;
  readonly name?: string | null;
  readonly WordLists?: (WordList | null)[] | null;
  readonly schoolID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrade = {
  readonly id: string;
  readonly level?: number | null;
  readonly name?: string | null;
  readonly WordLists: AsyncCollection<WordList>;
  readonly schoolID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grade = LazyLoading extends LazyLoadingDisabled ? EagerGrade : LazyGrade

export declare const Grade: (new (init: ModelInit<Grade, GradeMetaData>) => Grade) & {
  copyOf(source: Grade, mutator: (draft: MutableModel<Grade, GradeMetaData>) => MutableModel<Grade, GradeMetaData> | void): Grade;
}

type EagerSchool = {
  readonly id: string;
  readonly name?: string | null;
  readonly Grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly id: string;
  readonly name?: string | null;
  readonly Grades: AsyncCollection<Grade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School, SchoolMetaData>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School, SchoolMetaData>) => MutableModel<School, SchoolMetaData> | void): School;
}