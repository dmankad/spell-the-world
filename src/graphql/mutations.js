/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuess = /* GraphQL */ `
  mutation CreateGuess(
    $input: CreateGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    createGuess(input: $input, condition: $condition) {
      id
      attemptID
      dateGuessed
      word
      guess
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGuess = /* GraphQL */ `
  mutation UpdateGuess(
    $input: UpdateGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    updateGuess(input: $input, condition: $condition) {
      id
      attemptID
      dateGuessed
      word
      guess
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGuess = /* GraphQL */ `
  mutation DeleteGuess(
    $input: DeleteGuessInput!
    $condition: ModelGuessConditionInput
  ) {
    deleteGuess(input: $input, condition: $condition) {
      id
      attemptID
      dateGuessed
      word
      guess
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAttempt = /* GraphQL */ `
  mutation CreateAttempt(
    $input: CreateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    createAttempt(input: $input, condition: $condition) {
      id
      user
      dateStarted
      wordlistitemID
      Guesses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAttempt = /* GraphQL */ `
  mutation UpdateAttempt(
    $input: UpdateAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    updateAttempt(input: $input, condition: $condition) {
      id
      user
      dateStarted
      wordlistitemID
      Guesses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAttempt = /* GraphQL */ `
  mutation DeleteAttempt(
    $input: DeleteAttemptInput!
    $condition: ModelAttemptConditionInput
  ) {
    deleteAttempt(input: $input, condition: $condition) {
      id
      user
      dateStarted
      wordlistitemID
      Guesses {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createWordListItem = /* GraphQL */ `
  mutation CreateWordListItem(
    $input: CreateWordListItemInput!
    $condition: ModelWordListItemConditionInput
  ) {
    createWordListItem(input: $input, condition: $condition) {
      id
      word
      wordlistID
      Attempts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateWordListItem = /* GraphQL */ `
  mutation UpdateWordListItem(
    $input: UpdateWordListItemInput!
    $condition: ModelWordListItemConditionInput
  ) {
    updateWordListItem(input: $input, condition: $condition) {
      id
      word
      wordlistID
      Attempts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteWordListItem = /* GraphQL */ `
  mutation DeleteWordListItem(
    $input: DeleteWordListItemInput!
    $condition: ModelWordListItemConditionInput
  ) {
    deleteWordListItem(input: $input, condition: $condition) {
      id
      word
      wordlistID
      Attempts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createWordList = /* GraphQL */ `
  mutation CreateWordList(
    $input: CreateWordListInput!
    $condition: ModelWordListConditionInput
  ) {
    createWordList(input: $input, condition: $condition) {
      id
      name
      seq
      WordListItems {
        nextToken
        startedAt
        __typename
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateWordList = /* GraphQL */ `
  mutation UpdateWordList(
    $input: UpdateWordListInput!
    $condition: ModelWordListConditionInput
  ) {
    updateWordList(input: $input, condition: $condition) {
      id
      name
      seq
      WordListItems {
        nextToken
        startedAt
        __typename
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteWordList = /* GraphQL */ `
  mutation DeleteWordList(
    $input: DeleteWordListInput!
    $condition: ModelWordListConditionInput
  ) {
    deleteWordList(input: $input, condition: $condition) {
      id
      name
      seq
      WordListItems {
        nextToken
        startedAt
        __typename
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createGrade = /* GraphQL */ `
  mutation CreateGrade(
    $input: CreateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    createGrade(input: $input, condition: $condition) {
      id
      level
      name
      WordLists {
        nextToken
        startedAt
        __typename
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateGrade = /* GraphQL */ `
  mutation UpdateGrade(
    $input: UpdateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    updateGrade(input: $input, condition: $condition) {
      id
      level
      name
      WordLists {
        nextToken
        startedAt
        __typename
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteGrade = /* GraphQL */ `
  mutation DeleteGrade(
    $input: DeleteGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    deleteGrade(input: $input, condition: $condition) {
      id
      level
      name
      WordLists {
        nextToken
        startedAt
        __typename
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      name
      Grades {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      name
      Grades {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      name
      Grades {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
