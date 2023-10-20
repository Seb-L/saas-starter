/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  plan?: Maybe<Plan>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountCreate: Account;
  accountDelete: Account;
  login: TokenResponse;
  planCreate: Plan;
  planDelete: Plan;
  planUpdate: Plan;
  register: User;
  teamCreate: Team;
  teamDelete: Team;
  teamUpdate: Team;
  userCreate: User;
  userDelete: User;
  userUpdate: User;
};


export type MutationAccountDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPlanCreateArgs = {
  plan: PlanInput;
};


export type MutationPlanDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationPlanUpdateArgs = {
  id: Scalars['Int']['input'];
  plan: PlanInput;
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTeamCreateArgs = {
  team: TeamInput;
};


export type MutationTeamDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationTeamUpdateArgs = {
  id: Scalars['Int']['input'];
  team: TeamInput;
};


export type MutationUserCreateArgs = {
  user: UserInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['Int']['input'];
  user: UserInput;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  stripeProductId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PlanInput = {
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  stripeProductId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  plan: Plan;
  plans: Array<Plan>;
  team: Team;
  teams: Array<Team>;
  user: User;
  users: Array<User>;
};


export type QueryAccountArgs = {
  id: Scalars['Float']['input'];
};


export type QueryPlanArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTeamArgs = {
  id: Scalars['Float']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

export type Team = {
  __typename?: 'Team';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<User>;
};

export type TeamInput = {
  name: Scalars['String']['input'];
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  access_token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  account?: Maybe<Account>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  teams?: Maybe<Team>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};
