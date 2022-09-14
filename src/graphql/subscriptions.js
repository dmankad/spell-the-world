/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWordListItem = /* GraphQL */ `
  subscription OnCreateWordListItem {
    onCreateWordListItem {
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
export const onUpdateWordListItem = /* GraphQL */ `
  subscription OnUpdateWordListItem {
    onUpdateWordListItem {
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
export const onDeleteWordListItem = /* GraphQL */ `
  subscription OnDeleteWordListItem {
    onDeleteWordListItem {
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
export const onCreateWordList = /* GraphQL */ `
  subscription OnCreateWordList {
    onCreateWordList {
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
export const onUpdateWordList = /* GraphQL */ `
  subscription OnUpdateWordList {
    onUpdateWordList {
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
export const onDeleteWordList = /* GraphQL */ `
  subscription OnDeleteWordList {
    onDeleteWordList {
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
export const onCreateGrade = /* GraphQL */ `
  subscription OnCreateGrade {
    onCreateGrade {
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
export const onUpdateGrade = /* GraphQL */ `
  subscription OnUpdateGrade {
    onUpdateGrade {
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
export const onDeleteGrade = /* GraphQL */ `
  subscription OnDeleteGrade {
    onDeleteGrade {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
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
