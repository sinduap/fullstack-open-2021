import mongoose from 'mongoose'

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb://sinduap:${password}@cluster0-shard-00-00.1fext.mongodb.net:27017,cluster0-shard-00-01.1fext.mongodb.net:27017,cluster0-shard-00-02.1fext.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fx1w76-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(url).then(() => {
  console.log('connected to MongoDB')
})

const personSchema = mongoose.Schema({ name: String, number: String })

const Person = mongoose.model('Person', personSchema)

const person = new Person({ name, number })

if (!name && !number) {
  Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(({ name, number }) => {
      console.log(`${name} ${number}`)
    })
    mongoose.connection.close()
  })
}

if (name && number) {
  person.save().then(result => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
