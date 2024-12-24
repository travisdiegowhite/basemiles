-- Create routes table
create table public.routes (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    user_id uuid references auth.users not null,
    route_data jsonb not null,
    name text,
    description text,
    
    constraint routes_user_id_fkey 
        foreign key (user_id) 
        references auth.users (id) 
        on delete cascade
);

-- Enable Row Level Security
alter table public.routes enable row level security;

-- Create policies
create policy "Users can read their own routes"
    on routes for select
    using (auth.uid() = user_id);

create policy "Users can insert their own routes"
    on routes for insert
    with check (auth.uid() = user_id);

create policy "Users can update their own routes"
    on routes for update
    using (auth.uid() = user_id);

create policy "Users can delete their own routes"
    on routes for delete
    using (auth.uid() = user_id);

-- Create indexes for better performance
create index routes_user_id_idx on routes(user_id);
create index routes_created_at_idx on routes(created_at);