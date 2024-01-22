/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGuess = /* GraphQL */ `
  subscription OnCreateGuess($filter: ModelSubscriptionGuessFilterInput) {
    onCreateGuess(filter: $filter) {
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
export const onUpdateGuess = /* GraphQL */ `
  subscription OnUpdateGuess($filter: ModelSubscriptionGuessFilterInput) {
    onUpdateGuess(filter: $filter) {
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
export const onDeleteGuess = /* GraphQL */ `
  subscription OnDeleteGuess($filter: ModelSubscriptionGuessFilterInput) {
    onDeleteGuess(filter: $filter) {
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
export const onCreateAttempt = /* GraphQL */ `
  subscription OnCreateAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onCreateAttempt(filter: $filter) {
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
export const onUpdateAttempt = /* GraphQL */ `
  subscription OnUpdateAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onUpdateAttempt(filter: $filter) {
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
export const onDeleteAttempt = /* GraphQL */ `
  subscription OnDeleteAttempt($filter: ModelSubscriptionAttemptFilterInput) {
    onDeleteAttempt(filter: $filter) {
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
export const onCreateWordListItem = /* GraphQL */ `
  subscription OnCreateWordListItem(
    $filter: ModelSubscriptionWordListItemFilterInput
  ) {
    onCreateWordListItem(filter: $filter) {
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
export const onUpdateWordListItem = /* GraphQL */ `
  subscription OnUpdateWordListItem(
    $filter: ModelSubscriptionWordListItemFilterInput
  ) {
    onUpdateWordListItem(filter: $filter) {
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
export const onDeleteWordListItem = /* GraphQL */ `
  subscription OnDeleteWordListItem(
    $filter: ModelSubscriptionWordListItemFilterInput
  ) {
    onDeleteWordListItem(filter: $filter) {
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
export const onCreateWordList = /* GraphQL */ `
  subscription OnCreateWordList($filter: ModelSubscriptionWordListFilterInput) {
    onCreateWordList(filter: $filter) {
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
export const onUpdateWordList = /* GraphQL */ `
  subscription OnUpdateWordList($filter: ModelSubscriptionWordListFilterInput) {
    onUpdateWordList(filter: $filter) {
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
export const onDeleteWordList = /* GraphQL */ `
  subscription OnDeleteWordList($filter: ModelSubscriptionWordListFilterInput) {
    onDeleteWordList(filter: $filter) {
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
export const onCreateGrade = /* GraphQL */ `
  subscription OnCreateGrade($filter: ModelSubscriptionGradeFilterInput) {
    onCreateGrade(filter: $filter) {
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
export const onUpdateGrade = /* GraphQL */ `
  subscription OnUpdateGrade($filter: ModelSubscriptionGradeFilterInput) {
    onUpdateGrade(filter: $filter) {
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
export const onDeleteGrade = /* GraphQL */ `
  subscription OnDeleteGrade($filter: ModelSubscriptionGradeFilterInput) {
    onDeleteGrade(filter: $filter) {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
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
