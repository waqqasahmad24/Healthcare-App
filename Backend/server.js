const app = require('./index');
const connectDB = require('./config/dbConfig/db');

const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Multivitamins Backend Server running on port ${PORT}`);
  console.log(`🔗 http://localhost:${PORT}`);
});
