

db.students.insertMany([
    {
        name:'ahmed nor',
        email:'ahmed@gmail.com',
        age:34,
        courses:['html','css','javascript','tailwind css','React']
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
        courses:['html','css','javascript','tailwind css','React']
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
         ourses:['html','css','javascript','tailwind css','React']
    }
])

db.students.find()

db.students.updateOne(
  {email:'nora@gmail.com'},
  { $set: {email:'noraAbdi@gmail.com'}}
)

db.students.deleteOne({email:'kadija@gmail.com'})

db.students.updateOne(
  {email:'abdi@hotmail.com'},

  {$set: {address:{
            street: {
              name: "Hodan Road",
              number: 245
            },
            city: "Mogadishu",
            district: "Hodan",
            state: "Banaadir",
            postalCode: "252",
            country: "Somalia",
        }}}
)
