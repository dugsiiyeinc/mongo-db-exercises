// 1. Insert 5 students with fields:
//     - `name`, `email`, `points`, `courses` (array)

db.students.insertMany([
    {
        name:'ahmed nor',
        email:'ahmed@gmail.com',
        courses:['html','css','javascript',],
        points:10
    },
    {
        name:'kadija ahmed',
        email:'kadija@gmail.com',
        courses:['html','css','javascript','tailwind css','React'],
        points:10
    },
    {
        name:'nora abdi',
        email:'nora@email.com',
        courses:['html','css','javascript','tailwind css'],
        points:10
    },
    {
        name:'abdi mohamed',
        email:'abdi@hotmail.com',
        courses:['html','css','javascript','tailwind css','React'],
        lives:'mogadishu',
        born:'bardhere',
        points:10
    },
    {
        name:'hamda',
        email:'hamda@hotmail.com',
        courses:['html','css','javascript','tailwind css'],
        points:10
    }
])

// 2. Use `$set` to update one email


db.students.updateOne({name:'hamda'},{$set:{email:'hamda@gmail.com'}})
// 3. Use `$inc` to increase points
db.students.updateMany({},{$inc:{points:100}})
// 4. Use `$push` to add a new course
db.students.updateMany({},{$push:{courses:'next.js'}})
// 5. Use `$pull` to remove a course
db.students.updateMany({},{$pull:{courses:'next.js'}})

// 6. BONUS: Update one student with `$set`, `$inc`, and `$push` together
db.students.updateOne(
    {name:'hamda'},
    {
        $set:{name:'hamda abdi'},
        $inc:{points:200},
        $push:{courses:'Laravel'}
    }
)