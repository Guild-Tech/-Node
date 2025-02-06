const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URI}/Node`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error: ', err));
