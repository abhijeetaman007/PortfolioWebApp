const mongoose = require('mongoose');

const connectMongo = async () => {
    var mongouri = `mongodb+srv://abhijeetaman007:password_123@cluster0.e3a6y.mongodb.net/myportfolio?retryWrites=true&w=majority`;
    const con = await mongoose.connect(
        mongouri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) console.log(err);
            else console.log(`Connected to DB!!`);
        }
    );
};
module.exports = connectMongo;
