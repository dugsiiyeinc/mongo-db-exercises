db.students.insertMany([
    {
        name:'ahmed nor',
        email:'ahmed@gmail.com',
        age:34,
        courses:['html','css','javascript',]
    },
    {
        name:'kadija ahmed',
        email:'kadija@gmail.com',
        courses:['html','css','javascript','tailwind css','React']
    },
    {
        name:'nora abdi',
        email:'nora@email.com',
        age:22,
        courses:['html','css','javascript','tailwind css']
    },
    {
        name:'abdi mohamed',
        email:'abdi@hotmail.com',
        age:33,
        courses:['html','css','javascript','tailwind css','React'],
        lives:'mogadishu',
        born:'bardhere'
    },
    {
        name:'hamda',
        email:'hamda',
         ourses:['html','css','javascript','tailwind css']
    }
])


// 1. Find students older than 22
db.students.find({age:{$gt:22}})

// 2. Find students enrolled in React
db.students.find({course:'React'})

// 3. Find students whose name starts with 'S'
db.students.find({name: {$regex:/^S/}})

// 4. Find students whose age is either 18 or 21
db.students.find({
    $or:[
        {age:22},
        {age:26}
    ]
})

// 5. Find students who are NOT using Gmail
db.students.find({email: {$not:/@gmail\.com$/}  })

// 6. Find students enrolled in React **and** older than 20
db.students.find({
    age: {$gt:20},
    course:'React'
})

// 7. Find students enrolled in React **or** Node.js
db.students.find({
    $or:[
        {course:'React'},
        {course:'css'}
    ]
})

// 8. BONUS: Use `$regex` to match names containing "x" or emails ending in `.edu`
db.students.find({
    $or:[
        {name: { $regex:/x/ } },
        {email: {$regex: /.edu$/}}
    ]
})