const {db} = require('./common/db');
db.table('device').insert({notificationToken:'123456789'}).then(()=>{
    console.log('inserted');
});
