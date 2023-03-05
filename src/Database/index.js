const mongoose = require('mongoose');





mongoose.connect(`mongodb+srv://Carnel:${process.env.mongopwd}@cluster0.lt3vzdu.mongodb.net/?retryWrites=true&w=majority`);