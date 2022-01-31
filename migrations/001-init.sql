-- Up
create table tbl_widgets (
    id serial,
    `name` text NOT NULL
);

-- Down
drop table tbl_widgets;
