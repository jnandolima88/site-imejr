create table if not exists public.atividades (
  id text primary key,
  data date not null,
  area text not null,
  titulo text not null,
  descricao text not null,
  link text not null
);

alter table public.atividades enable row level security;

drop policy if exists "Atividades are publicly readable" on public.atividades;

create policy "Atividades are publicly readable"
on public.atividades
for select
to anon
using (true);
