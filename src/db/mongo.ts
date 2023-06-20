import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // .env faylidan o'qib oladi

mongoose
  .connect(process.env.MONGODB_URI as string)  
  .then(() => {
    console.log('MongoDB-ga muvaffaqiyatli ulandik');
  })
  .catch((error) => {
    console.error('MongoDB-ga ulanishda xatolik:', error);
  });

  // export default mongoose;


// import mongoose from "mongoose";

// export function connectToDatabase() {
//   mongoose.connect('mongodb://localhost/restaurant', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

//   const db = mongoose.connection;

//   db.on('error', console.error.bind(console, 'Ulanishda xatolik yuz berdi:'));
//   db.once('open', function () {
//     console.log("MongoDB-serverga muvaffaqiyatli ulanildi!");
//   });
// }
// import mongodb from "mongodb";

// const {
//   MongoClient
// } = mongodb;
// !(async function () {
//   const connect = new MongoClient("mongodb://127.0.0.1:27017");
//   const client = await connect.connect();
//   const db = await client.db("oks");
//   const users = await db.collection("ssacwe");
//   console.log(await users.find().toArray());
//   console.log(await users.insertOne({
//     age: 25,
//     price: 16000
//   }));
// })();



// users.
// find()
//   .where("sport")
//   .equals("Tennis")
//   .where("age")
//   .gt(17)
//   .lt(50) //Дополнительное условие
//   .limit(5)
//   .sort({ age: -1 })
//   .select("name age")
//   .exec(callback);
// users.find({},{name:1})
// users.find({$or:[{age:30},{age:25}]},{name:1})
// users.find({$or:[{$gte:{age:20}},{age:25}]})
// users.find({ father: { $exists: true } });
// users.find({language:{$size:2}});
// users.find({language.1:'Uz');
// users.set('language.1.body', 'new comment');
// users.find({ name: "Ali" }).sort({ _id: -1 }).skip(5).limit(10)
// db.stats()
// users.bulkWrite([
//   { insertOne: { document: { name: "ohunjon" } } },
//   { updateOne: { filter: { name: "ohunjon" }, update: { $set: { age: 25 } } } },
// ]);
// users.createIndex({ comment: "text" });
// users.find({ $text: { $search:  "salom"  } });
// users.find({ $text: { $search:  "salom"  } },{score:{$meta:"textScore"}});
// users.find({ $text: { $search:  "salom"  } },{score:{$meta:"textScore"}}).sort({score:{$meta:"textScore"}});
// users.createIndex({name:1})
// users.createIndex({name:-1})

// {
//   type: Number,
//   max: 23,
//   min:10,
//   default:20
// }
// {
//   type: String,
//
//   default:20
// }
// {
//   timestamps: {
//     createAt:'create_at'
//   }
// }