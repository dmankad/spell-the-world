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
        }
        nextToken
      }
      gradeID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      gradeID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      gradeID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      schoolID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      schoolID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      schoolID
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
