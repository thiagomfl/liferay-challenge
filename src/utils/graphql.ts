import { gql } from '@apollo/client'

export const FETCH_GITHUB_PROFILE = gql`
  {
    user(login: $username) {
      avatarUrl
    }
  }
`

export const FETCH_GITHUB_REPOSITORY = gql`
  {
    repository(name: $repository, owner: $username) {
      pullRequests(last: 100) {
        edges {
          node {
            additions
            deletions
            state
            closedAt
            createdAt
            merged
            mergedAt
          }
        }
      }
    }
  }
`
