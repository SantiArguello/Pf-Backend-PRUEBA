const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:FmwhWNGNIpYQN5OsmUnb@containers-us-west-59.railway.app:7690", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
})
.then(() => console.log("la base de datos esta conectada"))
    .catch(err => console.log(err))
    