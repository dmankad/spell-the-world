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
        items {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          user
          dateStarted
          wordlistitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          user
          dateStarted
          wordlistitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          user
          dateStarted
          wordlistitemID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          word
          wordlistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          word
          wordlistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          word
          wordlistID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      gradeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          name
          seq
          gradeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          name
          seq
          gradeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          name
          seq
          gradeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      schoolID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          level
          name
          schoolID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          level
          name
          schoolID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        items {
          id
          level
          name
          schoolID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
