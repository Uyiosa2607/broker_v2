# CAPITAL TRADES INVESTMENT WEBSITE

A modern investment web application built with React and Supabase. Users can easily fund their accounts, purchase investment plans, and withdraw their earnings seamlessly. Designed for simplicity, security, and a smooth user experience.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```
### 2. Install Dependencies

```
 npm install

```


### 3. Register a Supabase Project

```

Go to Supabase and create a new project.  
Get the Project URL and anon key from your Supabase dashboard under Settings > API.

```


### 4. Configure the Database
Set up the following tables in your Supabase project:

  #### Users Table (`Users`)
    Stores user data and role

```
 create table
    public."Users" (
    id uuid not null,
    created_at timestamp with time zone not null default now(),
    name text null,
    email text null,
    country text null,
    gender text null,
    img text null,
    address text null,
    phone text null,
    balance numeric null default '0'::numeric,
    role text null default 'user'::text,
    constraint Users_pkey primary key (id),
    constraint Users_id_fkey foreign key (id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;

```
####  Transactions Table (`Transactions`)
Tracks all deposits, withdrawals, and plan purchases.

  ```

    create table
    public."Transactions" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    method text not null,
    type text not null default 'deposit'::text,
    amount numeric not null default '0'::numeric,
    date timestamp without time zone null,
    user_id uuid not null default gen_random_uuid (),
    img text null,
    status text null default 'pending'::text,
    constraint Transactions_pkey primary key (id),
    constraint Transactions_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;

```

####  Profits Table (`Profits`)
Tracks all profits payout.

  ```

    create table
    public."Profits" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    amount numeric null,
    status text null default 'Paid out'::text,
    user_id uuid null default gen_random_uuid (),
    role text null default 'user'::text,
    constraint Profits_pkey primary key (id),
    constraint Profits_user_id_fkey foreign key (user_id) references "Users" (id) on update cascade on delete cascade
  ) tablespace pg_default;

```


###  5. Configure Environment Variables
  Create a .env file in the root of the project.
  Add the following variables, replacing <PROJECT_URL> and <ANON_KEY> with your Supabase project details:

```

    REACT_APP_SUPABASE_URL=<PROJECT_URL>
    REACT_APP_SUPABASE_ANON_KEY=<ANON_KEY>

```



### 6. Enable Row Level Security (RLS)
Turn on RLS for all tables in the Supabase dashboard.  
Configure policies to allow users to access only their own data.

-- Example policy to allow users to access their own account balances CREATE POLICY "users_select_own" ON accounts FOR SELECT USING (user_id = auth.uid());




### 7. Run the Application
Start the development server:
```
npm run dev

```

Visit `http://localhost:3000` in your browser to see the application.

## Features
- User authentication using Supabase.
- Fund accounts and track balances.
- Purchase investment plans with detailed returns.
- Seamless withdrawal process.

## License
This project is open-source and available under the MIT License.


