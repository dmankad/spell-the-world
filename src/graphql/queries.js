/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWordListItem = /* GraphQL */ `
  query GetWordListItem($id: ID!) {
    getWordListItem(id: $id) {
      id
      word
      wordlistID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWordListItems = /* GraphQL */ `
  query ListWordListItems(
    $filter: ModelWordListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWordListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncWordListItems = /* GraphQL */ `
  query SyncWordListItems(
    $filter: ModelWordListItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWordListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getWordList = /* GraphQL */ `
  query GetWordList($id: ID!) {
    getWordList(id: $id) {
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
export const listWordLists = /* GraphQL */ `
  query ListWordLists(
    $filter: ModelWordListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWordLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        seq
        WordListItems {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWordLists = /* GraphQL */ `
  query SyncWordLists(
    $filter: ModelWordListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWordLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        seq
        WordListItems {
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
      nextToken
      startedAt
    }
  }
`;
export const getGrade = /* GraphQL */ `
  query GetGrade($id: ID!) {
    getGrade(id: $id) {
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
export const listGrades = /* GraphQL */ `
  query ListGrades(
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        level
        name
        WordLists {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGrades = /* GraphQL */ `
  query SyncGrades(
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrades(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        level
        name
        WordLists {
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
      nextToken
      startedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Grades {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Grades {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
