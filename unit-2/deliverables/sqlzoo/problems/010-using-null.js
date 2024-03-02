/**
== Schema Information

Table name: teachers

id          :integer      not null, primary key
dept_id     :integer
name        :string
phone       :integer
mobile      :string

Table name: depts

id          :integer      not null, primary key
name        :string       not null
* */ 

require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

client.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");
});

async function null_dept() {
    // List the teachers who have NULL for their department.
    const res = await client.query(
        `
        SELECT
        teachers.name
        FROM
        teachers
        WHERE
        teachers.dept_id IS NULL;
        `
    );
    
    return res.rows;
}

async function all_teachers_join() {
    // Use a type of JOIN that will list all teachers and their department,
    // even if the department in NULL/nil.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function all_depts_join() {
    // Use a different JOIN so that all departments are listed.
    // NB: you can avoid RIGHT OUTER JOIN (and just use LEFT) by swapping
    // the FROM and JOIN tables.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function teachers_and_mobiles() {
    // Use COALESCE to print the mobile number. Use the number '07986
    // 444 2266' if no number is given. Show teacher name and mobile
    // #number or '07986 444 2266'
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function teachers_and_depts() {
    // Use the COALESCE function and a LEFT JOIN to print the teacher name and
    // department name. Use the string 'None' where there is no department.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function num_teachers_and_mobiles() {
    // Use COUNT to show the number of teachers and the number of
    // mobile phones.
    // NB: COUNT only counts non-NULL values.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function dept_staff_counts() {
    // Use COUNT and GROUP BY depts.name to show each department and
    // the number of staff. Structure your JOIN to ensure that the
    // Engineering department is listed.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function teachers_and_divisions() {
    // Use CASE to show the name of each teacher followed by 'Sci' if
    // the the teacher is in dept 1 or 2 and 'Art' otherwise.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

async function teachers_and_divisions_two() {
    // Use CASE to show the name of each teacher followed by 'Sci' if
    // the teacher is in dept 1 or 2, 'Art' if the dept is 3, and
    // 'None' otherwise.
    const res = await client.query(
        `
        
        `
    );
    
    return res.rows;
}

module.exports = {
    null_dept,
    all_teachers_join,
    all_depts_join,
    teachers_and_mobiles,
    teachers_and_depts,
    num_teachers_and_mobiles,
    dept_staff_counts,
    teachers_and_divisions,
    teachers_and_divisions_two,
};