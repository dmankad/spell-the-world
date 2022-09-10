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
      }
      nextToken
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
        }
        nextToken
      }
      gradeID
      createdAt
      updatedAt
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
        }
        gradeID
        createdAt
        updatedAt
      }
      nextToken
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
        }
        nextToken
      }
      schoolID
      createdAt
      updatedAt
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
        }
        schoolID
        createdAt
        updatedAt
      }
      nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
